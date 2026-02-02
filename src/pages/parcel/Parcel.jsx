import React from 'react';

const Parcel = () => {
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
                    <form noValidate="" action="" className="self-stretch mt-2 space-y-5">
                        <div className=" border border-b  border-dashed border-[#00000010] my-4"></div>
                        {/* check box */}
                        <div className="text-start flex gap-6 ">
                            <div className=" items-center">
                                <input type="checkbox" defaultChecked className="checkbox checkbox-primary" />  Document
                            </div>
                            <div className="items-center space-x-1">
                                <input type="checkbox" defaultChecked className="checkbox checkbox-secondary" /> Not-Document

                            </div>
                        </div>
                        {/* Parcel Name*/}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                            <div className="space-y-1 text-sm">
                                <label htmlFor="username" className="block font-bold dark:text-[#1f1f1f] text-lg">Parcel Name</label>
                                <input type="text" name="ParcelName" placeholder="Parcel Name" className="w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" />
                            </div>
                            {/* Parcel Weight (KG) */}
                            <div className="space-y-1 text-sm">
                                <label htmlFor="username" className="block font-bold dark:text-[#1f1f1f] text-lg">Parcel Weight (KG)</label>
                                <input type="text" name="ParcelWeight" placeholder="Parcel Weight (KG)" className="w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" />
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
                                    <input type="text" name="SenderName" placeholder="Sender Name" className="w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" />
                                </div>
                                {/*Address*/}
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="username" className="block font-bold dark:text-[#1f1f1f] text-lg">Address</label>
                                    <input type="text" name="Address" placeholder="Address" className="w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" />
                                </div>
                                {/* Sender Phone No */}
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="username" className="block font-bold dark:text-[#1f1f1f] text-lg">Sender Phone No</label>
                                    <input type="text" name="SenderPhoneNo" placeholder="Sender Phone No" className="w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" />
                                </div>
                                {/* Your District */}
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="username" className="block font-bold dark:text-[#1f1f1f] text-lg">Your District</label>
                                    <input type="text" name="YourDistrict" placeholder="Your District" className="w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" />
                                </div>
                                {/*Pickup Instruction */}
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="username" className="block font-bold dark:text-[#1f1f1f] text-lg">Pickup Instruction</label>
                                    <textarea type="text" name="PickupInstruction" placeholder="Pickup Instruction" className="w-full h-20 px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" />
                                </div>
                            </div>

                            {/* Receiver Details */}
                            <div className="space-y-3">
                                <div className="text-2xl text-[#03373D] font-extrabold my-4">Receiver Details</div>
                                {/* Receiver Name*/}
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="username" className="block font-bold dark:text-[#1f1f1f] text-lg">Receiver Name</label>
                                    <input type="text" name="ReceiverName" placeholder="Receiver Name" className="w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" />
                                </div>
                                {/*Receiver Address */}
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="username" className="block font-bold dark:text-[#1f1f1f] text-lg">Receiver Address</label>
                                    <input type="text" name="ReceiverAddress" placeholder="Receiver Address" className="w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" />
                                </div>
                                {/*Receiver Contact No */}
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="username" className="block font-bold dark:text-[#1f1f1f] text-lg">Receiver Contact No</label>
                                    <input type="text" name="ReceiverContactNo" placeholder="Receiver Contact No" className="w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" />
                                </div>
                                {/*Receiver District */}
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="username" className="block font-bold dark:text-[#1f1f1f] text-lg">Receiver District</label>
                                    <input type="text" name="ReceiverDistrict " placeholder="Receiver District" className="w-full px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" />
                                </div>
                                {/*Delivery Instruction */}
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="username" className="block font-bold dark:text-[#1f1f1f] text-lg">Delivery Instruction</label>
                                    <textarea type="text" name="DeliveryInstruction " placeholder="Delivery Instruction" className="w-full h-20 px-4 py-3 rounded-md dark:border-[#94A3B8] dark:text-[#1f1f1f] dark:bg-gray-200 font-medium focus:dark:border-violet-600" />
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