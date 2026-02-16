// import { type } from 'firebase/firestore/pipelines';
import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import AuthInfo from '../../authContext/farebagseAurh/AuthInfo';
import useAxiosSecure from '../../hooks/useAxiosSecure';


const generateTrackingID = () => {
    const date = new Date();
    const datePart = date.toISOString().split("T")[0].replace(/-/g, "");
    const rand = Math.random().toString(36).substring(2, 7).toUpperCase();
    return `PCL-${datePart}-${rand}`;
};
const Parcel = () => {

    const {
        register,
        handleSubmit,
        control,
        // formState: { errors },
        reset
    } = useForm({
        defaultValues: { parcelType: "document" }
    });
    // const axiosSecure = UseAxiosSecure();
    const { user } = AuthInfo();
    const axiosSecure = useAxiosSecure();

    const serviceCenters = useLoaderData();

    // console.log(serviceCenters.region ,'asi vai asi ')
    const regionsDuplicate = serviceCenters.map(c => c.region);

    const regions = [...new Set(regionsDuplicate)];
    // explore useMemo useCallback
    const senderRegion = useWatch({ control, name: 'senderRegion' });
    const receiverRegion = useWatch({ control, name: 'receiverRegion' });
    const parcelType = useWatch({ control, name: 'type', });
    const districtsByRegion = (region) => {
        const regionDistricts = serviceCenters.filter(c => c.region === region);
        const districts = regionDistricts.map(d => d.district);
        return districts;
    };

    const handleSendParcel = (data) => {
        const weight = parseFloat(data.weight) || 0;
        const isSameDistrict = data.sender_center === data.receiver_center;

        let baseCost = 0;
        let extraCost = 0;
        let breakdown = "";

        if (data.type === "document") {
            baseCost = isSameDistrict ? 60 : 80;
            breakdown = `Document delivery ${isSameDistrict ? "within" : "outside"} the district.`;
        } else {
            if (weight <= 3) {
                baseCost = isSameDistrict ? 110 : 150;
                breakdown = `Non-document up to 3kg ${isSameDistrict ? "within" : "outside"} the district.`;
            } else {
                const extraKg = weight - 3;
                const perKgCharge = extraKg * 40;
                const districtExtra = isSameDistrict ? 0 : 40;
                baseCost = isSameDistrict ? 110 : 150;
                extraCost = perKgCharge + districtExtra;

                breakdown = `
        Non-document over 3kg ${isSameDistrict ? "within" : "outside"} the district.<br/>
        Extra charge: ৳40 x ${extraKg.toFixed(1)}kg = ৳${perKgCharge}<br/>
        ${districtExtra ? "+ ৳40 extra for outside district delivery" : ""}
      `;
            }
        }

        const totalCost = baseCost + extraCost;

        Swal.fire({
            title: "Delivery Cost Breakdown",
            icon: "info",
            html: `
      <div class="text-left text-base space-y-2">
        <p><strong>Parcel Type:</strong> ${data.type}</p>
        <p><strong>Weight:</strong> ${weight} kg</p>
        <p><strong>Delivery Zone:</strong> ${isSameDistrict ? "Within Same District" : "Outside District"}</p>
        <hr class="my-2"/>
        <p><strong>Base Cost:</strong> ৳${baseCost}</p>
        ${extraCost > 0 ? `<p><strong>Extra Charges:</strong> ৳${extraCost}</p>` : ""}
        <div class="text-gray-500 text-sm">${breakdown}</div>
        <hr class="my-2"/>
        <p class="text-xl font-bold text-green-600">Total Cost: ৳${totalCost}</p>
      </div>
    `,
            showDenyButton: true,
            confirmButtonText: "💳 Proceed to Payment",
            denyButtonText: "✏️ Continue Editing",
            confirmButtonColor: "#16a34a",
            denyButtonColor: "#d3d3d3",
            customClass: {
                popup: "rounded-xl shadow-md px-6 py-6",
            },
        }).then((result) => {
            if (result.isConfirmed) {
                const tracking_id = generateTrackingID()
                const parcelData = {
                    ...data,
                    cost: totalCost,
                    created_by: user?.email,
                    payment_status: 'unpaid',
                    delivery_status: 'not_collected',
                    creation_date: new Date().toISOString(),
                    tracking_id: tracking_id,
                };

                console.log("Ready for payment:", parcelData);

                axiosSecure.post('/parcels', parcelData)
                    .then(async (res) => {
                        console.log(res.data);
                        if (res.data.insertedId) {
                            Swal.fire({
                                title: "Redirecting...",
                                text: "Proceeding to payment gateway.",
                                icon: "success",
                                timer: 1500,
                                showConfirmButton: false,
                            });

                            /*   await logTracking({
                                  tracking_id: parcelData.tracking_id,
                                  status: "parcel_created",
                                  details: `Created by ${user.displayName}`,
                                  updated_by: user.email,
                              }) */

                            //  navigate('/dashboard/myParcels')
                        }
                    })

            }
        });
        reset()
    };

    return (
        <div className=" mt-4 mb-8 bg-[#ffffff] shadow-sm rounded-xl">
            <div className=" lg:px-20 lg:py-15 md:px-15 mg:py-10 px-8 py-4  flex flex-col  md:flex-row lg:flex-row gsp-5">
                {/* input */}
                <div className='text-start space-y-4 items-center flex-1 '>
                    <h1 className="text-5xl text-start font-extrabold dark:text-[#03373D]">Send A Parcel</h1>
                    <h1 className="text-2xl items-center mt-6 text-start font-extrabold dark:text-[#03373D]">Enter your parcel details</h1>
                    {/* <p className="my-8">
                <span className="font-medium dark:text-gray-900">Modular and versatile.</span>Fugit vero facilis dolor sit neque cupiditate minus esse accusamus cumque at.
            </p> */}
                    <form onSubmit={handleSubmit(handleSendParcel)} noValidate="" action="" className="self-stretch mt-2 space-y-5">
                        <div className=" border border-b  border-dashed border-[#00000010] my-4"></div>
                        {/* check box */}
                        <div className="text-start flex gap-6 ">
                            <div className=" items-center">
                                <input
                                    type="radio"
                                    value="document"
                                    {...register("type")}
                                    defaultChecked
                                    className="radio radio-primary" />  Document
                            </div>
                            <div className="items-center space-x-1">
                                <input
                                    type="radio"
                                    value="not-document"
                                    {...register("type")}
                                    className="radio radio-secondary" /> Not-Document

                            </div>
                        </div>
                        {/* Parcel Name*/}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                            <div className="space-y-1 text-sm">
                                <label htmlFor="username" className="block font-bold dark:text-[#1f1f1f] text-lg">Parcel Name</label>
                                <input type="text" {...register('parcelName')} placeholder="Parcel Name" className="w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" />
                            </div>
                            {/* Parcel Weight (KG) */}
                            <div className="space-y-1 text-sm">
                                <label htmlFor="username" className="block font-bold dark:text-[#1f1f1f] text-lg">Parcel Weight (KG)</label>
                                <input
                                    type="text"
                                    {...register('parcelWeight')}
                                    placeholder="Parcel Weight (KG)"
                                    disabled={parcelType === "document"}
                                    className="w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" />
                            </div>
                        </div>
                        <div className=" border border-b  border-dashed border-[#00000010] my-6"></div>
                        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">

                            {/* Sender Details */}
                            <div className=" space-y-3">
                                <div className="text-2xl text-[#03373D] font-extrabold my-4">Sender Details</div>
                                {/*Sender Name */}
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="username" className="block font-bold dark:text-[#1f1f1f] text-lg">Sender Name</label>
                                    <input type="text" {...register("senderName")} placeholder="Sender Name" className="w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" />
                                </div>
                                {/* Sender Phone No */}
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="username" className="block font-bold dark:text-[#1f1f1f] text-lg">Sender Phone No</label>
                                    <input type="number" {...register("senderPhoneNo")} placeholder="Sender Phone No" className="w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" />
                                </div>
                                {/*Address*/}
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="username" className="block font-bold dark:text-[#1f1f1f] text-lg">Address</label>
                                    <select
                                        {...register('senderRegion')}
                                        defaultValue="Pick a region"
                                        className=" select w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600">
                                        <option disabled={true}>Pick a region</option>
                                        {
                                            regions.map((r, i) => <option key={i} value={r}>{r}</option>)
                                        }
                                    </select>
                                </div>
                                {/* Your District */}
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="username" className="block font-bold dark:text-[#1f1f1f] text-lg">Your District</label>
                                    <select
                                        {...register('senderDistrict')}
                                        defaultValue="Pick a district"
                                        className="select w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600">
                                        <option disabled={true}>Pick a district</option>
                                        {
                                            districtsByRegion(senderRegion).map((r, i) => <option key={i} value={r}>{r}</option>)
                                        }
                                    </select>
                                </div>
                                {/*Pickup Instruction */}
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="username" className="block font-bold dark:text-[#1f1f1f] text-lg">Pickup Instruction</label>
                                    <textarea type="text" {...register("pickupInstruction")} placeholder="Pickup Instruction" className="w-full h-20 px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" />
                                </div>
                            </div>

                            {/* Receiver Details */}
                            <div className="space-y-3">
                                <div className="text-2xl text-[#03373D] font-extrabold my-4">Receiver Details</div>
                                {/* Receiver Name*/}
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="username" className="block font-bold dark:text-[#1f1f1f] text-lg">Receiver Name</label>
                                    <input type="text" {...register("receiverName")} placeholder="Receiver Name" className="w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" />
                                </div>

                                {/*Receiver Contact No */}
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="username" className="block font-bold dark:text-[#1f1f1f] text-lg">Receiver Contact No</label>
                                    <input type="number" {...register("receiverPhoneNo")} placeholder="Receiver Contact No" className="w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" />
                                </div>
                                {/*Receiver Address */}
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="username" className="block font-bold dark:text-[#1f1f1f] text-lg">Receiver Address</label>

                                    <select
                                        {...register('receiverRegion')}
                                        defaultValue="Pick a region"
                                        className=" select w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600">
                                        <option disabled={true}>Pick a region</option>
                                        {
                                            regions.map((r, i) => <option key={i} value={r}>{r}</option>)
                                        }
                                    </select>
                                </div>
                                {/*Receiver District */}
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="username" className="block font-bold dark:text-[#1f1f1f] text-lg">Receiver District</label>
                                    <select
                                        {...register('receiverDistrict')}
                                        defaultValue="Pick a district"
                                        className="select w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600">
                                        <option disabled={true}>Pick a district</option>
                                        {
                                            districtsByRegion(receiverRegion).map((r, i) => <option key={i} value={r}>{r}</option>)
                                        }
                                    </select>
                                </div>
                                {/*Delivery Instruction */}
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="username" className="block font-bold dark:text-[#1f1f1f] text-lg">Delivery Instruction</label>
                                    <textarea type="text" {...register("deliveryInstruction")} placeholder="Delivery Instruction" className="w-full h-20 px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" />
                                </div>
                            </div>
                        </div>
                        {/* button */}
                        <p>* PickUp Time 4pm-7pm Approx.</p>
                        <button type="submit" className="font-extrabold py-3 w-full  text-[#1f1f1f] rounded dark:bg-[#CAEB66] border-2 dark:border-[#caeb66]">Proceed to Confirm Booking</button>

                    </form>

                </div>

            </div>
        </div>
    );
};

export default Parcel;