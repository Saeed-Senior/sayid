import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import face from '../img/face.png';
import { motion } from 'framer-motion';

type All = string | any;


function Main(): JSX.Element {

   const {t, i18n} = useTranslation();


   return (
      <section id="section1" className='flex flex-col items-center pt-[140px]'>
         <div>
            <motion.img
            initial={{
               opacity: 0,
               scale: 0
            }}
            animate={{
               opacity: 1,
               scale: 1,
            }}
            transition={{
               delay: 0.4,
               duration: 0.5,
            }}
            className='max-w-[180px]' src={face} alt="face" />
         </div>
         <div className='mt-8'>
         <motion.span
         initial={{
            opacity: 0,
            y: 100
         }}
         animate={{
            opacity: 1,
            y: 0
         }}
         transition={{
            delay: 0.6,
            duration: 0.5,
         }}
         className='block text-center text-3xl md:text-5xl mb-2'>{t('greeting1.1')} <span className='font-semibold text-[#04E1FF]'>{t('greeting1.2')}</span>,</motion.span>
         <motion.span
         initial={{
            opacity: 0,
            y: 100
         }}
         animate={{
            opacity: 1,
            y: 0
         }}
         transition={{
            delay: 0.8,
            duration: 0.5,
         }}
         className='block text-center text-1xl md:text-2xl'>{t('greeting1.3')}</motion.span>
         </div>
      </section>
   );
}

export default Main;