import { useTranslation } from 'react-i18next';
import paws from '../img/paw.png';
import { motion } from 'framer-motion';


function Contacts(): JSX.Element {

   const {t, i18n} = useTranslation();

   return (
      <section id='section4' className='pb-[70px] pt-20 md:pt-28 flex flex-col overflow-x-hidden'>
         <motion.h2
         initial={{
            opacity: 0,
            x: -100
         }}
         whileInView={{
            opacity: 1,
            x: 0,
            transition:{
               duration: .3
            }
         }}
         className='text-3xl md:text-4xl text-center'>{t('contact')}</motion.h2>
         <div className='flex mt-3 items-center relative h-[110px] sm:h-[120px] lg-[130px]'>
         <motion.img
         initial={{
            opacity: 0,
         }}
         whileInView={{
            opacity: 1,
            transition: {
               delay: 0.2,
               duration: 0.2
            }
         }}
         className='absolute top-[0px]  right-[27vw]  w-[2.5vw] origin-center  rotate-[95deg]' src={paws} alt="" />
         <motion.img
         initial={{
            opacity: 0,
         }}
         whileInView={{
            opacity: 1,
            transition: {
               delay: 0.4,
               duration: 0.2
            }
         }}
         className='absolute top-[30px] right-[23vw] w-[2.5vw] origin-center rotate-[100deg]' src={paws} alt="" />
         <motion.img
         initial={{
            opacity: 0,
         }}
         whileInView={{
            opacity: 1,
            transition: {
               delay: 0.6,
               duration: 0.2
            }
         }}
         className='absolute top-[20px] right-[19.5vw] w-[2.5vw] origin-center rotate-[105deg]' src={paws} alt="" />
         <motion.img
         initial={{
            opacity: 0,
         }}
         whileInView={{
            opacity: 1,
            transition: {
               delay: 0.8,
               duration: 0.2
            }
         }}
         className='absolute top-[50px] right-[17vw] w-[2.5vw] origin-center rotate-[110deg]' src={paws} alt="" />
         <motion.img
         initial={{
            opacity: 0,
         }}
         whileInView={{
            opacity: 1,
            transition: {
               delay: 1,
               duration: 0.2
            }
         }}
         className='absolute top-[40px] right-[13.5vw] w-[2.5vw] origin-center rotate-[115deg]' src={paws} alt="" />
         <motion.img
         initial={{
            opacity: 0,
         }}
         whileInView={{
            opacity: 1,
            transition: {
               delay: 1.2,
               duration: 0.2
            }
         }}
         className='absolute top-[70px] right-[10vw]  w-[2.5vw] origin-center rotate-[120deg]' src={paws} alt="" />
         <motion.img
         initial={{
            opacity: 0,
         }}
         whileInView={{
            opacity: 1,
            transition: {
               delay: 1.4,
               duration: 0.2
            }
         }}
         className='absolute top-[55px] right-[6.5vw]  w-[2.5vw] origin-center rotate-[125deg]' src={paws} alt="" />
         <motion.img
         initial={{
            opacity: 0,
         }}
         whileInView={{
            opacity: 1,
            transition: {
               delay: 1.6,
               duration: 0.2
            }
         }}
         className='absolute top-[80px] right-[3vw]  w-[2.5vw] origin-center  rotate-[130deg]' src={paws} alt="" />
         <img className='absolute top-[] right-[0px]       w-[2.5vw] origin-center rotate-[deg] opacity-0' src={paws} alt="" />
         </div>
      </section>
   );
}

export default Contacts;