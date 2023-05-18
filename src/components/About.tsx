import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/free-mode";
import { motion } from 'framer-motion';

import about1 from '../img/about1.jpg';
import about2 from '../img/about2.jpg';
import about3 from '../img/about3.jpg';
import about4 from '../img/about4.jpg';
import about5 from '../img/about5.webp';
import vector from '../img/vector.png';

const MAnimate = {
   hidden1: {
      opacity: 0,
      y: 50
   },
   visible1: {
      opacity: 1,
      y: 0,
      transition: {
         duration: .3,
      }
   },
}


function About(): JSX.Element {

   const {t, i18n} = useTranslation();


   return (
      <section id='section2' className='pt-20 md:pt-28'>
         <motion.h2
         initial={{
            opacity: 0,
            x: -100,
         }}
         animate={{
            opacity: 1,
            x: 0,
         }}
         transition={{
            delay: 1,
            duration: 0.5,
         }}
         className='text-3xl md:text-4xl pb-7 md:pb-12'>{t('about')}</motion.h2>
         <motion.div
         initial={'hidden1'}
         whileInView={'visible1'}
         viewport={{amount: 0.7, once: true}}
         variants={MAnimate}
         className='flex items-center'>
         <button className='review-swiper-button-prev m-3 origin-center rotate-180 w-[70px]'><img className='w-full' src={vector} alt="prev" /></button>
         <div className='min-w-0'>
      <Swiper
      navigation={{
         nextEl: '.review-swiper-button-next',
         prevEl: '.review-swiper-button-prev',
      }}
      spaceBetween={50}
      slidesPerView={1}
      speed={1000}
      autoplay={{
         delay: 7000,
         stopOnLastSlide: false,
         disableOnInteraction: false,
      }}
      >
      <SwiperSlide>
         <div className='flex flex-col-reverse sm:flex-row items-center justify-between sm:space-x-3'>
         <div className='sm:w-[47%]'>
            <p>{t('slide1')}</p>
         </div>
         <div className='w-full sm:w-[47%] h-[200px] sm:h-[300px] mb-5 sm:mb-0'>
            <img className='w-full h-full object-cover' src={about1} alt="img" />
         </div>
         </div>
      </SwiperSlide>
      <SwiperSlide>
         <div className='flex flex-col-reverse sm:flex-row items-center justify-between sm:space-x-3'>
         <div className='sm:w-[47%]'>
            <p>{t('slide2')}</p>
         </div>
         <div className='w-full sm:w-[47%] h-[200px] sm:h-[300px] mb-5 sm:mb-0'>
            <img className='w-full h-full object-cover' src={about2} alt="img" />
         </div>
         </div>
      </SwiperSlide>
      <SwiperSlide>
         <div className='flex flex-col-reverse sm:flex-row items-center justify-between sm:space-x-3'>
         <div className='sm:w-[47%]'>
            <p>{t('slide3')}</p>
         </div>
         <div className='w-full sm:w-[47%] h-[200px] sm:h-[300px] mb-5 sm:mb-0'>
            <img className='w-full h-full object-cover' src={about3} alt="img" />
         </div>
         </div>
      </SwiperSlide>
      <SwiperSlide>
         <div className='flex flex-col-reverse sm:flex-row items-center justify-between sm:space-x-3'>
         <div className='sm:w-[47%]'>
            <p>{t('slide4')}</p>
         </div>
         <div className='w-full sm:w-[47%] h-[200px] sm:h-[300px] mb-5 sm:mb-0'>
            <img className='w-full h-full object-cover' src={about4} alt="img" />
         </div>
         </div>
      </SwiperSlide>
      <SwiperSlide>
         <div className='flex flex-col-reverse sm:flex-row items-center justify-between sm:space-x-3'>
         <div className='sm:w-[47%]'>
            <p>{t('slide5')}</p>
         </div>
         <div className='w-full sm:w-[47%] h-[200px] sm:h-[300px] mb-5 sm:mb-0'>
            <img className='w-full h-full object-cover' src={about5} alt="img" />
         </div>
         </div>
      </SwiperSlide>
      </Swiper>
         </div>
         <button className='review-swiper-button-next m-3 w-[70px]'><img className='w-full' src={vector} alt="next" /></button>
         </motion.div>
      </section>
   );
}

export default About;