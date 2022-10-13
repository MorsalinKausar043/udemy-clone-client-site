import Image from 'next/image';
import React from 'react'

const Preloader = () => {
  return (
    <>
      <main className="w-screen h-screen bg-white flex justify-center items-center">
        <div>
          <Image
            className="inline-block w-10 h-10 md:w-20 md:h-20 animate-spin"
            src="https://i.ibb.co/Rvb6Q09/unnamed-1.png"
            alt="preloader_Image"
            width={100}
            height={100}
          />
        </div>
      </main>
    </>
  );
}

export default Preloader