import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import htmlImg from '../img/html.png';
import cssImg from '../img/css.png';
import jsImg from '../img/js.png';
import sassImg from '../img/sass.png';
import tsImg from '../img/ts.png';
import reactImg from '../img/react.png';
import tailwindImg from '../img/tailwind.png';
import reduxImg from '../img/redux.png';
import npmImg from '../img/npm.png';
import gitImg from '../img/git.png';
import swiperImg from '../img/swiper.png';
import aosImg from '../img/aos.png';





function Stack(): JSX.Element {

   const {t, i18n} = useTranslation();

   return (
      <section className='pt-20 md:pt-28'>
         <motion.h2
            initial={{
               opacity: 0,
               x: -100,
            }}
            whileInView={{
               opacity: 1,
               x: 0,
            }}
            viewport={{once: true}}
         className='text-4xl text-center mb-10'>{t('stack-title')}</motion.h2>
         <div className='grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 justify-center'>
            <motion.ul
            initial={{
               opacity: 0,
               y: 100,
            }}
            whileInView={{
               opacity: 1,
               y: 0,
            }}
            transition={{
               delay: 0.3,
               duration: .5,
            }}
            viewport={{
               once: true
            }}
            >
               <li className='flex items-center space-x-2 my-5 border-b border-slate-700 pb-3 h-[50px]'>
                  <img className='max-w-[50px]' src={htmlImg} alt="icon" />
                  <span className='font-semibold'>HTML</span>
               </li>
               <li className='flex items-center space-x-2 my-5 border-b border-slate-700 pb-3 h-[50px]'>
                  <img className='max-w-[50px]' src={cssImg} alt="icon" />
                  <span className='font-semibold'>CSS</span>
               </li>
               <li className='flex items-center space-x-2 my-5 border-b border-slate-700 pb-3 h-[50px]'>
                  <img className='max-w-[50px]' src={jsImg} alt="icon" />
                  <span className='font-semibold'>Java-script</span>
               </li>
            </motion.ul>
            <motion.ul
            initial={{
               opacity: 0,
               y: 100,
            }}
            whileInView={{
               opacity: 1,
               y: 0,
            }}
            transition={{
               delay: 0.5,
               duration: .5,
            }}
            viewport={{
               once: true
            }}
            >
               <li className='flex items-center space-x-2 my-5 border-b border-slate-700 pb-3 h-[50px]'>
                  <img className='max-w-[50px]' src={sassImg} alt="icon" />
                  <span className='font-semibold'>SASS</span>
               </li>
               <li className='flex items-center space-x-2 my-5 border-b border-slate-700 pb-3 h-[50px]'>
                  <img className='max-w-[50px]' src={tsImg} alt="icon" />
                  <span className='font-semibold'>Type-script</span>
               </li>
            </motion.ul>
            <motion.ul
            initial={{
               opacity: 0,
               y: 100,
            }}
            whileInView={{
               opacity: 1,
               y: 0,
            }}
            transition={{
               delay: 0.7,
               duration: .5,
            }}
            viewport={{
               once: true
            }}
            >
               <li className='flex items-center space-x-2 my-5 border-b border-slate-700 pb-3 h-[50px]'>
                  <img className='max-w-[50px]' src={tailwindImg} alt="icon" />
                  <span className='font-semibold'>TailwindCSS</span>
               </li>
               <li className='flex items-center space-x-2 my-5 border-b border-slate-700 pb-3 h-[50px]'>
                  <img className='max-w-[50px]' src={reactImg} alt="icon" />
                  <span className='font-semibold'>React <span className='block text-[10px]'>create-react-app</span></span>
               </li>
               <li className='flex items-center space-x-2 my-5 border-b border-slate-700 pb-3 h-[50px]'>
                  <img className='max-w-[50px]' src={reduxImg} alt="icon" />
                  <span className='font-semibold'>Redux <span className='block text-[10px]'>+ Redux-thunk</span></span>
               </li>
            </motion.ul>
            <motion.ul
            initial={{
               opacity: 0,
               y: 100,
            }}
            whileInView={{
               opacity: 1,
               y: 0,
            }}
            transition={{
               delay: 0.9,
               duration: .5,
            }}
            viewport={{
               once: true
            }}
            >
               <li className='flex items-center space-x-2 my-5 border-b border-slate-700 pb-3 h-[50px]'>
                  <img className='max-w-[50px]' src={npmImg} alt="icon" />
                  <span className='font-semibold text-[10px]'>Node Package Manager</span>
               </li>
               <li className='flex items-center space-x-2 my-5 border-b border-slate-700 pb-3 h-[50px]'>
                  <img className='max-w-[50px]' src={gitImg} alt="icon" />
                  <span className='font-semibold'>GIT</span>
               </li>
            </motion.ul>
            <motion.ul
            initial={{
               opacity: 0,
               y: 100,
            }}
            whileInView={{
               opacity: 1,
               y: 0,
            }}
            transition={{
               delay: 1.1,
               duration: .5,
            }}
            viewport={{
               once: true
            }}
            >
               <li className='flex items-center space-x-2 my-5 border-b border-slate-700 pb-3 h-[50px]'>
                  <img className='max-w-[40px]' src={swiperImg} alt="icon" />
                  <span className='font-semibold'>Swiper</span>
               </li>
               <li className='flex items-center space-x-2 my-5 border-b border-slate-700 pb-3 h-[50px]'>
                  <img className='max-w-[50px]' src={aosImg} alt="icon" />
                  <span className='font-semibold'>aosJS</span>
               </li>
            </motion.ul>
         </div>
      </section>
   );
}

export default Stack;