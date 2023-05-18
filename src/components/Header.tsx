import { changeLanguage } from 'i18next';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../img/logoss.png';
import vector from '../img/vectorss.png';
import gh from '../img/github.png';
import { Link } from "react-scroll";
import { motion } from 'framer-motion';

function Header(): JSX.Element {
   const [langs, setLangs] = useState('RU');
   const [choise, setChoise] = useState(false);
   const [burger, setBurger] = useState(false);

   const {t, i18n} = useTranslation();

   function handleClick(lang: string) {
      changeLanguage(lang);
      setLangs(lang.toUpperCase());
      setChoise(false);
   }

   return (
      <header className='bg-[#030413]/70 fixed z-50 top-0 left-0 w-full'>
         <div className='relative max-w-[1200px] my-0 mx-auto p-3 flex justify-between items-center'>
         <div>
         <Link to='section1' smooth={true} duration={600}><img className='cursor-pointer relative z-10 max-w-[85px]' src={logo} alt="Logo" /></Link>
         </div>
         <div className={burger ? 'flex fixed top-0' : 'hidden md:block flex'}>
            <motion.ul
            initial={{
               opacity: 0,
               y: -100
            }}
            animate={{
               opacity: 1,
               y: 0
            }}
            transition={{
               delay: 0.2,
               duration: 0.5,
            }}
            className={burger ? 'h-screen bg-[#030413] max-w-[1200px] my-0 mx-auto absolute top-0 left-0 pt-[100px] pr-20 space-y-10 text-2xl' : 'flex items-center space-x-7'}>
                  <li className='menu-li'>
                     <Link onClick={() => setBurger(false)} to='section1' smooth={true} duration={600}>{t('greetings')}</Link>
                  </li>
                  <li className='menu-li'>
                     <Link onClick={() => setBurger(false)} to='section2' smooth={true} duration={600}>{t('about')}</Link>
                  </li>
                  <li className='menu-li'>
                     <Link onClick={() => setBurger(false)} to='section3' smooth={true} duration={600}>{t('works')}</Link>
                  </li>
                  <li className='menu-li'>
                     <Link onClick={() => setBurger(false)} to='section4' smooth={true} duration={600}>{t('contact')}</Link>
                  </li>
               <a href='https://github.com/Saeed-Senior' className={burger ? 'block sm:hidden absolute left-5 flex space-x-2 items-center cursor-pointer' : 'hidden'}>
                  <img className='w-[40px] h-[40px]' src={gh} alt="gh" />
                  <span className='text-[10px]'>github</span>
                  </a>
            </motion.ul>
         </div>
         <div className='flex items-center space-x-7'>
         <a href='https://github.com/Saeed-Senior' className='cursor-pointer hidden sm:block'><img className='w-[40px] h-[40px]' src={gh} alt="gh" /></a>
            <div className='flex space-x-3 items-center'>
            <div className='relative' onMouseMove={() => setChoise(true)} onMouseOut={() => setChoise(false)}>
               <div className='relative flex items-center space-x-2'><span>{langs}</span> <img src={vector} alt="vector" /></div>
               <ul className={choise ? 'px-2 border bg-slate-700 inline-block absolute right-[0px] opacity-1 transition duration-300' : 'px-2 border bg-slate-700 inline-block absolute right-[-1000px] opacity-0 transition duration-300'}>
                  <li className='choise' onClick={() => handleClick('ru')}>ru</li>
                  <li className='choise' onClick={() => handleClick('en')}>en</li>
               </ul>
            </div>
               <div onClick={() => setBurger(!burger)} className='md:hidden relative h-[20px] w-[27px] flex flex-col cursor-pointer'>
                  <span className={burger ? 'burger-line top-[9px] origin-center rotate-45' : 'burger-line top-0'}></span>
                  <span className={burger ? 'burger-line scale-0 top-[9.2px]' : 'burger-line top-[9.2px]'}></span>
                  <span className={burger ? 'burger-line bottom-[9px] origin-center rotate-[-45deg]' : 'burger-line bottom-0'}></span>
               </div>
            </div>
         </div>
         </div>
      </header>
   );
}

export default Header;