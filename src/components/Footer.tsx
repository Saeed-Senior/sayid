import { useTranslation } from 'react-i18next';
import logo from '../img/logoss.png';
import wa from '../img/wa.png';
import tg from '../img/tg.png';
import { useState } from 'react';
import { Link } from 'react-scroll';


function Footer(): JSX.Element {

   const [mng1, setMng1] = useState(false);
   const [mng2, setMng2] = useState(false);
   const {t, i18n} = useTranslation();

   return (
      <header className='bg-[#04061C] absolute z-50 bottom-0 left-0 w-full'>
         <div className='relative max-w-[1200px] my-0 mx-auto p-3 flex justify-between items-center'>
         <div>
         <Link to='section1' smooth={true} duration={600}><img className='cursor-pointer relative z-10 max-w-[85px]' src={logo} alt="Logo" /></Link>
         </div>
         <div className='flex items-center space-x-3'>
            <a onMouseMove={() => setMng1(true)} onMouseOut={() => setMng1(false)} href='https://wa.me/+79389991327' className='block relative w-[40px] h-[40px] cursor-pointer'>
               <div className={mng1 ? 'absolute z-10 top-0 left-0 w-full h-full bg-slate-900/50 rounded-lg transition duration-100 scale-1' : 'absolute z-10 top-0 left-0 w-full h-full bg-slate-900/50 rounded-lg transition duration-100 scale-0'}></div>
               <img className='absolute top-0 left-0 w-full h-full' src={wa} alt="wa" />
            </a>
            <a onMouseMove={() => setMng2(true)} onMouseOut={() => setMng2(false)} href='https://t.me/SayidSenior' className='block relative w-[40px] h-[40px] cursor-pointer'>
            <div className={mng2 ? 'absolute z-10 top-0 left-0 w-full h-full bg-slate-900/50 rounded-lg transition duration-100 scale-1' : 'absolute z-10 top-0 left-0 w-full h-full bg-slate-900/50 rounded-lg transition duration-100 scale-0'}></div>
               <img className='absolute top-0 left-0 w-full h-full' src={tg} alt="tg" />
            </a>
         </div>
         </div>
      </header>
   );
}

export default Footer;