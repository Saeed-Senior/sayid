import React, { useState, useEffect } from "react";
import './img/logoss.png';
import Header from './components/Header';
import Main from 'components/Main';
import About from 'components/About';
import Stack from 'components/Stack';
import Works from 'components/Works/Works';
import Contacts from 'components/Contacts';
import Footer from 'components/Footer';




function App(): JSX.Element {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
  }, []);

  return (
    <div className="App relative min-h-screen bg-[#030413] text-white">
      {isLoading ? (
        <div className='flex h-screen justify-center items-center'>
          <div className='loader'></div>
        </div>
      ) : (
        <>
        <Header/>
      <main className='max-w-[1200px] my-0 mx-auto px-3'>
        <Main/>
        <About/>
        <Stack/>
        <Works/>
        <Contacts/>
        <Footer/>
      </main>
        </>
      )}
    </div>
  );
}

export default App;
