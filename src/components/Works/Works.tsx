import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Work from './Work';
import { motion } from 'framer-motion';

import pet1 from '../../img/pet1.png';
import pet2 from '../../img/pet2.png';
import pet3 from '../../img/pet3.png';
import commercial1 from '../../img/commercial1.png';
import commercial2 from '../../img/commercial2.png';





function Works(): JSX.Element {
   const [works, setWorks] = useState(false);
   const [work, setWork] = useState(false);
   const {t, i18n} = useTranslation();

   return (
      <section id='section3' className='pt-20 md:pt-28 overflow-x-hidden'>
         <motion.h2
         initial={{
            opacity: 0,
         }}
         whileInView={{
            opacity: 1
         }}
         transition={{
            duration: 1,
            delay: 0.3
         }}
         viewport={{once: true}}
         className='text-center text-3xl md:text-4xl'>{t('works-title')}</motion.h2>
         <motion.h3
         initial={{
            opacity: 0,
         }}
         whileInView={{
            opacity: 1
         }}
         transition={{
            duration: 1,
            delay: 0.5
         }}
         viewport={{once: true}}
         className='text-center text-1xl leading-[150%]'>{t('works-sub-title')}</motion.h3>
         <motion.div
         initial={{
            opacity: 0,
            x: 100
         }}
         whileInView={{
            opacity: 1,
            x: 0,
            transition:{
               delay: 0.7,
            } 
         }}
         viewport={{once: true}}
         className='flex justify-center items-center space-x-3'>
            <button
         onClick={() => setWorks(false)} className={works ? 'w-[150px] my-5 border rounded-lg py-2 transition duration-300 hover:bg-[#02DEB9] hover:border-transparent' : 'w-[150px] my-5 border rounded-lg py-2 bg-[#15c5a8] border-transparent'}>{t('pet')}</button>
            <button
            onClick={() => setWorks(true)} className={!works ? 'w-[150px] my-5 border rounded-lg py-2 transition duration-300 hover:bg-[#02DEB9] hover:border-transparent' : 'w-[150px] my-5 border rounded-lg py-2 bg-[#15c5a8] border-transparent'}
            >{t('commercial')}</button>
         </motion.div>
         <div>
            <motion.div
            initial={{
            opacity: 0,
            x: -100
         }}
         whileInView={{
            opacity: 1,
            x: 0,
            transition:{
               delay: 0.9,
            } 
         }}
         viewport={{once: true}}
            className={works ? 'hidden' : 'sm:grid grid-cols-2 items-center'}>
            <Work image={pet1} name='Weather App' link='https://saeed-senior.github.io/weather/'/>
            <Work image={pet2} name='Movies App' link='https://saeed-senior.github.io/movies-app/'/>
            <Work image={pet3} name='Five basics' link='https://saeed-senior.github.io/five-basics/'/>
            </motion.div>
            <motion.div
            initial={{
            opacity: 0,
            x: -100
         }}
         whileInView={{
            opacity: 1,
            x: 0,
            transition:{
               delay: 0.7,
            } 
         }}
         viewport={{once: true}}
            className={!works ? 'hidden' : 'sm:flex items-center block'}>
            <Work image={commercial1} name='Esla' link='https://esla.ae'/>
            <Work image={commercial2} name='Incom estate' link='https://incomestate.ae'/>
            </motion.div>        
         </div>
      </section>
   );
}

export default Works;

