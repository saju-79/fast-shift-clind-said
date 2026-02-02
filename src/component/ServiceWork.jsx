import { FaBuilding, FaMapMarkedAlt, FaMoneyBillWave, FaWarehouse } from "react-icons/fa";


const ServiceWork = ({ work }) => {
    // console.log(work)
    const { title, pragrap } = work;
    const iconMap = {
        "Booking Pick & Drop": FaMapMarkedAlt,
        "Booking SME & Corporate": FaBuilding,
        "Delivery Hub": FaWarehouse,
        "Cash On Delivery": FaMoneyBillWave,
    };
    const Icon = iconMap[title]
    return (


        <div className="bg-white p-6 rounded-2xl shadow-md hover:bg-[#CAEB66]  ">
            <div className="w-full h-15">
                {/* <img src={icon} alt={title} className="w-15 h-15 " /> */}
                <div className="text-[#33929D]">
                    <Icon size={35}></Icon>
                </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#33929D]">{title}</h3>
            <p className="text-sm text-[#606060] font-medium ">{pragrap}</p>
        </div>


    );
};

export default ServiceWork;