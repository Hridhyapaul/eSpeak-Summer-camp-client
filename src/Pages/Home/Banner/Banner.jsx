import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const Banner = () => {
    const bannerData = [
        {
            id: 1,
            text: 'Unlock your potential through immersive language learning experiences',
            sub_text: 'Master New Languages',
            image: 'https://i.ibb.co/vxzxY09/Banner-3.png',
        },
        {
            id: 2,
            text: 'Discover diverse cultures and open doors to global opportunities',
            sub_text: 'Expand Your Horizons',
            image: 'https://i.ibb.co/HtHwtrb/Banner-1.png',
        },
        {
            id: 3,
            text: 'Gain fluency and connect with people from around the world',
            sub_text: 'Communicate with Confidence',
            image: 'https://i.ibb.co/Xyg9Q08/Banner-2.png',
        },
    ];

    const bannerStyle = {
        background: 'linear-gradient(to right, #0A2A5A, rgba(149, 70, 245, 0.0))',
    };

    return (
        <Swiper
            navigation
            pagination={{ clickable: true }}
            spaceBetween={0}
            slidesPerView={1}
        >
            {bannerData.map((item) => (
                <SwiperSlide key={item.id}>
                    <div className="banner-slide w-full mt-28 xl:mt-0 lg:px-20 lg:h-[650px] font-body">
                        <div className='relative flex justify-end items-center lg:mt-20'>
                            <div className="banner-image lg:w-1/2 h-[400px] lg:h-[600px]">
                                <img className='transform scale-x-[-1] w-full mx-auto h-[300px] lg:h-[600px] object-cover' src={item.image} alt="Banner" />
                            </div>
                        </div>
                        <div className='absolute inset-0' style={bannerStyle}>
                            <div className='pl-20 flex justify-start items-center h-full'>
                                <div className="banner-text lg:w-1/2 w-full space-y-10">
                                    <h2 className='text-md lg:text-2xl font-bold bg-[#E7EFFC] text-deepColor w-fit px-4 py-2 rounded-xl'>{item.sub_text}</h2>
                                    <h2 className='text-2xl lg:text-4xl font-bold text-white'>{item.text}</h2>
                                    <button className='bg-white text-[#0A2A5A] text-[16px] font-bold px-4 py-2 rounded '>Explore</button>
                                    {/* Additional text or elements */}
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Banner;
