
import { SwiperSlide } from 'swiper/react';
import { Swiper } from 'swiper/react';
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Rating, ThinRoundedStar } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../Shared/SectionTitle";

const Review = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: reviews = [], refetch } = useQuery(['review'], async () => {
        const res = await axiosSecure.get('/review')
        return res.data;
    })

    const customStyles = {
        itemShapes: ThinRoundedStar,
        activeFillColor: '#f59e0b',
        inactiveFillColor: '#ffedd5',
    };

    return (
        <div className="mt-16 lg:mt-28">
            <SectionTitle subHeader='A global community of 10000+ students.' headers='What Our students Say'></SectionTitle>
            <div className="">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={40}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                    breakpoints={{
                        // When screen size is at least 992px (lg size)
                        992: {
                            slidesPerView: 2,
                        },
                        // When screen size is less than 992px (sm size)
                        0: {
                            slidesPerView: 1,
                        },
                    }}
                >
                    {
                        reviews.map(review => <SwiperSlide key={review._id}  >
                            <div className="card mb-10 shadow-lg lg:mt-10 mx-4 lg:mx-2">
                                <div className="card-body h-[520px] lg:h-[450px] text-center">
                                    <img className="w-36 object-cover rounded-full mx-auto" src={review.image} alt="" />
                                    <div className="mt-5 space-y-4">
                                        <p>{review.review}</p>
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={review.rating}
                                            itemStyles={customStyles}
                                            readOnly
                                            className="mx-auto"
                                        />
                                        <h1 className="text-xl font-bold">{review.studentName}</h1>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Review;