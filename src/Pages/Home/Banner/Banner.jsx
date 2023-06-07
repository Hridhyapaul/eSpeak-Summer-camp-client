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
            image: '../../../../public/Images/Banner-1.png',
        },
        {
            id: 2,
            text: 'Discover diverse cultures and open doors to global opportunities',
            sub_text: 'Expand Your Horizons',
            image: '../../../../public/Images/Banner-2.png',
        },
        {
            id: 3,
            text: 'Gain fluency and connect with people from around the world',
            sub_text: 'Communicate with Confidence',
            image: '../../../../public/Images/Banner-3.png',
        },
    ];

    return (
        <Swiper
            navigation
            pagination={{ clickable: true }}
            spaceBetween={0}
            slidesPerView={1}
        >
            {bannerData.map((item) => (
                <SwiperSlide key={item.id}>
                    <div className="banner-slide flex justify-between items-center gap-6 px-20 h-[650px]">
                        <div className="banner-text w-1/2 space-y-10">
                            <h2 className='text-2xl font-bold bg-[#6246ea] text-white w-fit px-4 py-2 rounded-xl'>{item.sub_text}</h2>
                            <h2 className='text-4xl font-bold text-[#6246ea]'>{item.text}</h2>
                            <button className='bg-[#6246ea] text-white text-[16px] font-semibold px-4 py-2 rounded '>Explore</button>
                            {/* Additional text or elements */}
                        </div>
                        <div className="banner-image w-1/2">
                            <img className='transform scale-x-[-1] h-[600px] object-cover' src={item.image} alt="Banner" />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Banner;
