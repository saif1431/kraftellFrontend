import React from 'react'
import { SiComma } from "react-icons/si";


function KraftellStartUp() {
  return (
  <div className='bg-primary  py-10'>
         <div className='text-center leading-tight lg:px-14 px-6 py-14'>
          <div className='flex justify-center items-center mb-4'>  
            <SiComma className='rotate-180 text-4xl text-black'/>
            <SiComma className='rotate-180 text-4xl text-black'/>
          </div>
              <p className='lg:text-md max-w-lg mx-auto '>As a startup, Kraftell Pro helped us connect with a trusted manufacturer in just 3 days—and their team even helped us finalize our prototype. Worth every cent.</p>
              <p className='mt-4 max-w-4xl mx-auto leading-relaxed text-primary'>
                <span className='text-black font-bold mx-2'>Antje Krause</span>
                Co-Founder, AYOKA Keramik, Berlins
              </p>
        </div>
      </div>
  )
}

export default KraftellStartUp
