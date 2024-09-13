import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ActiveSlider = () =>{
    return (
        <Swiper
          modules={[Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className='h-[200px] bg-cardDark rounded-lg'>
                <div className='text-backgroundWhite text-[18px] font-roboto font-bold px-8 pt-4'>
                    This platform made investing easy! My portfolio has grown steadily, and their support team is fantastic. Highly recommend!
                </div>
                <div className='pl-8 pt-8 flex'>
                    <div className='h-16 w-16 rounded-full'>
                        <img src="/Images/Dummy_Customer.jpg" alt="" 
                        className="object-cover w-full h-full rounded-full" />
                    </div>
                    <div className = 'px-4 pt-2'>
                        <div className='text-backgroundWhite text-[18px] font-roboto font-bold'>
                            John Doe
                        </div> 
                        <div className='text-subheadingLightGray text-[14px] font-roboto font-bold'>
                            Financial Analyst
                        </div> 
                        
                    </div>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-[200px] bg-cardDark rounded-lg'>
                <div className='text-backgroundWhite text-[18px] font-roboto font-bold px-8 pt-4'>
                    This platform made investing easy! My portfolio has grown steadily, and their support team is fantastic. Highly recommend!
                </div>
                <div className='pl-8 pt-8 flex'>
                    <div className='h-16 w-16 rounded-full'>
                        <img src="/Images/Dummy_Customer.jpg" alt="" 
                        className="object-cover w-full h-full rounded-full" />
                    </div>
                    <div className = 'px-4 pt-2'>
                        <div className='text-backgroundWhite text-[18px] font-roboto font-bold'>
                            John Doe
                        </div> 
                        <div className='text-subheadingLightGray text-[14px] font-roboto font-bold'>
                            Financial Analyst
                        </div> 
                        
                    </div>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-[200px] bg-cardDark rounded-lg'>
                <div className='text-backgroundWhite text-[18px] font-roboto font-bold px-8 pt-4'>
                    This platform made investing easy! My portfolio has grown steadily, and their support team is fantastic. Highly recommend!
                </div>
                <div className='pl-8 pt-8 flex'>
                    <div className='h-16 w-16 rounded-full'>
                        <img src="/Images/Dummy_Customer.jpg" alt="" 
                        className="object-cover w-full h-full rounded-full" />
                    </div>
                    <div className = 'px-4 pt-2'>
                        <div className='text-backgroundWhite text-[18px] font-roboto font-bold'>
                            John Doe
                        </div> 
                        <div className='text-subheadingLightGray text-[14px] font-roboto font-bold'>
                            Financial Analyst
                        </div> 
                        
                    </div>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-[200px] bg-cardDark rounded-lg'>
                <div className='text-backgroundWhite text-[18px] font-roboto font-bold px-8 pt-4'>
                    This platform made investing easy! My portfolio has grown steadily, and their support team is fantastic. Highly recommend!
                </div>
                <div className='pl-8 pt-8 flex'>
                    <div className='h-16 w-16 rounded-full'>
                        <img src="/Images/Dummy_Customer.jpg" alt="" 
                        className="object-cover w-full h-full rounded-full" />
                    </div>
                    <div className = 'px-4 pt-2'>
                        <div className='text-backgroundWhite text-[18px] font-roboto font-bold'>
                            John Doe
                        </div> 
                        <div className='text-subheadingLightGray text-[14px] font-roboto font-bold'>
                            Financial Analyst
                        </div> 
                        
                    </div>
                </div>
            </div>
          </SwiperSlide>
          
          
          
        </Swiper>
      );
}

export default ActiveSlider