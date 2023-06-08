import { FaFacebookF, FaTwitter, FaTelegramPlane } from "react-icons/fa";

const PopularInstructorsCard = ({ course }) => {
    const { category, duration, fee, image, modules, instructor, rating, enrolled, title } = course


    return (
        <div className="max-w-[410px] cursor-pointer rounded col-span-1 overflow-hidden shadow-lg group-hover:blur-sm hover:!blur-none transform group-hover:scale-[0.85] hover:!scale-100 transition-transform duration-500">

            <div className="mt-6">
                <img src={image} alt="Card Image" className="w-[100px] h-[100px] mx-auto rounded-full object-cover" />
            </div>

            <div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl text-[#082A5E] text-center mb-2">{instructor}</div>
                </div>
                <hr className="mx-4" />
                <div className="flex justify-center items-center gap-4 px-6 py-5">
                    <button className="bg-[#082A5E] h-8 w-8 px-2 py-2 rounded-full">
                        <span><FaFacebookF className="text-white"></FaFacebookF></span>
                    </button>
                    <button className="bg-[#1363DF] h-8 w-8 px-2 py-2 rounded-full">
                        <span><FaTwitter className="text-white"></FaTwitter></span>
                    </button>
                    <button className="bg-[#229ED9] h-8 w-8 px-2 py-2 rounded-full">
                        <span><FaTelegramPlane className="text-white"></FaTelegramPlane></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PopularInstructorsCard;