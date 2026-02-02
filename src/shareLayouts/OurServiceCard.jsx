import React from 'react';

import {
    FaShippingFast,
    FaTruck,
    FaWarehouse,
    FaMoneyBillWave,
    FaBuilding,
    FaUndoAlt,
} from "react-icons/fa";
const OurServerCard = ({ service }) => {

    const iconMap = {
        "Express & Standard Delivery": FaShippingFast,
        "Nationwide Delivery": FaTruck,
        "Fulfillment Solution": FaWarehouse,
        "Cash on Home Delivery": FaMoneyBillWave,
        "Corporate Service / Contract In Logistics": FaBuilding,
        "Parcel Return": FaUndoAlt,
    };
    const { description, title, } = service;
    const Icon = iconMap[title]
    // console.log(service)
    return (

        <div className="bg-white p-6 rounded-2xl shadow-md text-center space-y-2.5 hover:bg-[#CAEB66]" >
            <div className="w-20 h-20 mx-auto bg-sky-100 rounded-full flex items-center justify-center mb-4">
                <div className="text-primary" ><Icon size={33} ></Icon> </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
            <p className="text-sm text-[#606060] font-medium">{description}</p>
        </div>

    );
};

export default OurServerCard;