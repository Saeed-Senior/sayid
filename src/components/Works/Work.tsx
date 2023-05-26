import { useState } from 'react';

interface WorkProps {
   image: string,
   name: string,
   link: string
}

function Work({image, name, link}: WorkProps): JSX.Element {
   const [work, setWork] = useState(false);

   return (
      <>
      <a href={link} className='relative block w-full h-[200px] sm:h-[250] md:h-[300px] mb-2 sm:mb-0'>
         <img className='absolute top-0 left-0 w-full h-full object-cover' src={image} alt="project"/>
         <div onMouseMove={() => setWork(true)} onMouseOut={() => setWork(false)} className='work'>
            <span className={work ? 'scale-1 transition duration-400 font-semibold text-1xl' : 'scale-0'}>{name}</span>
         </div>
      </a>
      <div className='mb-3 text-center sm:hidden'>{name}</div>
      </>
   );
}

export default Work;