/// <reference types="vite-plugin-svgr/client" />
import './App.css'
import Logo from "./svg/logo.svg?react";
import Call from "./svg/call.svg?react";
import Star from "./svg/star.svg?react";
import Gym from "./svg/gym.svg?react";
import Wifi from "./svg/wifi.svg?react";
import Cafe from "./svg/cafe.svg?react";
import Money from "./svg/money.svg?react";
import Portrait from "./svg/portrait.svg?react";
import Time from "./svg/time.svg?react";
import Sports from "./svg/sports.svg?react";

import backgroundDesign from "./assets/hero.png";
import coworking from "./assets/Coworking.png";

const arr1 = [
  {text: "Community Events", icon: <Star/>}, 
  {text: "Gym Facilities", icon: <Gym/> }, 
  {text: "High-Speed Wifi", icon: <Wifi/> },
  {text: "Sports Area", icon: <Cafe/> }
]
const arr2 = [
  {text: "Affordable", icon: <Money/>}, 
  {text: "Comfort Lounges", icon: <Portrait/> }, 
  {text: "Quick Booking", icon: <Time/> },
  {text: "Cafe & Tea Bar", icon: <Sports/> }
]

function App() {

  return (
    <div className='mx-2 sm:mx-[10%] lg:mx-10 p-0 sm:p-2'> 
      <nav className='flex justify-between p-2'>
        <Logo />
        <div className='border-yellow-400	border-2 rounded-md p-2 drop-shadow-md'>
          <Call />
        </div>
      </nav>


      <div className='relative flex lg:flex-row lg:justify-between flex-col-reverse justify-center h-[20%]'>
        <h1 className='lg:text-left 2xl:text-5xl xl:text-4xl lg:text-3xl sm:text-sm text-center font-bold w-full lg:block inline-block mb-12 text-wrap'>
          <p>Host your meeting with world-class amenities. </p>
          <p>Starting at <span className='text-yellow-400	'>₹199/-!</span></p>
        </h1>

        <div className='w-full flex justify-end'>
          <img src={coworking} alt='coworking' className='object-cover' />
        </div>
        <div className='absolute top-0 left-0 hidden lg:block'>
          <img src={backgroundDesign} alt='background-image' />
        </div>
      </div>

      <div>
        <h3 className='text-left text-2xl font-bold'>Why Choose Us?</h3>
        <div className='flex flex-start py-6 w-full justify-between items-center flex-wrap lg:flex-nowrap gap-6'>
          {arr1.map(val => (
            <div className='flex flex-start flex-col lg:flex-row justify-start w-[45%] lg:w-full items-center p-2 lg:px-1 sm:drop-shadow-none sm:shadow-none drop-shadow-md shadow-md border sm:border-none m-1 lg:gap-2'>
              {val.icon}
              <p className='text-[16px] sm:text-base py-1'>{val.text}</p>
            </div>
          ))}
        </div>
        <div className='flex flex-start py-6 w-full justify-between items-center flex-wrap lg:flex-nowrap gap-6'>
          {arr2.map(val => (
            <div className='flex flex-start flex-col lg:flex-row justify-start w-[45%] lg:w-full items-center p-2 lg:px-1 sm:drop-shadow-none sm:shadow-none drop-shadow-md shadow-md border sm:border-none m-1 lg:gap-2'>
              {val.icon}
              <p className='text-[16px] sm:text-base py-1 sm:px-2'>{val.text}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default App;
