import * as React from 'react';
import Image from 'next/image';
import styles from '@/styles/cert-pg.module.css'
import finGrowth from '../../Assets/finGrowth.webp'


const Certificate = ()=>{
    return(
        <div className="bg-white h-screen" >
            <h2 className={`flex justify-center pt-10 text-black text-6xl`}>Certificate Courses</h2>
            <CertCard courseName="Tally ERP 9"/>
            <CertCard courseName="Advanced Excel"/>
            <CertCard courseName="Photography"/>
            <h2 className={`flex justify-center pt-10 text-black text-6xl`}>Study of Languages</h2>
            <div>English</div>
            <div>Kannada</div>
            <div>Hindi</div>
            <div>Tamil</div>
            <div>Telugu</div>              
        </div>
    );
}

const CertCard = (props)=>{
    return(
        <div class="group h-96 w-80 [perspective:1000px]">
    <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <div class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200">
        <div class="flex min-h-full flex-col items-center justify-center">
          <h1 class="text-3xl font-bold">{props.courseName}</h1>
          <p class="text-lg">Photographer & Art</p>
          <p class="text-base">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <button class="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">Read More</button>
        </div>
      </div>
      <div class="absolute inset-0  [transform:rotateY(180deg)] [backface-visibility:hidden]">
        
        <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40 [backface-visibility:hidden]" src="https://images.unsplash.com/photo-1562583489-bf23ec64651d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')" alt="" />  
      </div>
    </div>
  </div>
    );
}

export default Certificate;