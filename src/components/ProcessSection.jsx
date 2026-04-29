
import { TbTargetArrow } from "react-icons/tb";
import { BiConversation } from "react-icons/bi";
import { FiDollarSign } from "react-icons/fi";
const ProcessSection = () => {
    return (
        <section className="py-20 text-center max-w-6xl mx-auto px-4">

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#456882] mb-4">
                Boost your business with “DirectStay Engine™”
            </h2>

            <p className="text-gray-600 mb-12">
                A proven system to turn visitors into direct bookings
            </p>

            {/* 3 Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

                <div className="bg-[#234C6A] p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
                    <div className="flex items-center justify-center h-16 w-16 bg-blue-100 text-blue-600 rounded-full mb-6 mx-auto">
                        <TbTargetArrow className="h-10 w-10 text-[#1c75bc]" />
                    </div>
                    <h3 className="text-2xl md:text-3xl Poppins-font font-[300] text-white mb-4 text-center ">ATTRACT</h3>
                    <p className="text-white text-center">Target high-intent travelers through SEO & Google Ads 
                    </p>
                </div>
                {/* Vision Card */}
                <div className="bg-[#234C6A] p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
                    <div className="flex items-center justify-center h-16 w-16 bg-blue-100 text-blue-600 rounded-full mb-6 mx-auto">
                        <BiConversation className="h-10 w-10 text-[#1c75bc]" />
                    </div>
                    <h3 className="text-2xl md:text-3xl Poppins-font font-[300] text-white mb-4 text-center ">CONVINCE</h3>
                    <p className="text-white text-center">Story-driven websites that make guests feel your property
                    </p>
                </div>

                {/* Mission Card */}
                <div className="bg-[#234C6A] p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
                    <div className="flex items-center justify-center h-16 w-16 bg-green-100 text-green-600 rounded-full mb-6 mx-auto">
                        {/* Mission Icon (Target) */}
                        <FiDollarSign className="h-10 w-10 text-[#1c75bc]" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-[300] Poppins-font text-white mb-4 text-center">CONVERT</h3>
                    <p className="text-white text-center">
                        Optimized booking journeys that turn visits into reservations 
                    </p>
                </div>

            </div>

        </section>
    );
};

export default ProcessSection;