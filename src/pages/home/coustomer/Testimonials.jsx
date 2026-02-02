import { useEffect, useState } from "react";
// import testimonials from "../data/testimonials";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ITEMS_PER_PAGE = 3;

const Testimonials = () => {
    const [testimonials, settestimonials] = useState([])
    useEffect(() => {
        fetch('/costomer.json')
            .then(res => res.json())
            .then(data => settestimonials(data))
    }, [])
    // const testimonials = []

    const [page, setPage] = useState(1);

    const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const currentData = testimonials.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );

    return (
        <div className="max-w-6xl mx-auto py-16 px-4">
            {/* <h2 className="text-3xl font-bold text-center mb-12">
                What Our Clients Say
            </h2> */}

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-6">
                {currentData.map((item) => (
                    <div
                        key={item.id}
                        data-aos="fade-up"
                        className="bg-white p-6 rounded-xl shadow-md text-center "
                    >
                       <div className="text-start ">
                         <img src="https://i.ibb.co.com/Dg8tsMtm/review-Quote.png" alt="" />
                         <p className="text-gray-600 mb-6">{item.comment.slice(0 ,70)}</p>
                         {/* <p className="text-gray-600 mb-6 p-2">A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. </p> */}
                       </div>
                         <div className=" border border-l-2 border-dashed border-[#606060] my-4"></div>
                        <div className="flex  lg:flex md:flex items-start gap-2">
                            <div className="w-12 h-12 rounded-full bg-gray-300">
                                <img src="https://i.ibb.co.com/0jg35XVs/agent-pending.png" alt="" />
                            </div>
                            <div className=" text-start ml-2">
                                <h4 className="font-semibold text-[#03373D] text-lg">{item.name}</h4>
                                <h1 className="text-sm text-gray-500">
                                    {item.role}
                                </h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-3 mt-10">
                <button
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                    className="p-2 rounded-full border disabled:opacity-40"
                >
                    <FaArrowLeft />
                </button>

                {[...Array(totalPages).keys()].map((num) => (
                    <button
                        key={num}
                        onClick={() => setPage(num + 1)}
                        className={`w-3 h-3 rounded-full ${page === num + 1 ? "bg-lime-500" : "bg-gray-300"
                            }`}
                    ></button>
                ))}

                <button
                    onClick={() => setPage(page + 1)}
                    disabled={page === totalPages}
                    className="p-2 rounded-full border disabled:opacity-40"
                >
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default Testimonials;
