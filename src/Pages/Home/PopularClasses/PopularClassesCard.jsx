import { RxCounterClockwiseClock, RxReader } from "react-icons/rx";
import { LuUsers } from "react-icons/lu";
import ReactStars from "react-rating-stars-component";

const PopularClassesCard = ({ course }) => {
    const { category, duration, price, image, modules, rating, available_seats, enrolled_students, title } = course

    const courseRating = {
        size: 24,
        value: rating,
        edit: false
    };

    return (
        <div className="max-w-[410px] rounded col-span-1 overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="relative">
                <img src={image} alt="Card Image" className="w-full h-[250px] object-cover" />
                <span className="absolute top-6 right-6 bg-white rounded-full px-3 py-1 text-lg font-semibold text-[#1362DD]">{category}</span>
            </div>
            <div className="my-6">
                <div className="flex justify-between px-6">
                    <span className="flex justify-center items-center gap-1 font-normal text-md text-[#082A5E] mr-2"><RxReader></RxReader> {modules} lessons</span>
                    <span className="flex justify-center items-center gap-1 font-normal text-md text-[#082A5E] mr-2"> <RxCounterClockwiseClock></RxCounterClockwiseClock>{duration}</span>
                    {
                        enrolled_students === 0 ?
                            <>
                                <p className="flex justify-center items-center gap-1 font-normal text-md text-[#082A5E] mr-2"><LuUsers></LuUsers><span> None </span></p>
                            </>
                            :
                            <>
                                <p
                                    className="flex justify-center items-center gap-1 font-normal text-md text-[#082A5E] mr-2"
                                >
                                    <LuUsers></LuUsers>
                                    <span>
                                        {enrolled_students < 10 ? `0${enrolled_students}` : enrolled_students} <span className=''>Students</span> 
                                    </span>
                                </p>
                            </>
                    }
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl text-[#082A5E] mb-2">{title}</div>
                    <div className="space-y-3">
                        <span className="flex justify-start items-center gap-2 text-[#082A5E] text-lg font-semibold">
                            <ReactStars {...courseRating} />
                            {
                                !rating ?
                                    <>
                                        <span className='text-[#082A5E]'>(NAN)</span>
                                    </>
                                    :
                                    <>
                                        ({rating})
                                    </>
                            }
                        </span>

                        <p className="text-[#082A5E] text-md font-semibold">Available Seats: {available_seats}</p>
                    </div>

                </div>
                <hr className="mx-6 my-4" />
                <div className="px-6 pt-4">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-[#082A5E]">${price}</span>
                </div>
            </div>
        </div>
    );
};

export default PopularClassesCard;