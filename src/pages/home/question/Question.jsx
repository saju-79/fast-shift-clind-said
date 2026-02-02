import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router';

const Question = () => {
    return (
        <div className='lg:my-10 md:my-5 my-2 '>
            <div className="text-center items-center space-y-2  ">
                <h1 className='lg:text-5xl mg:text-3xl text-2xl font-extrabold text-[#03373D]'>Frequently Asked Question (FAQ)</h1>
                <p className='text-[#606060] lg:text-xl mg:text-lg text-sm font-medium'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            </div>
            {/* qution felt */}
            <div className=" space-y-2.5 lg:mt-6 md:mt-4 mt-2">
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title font-semibold text-[#03373D]">How will I be notified when the product is back in stock?</div>
                    <div className="collapse-content text-sm text-[#606060]"> A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold text-[#03373D]">Does it have smart features like vibration alerts?</div>
                    <div className="collapse-content text-sm text-[#606060]"> A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold text-[#03373D]">Does it really help with back pain and posture improvement?</div>
                    <div className="collapse-content text-sm text-[#606060]"> A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold text-[#03373D]">Is it suitable for all ages and body types?</div>
                    <div className="collapse-content text-sm text-[#606060]"> A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Hers how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.</div>
                </div>
            </div>
            <div className=" text-center items-center lg:my-6 md:my-4 my-2 ">
                <Link to='/'><button className='text-[#1F1F1F] text-sm md:text-lg lg:text-xl rounded-[ 12px]  px-6 py-4  rounded-xl font-bold bg-[#CAEB66]'>See More FAQ s</button></Link>
                
            </div>

        </div>
    );
};

export default Question;




