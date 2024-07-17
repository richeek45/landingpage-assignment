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
import FooterLarge from "./svg/footer.svg?react";
import FooterSmall from "./svg/footer-mobile.svg?react";
import GooglePlay from "./svg/play.svg?react";
import AppleStore from "./svg/apple.svg?react";
import ArrowSmall from "./svg/arrow-small.svg?react";

import backgroundDesign from "./assets/hero.png";
import coworking from "./assets/Coworking.png";
import SpaceCard from './components/SpaceCard';
import space1 from "./assets/space_1.png";
import space2 from "./assets/space_2.png";
import space3 from "./assets/space_3.png";
import space4 from "./assets/space_4.png";
import space5 from "./assets/space_5.png";
import space6 from "./assets/space_6.png";

const arr1 = [
  {text: "Community Events", icon: <Star/>, id: 1 }, 
  {text: "Gym Facilities", icon: <Gym/>, id: 2  }, 
  {text: "High-Speed Wifi", icon: <Wifi/>, id: 3  },
  {text: "Sports Area", icon: <Cafe/>, id: 4 }
]
const arr2 = [
  {text: "Affordable", icon: <Money/>, id: 1 }, 
  {text: "Comfort Lounges", icon: <Portrait/>, id: 2 }, 
  {text: "Quick Booking", icon: <Time/>, id: 3 },
  {text: "Cafe & Tea Bar", icon: <Sports/>, id: 4 }
]

const arr3 = [
  { text: "HSR Sector 6, Service Road", image: space1, id: 1 },
  { text: "HSR Sector 6, Service Road", image: space2, id: 2 },
  { text: "HSR Sector -6, 5th main Road", image: space3, id: 3 },
  { text: "HSR Sector -2, 27th main Road", image: space4, id: 4 },
  { text: "HSR Sector 6, Service Road", image: space5, id: 5 },
  { text: "HSR Sector -6, 5th main Road", image: space6, id: 6 },
]

const Heading = ({text} : {text: string}) => {
  return (<h2 className='text-left lg:text-2xl text-lg font-bold flex justify-between items-center'>{text} 
  <ArrowSmall className='lg:hidden block mx-2' />
  </h2>)
}

function App() {

  return (
    <div className='mx-2 sm:mx-[10%] lg:mx-5 p-0 sm:p-2 flex flex-col gap-5'> 
      <nav className='flex justify-between p-2'>
        <Logo />
        <div className='border-yellow-400	border-2 rounded-md p-2 drop-shadow-md'>
          <Call />
        </div>
      </nav>


      <div className='relative flex lg:flex-row lg:justify-between flex-col-reverse justify-center items-center h-[20%]'>
        <h1 className='lg:text-left 2xl:text-5xl xl:text-4xl lg:text-3xl sm:text-sm text-center font-bold w-full lg:block inline-block mb-12 text-wrap'>
          <p>Host your meeting with world-class amenities. </p>
          <p>Starting at <span className='text-yellow-400	'>₹199/-!</span></p>
        </h1>

        <div className='w-full flex lg:justify-end justify-center'>
          <img src={coworking} alt='coworking' className='object-cover' />
        </div>
        <div className='absolute top-0 left-0 hidden lg:block'>
          <img src={backgroundDesign} alt='background-image' />
        </div>
      </div>

      <div>
        <Heading text='Why Choose Us?' />
        <div className='flex flex-start sm:py-6 w-full justify-between items-center flex-wrap lg:flex-nowrap gap-1 sm:gap-6'>
          {arr1.map(val => (
            <div key={val.id} className='flex flex-start flex-col lg:flex-row justify-start w-[45%] h-16 lg:w-full items-center py-2 lg:px-1 sm:drop-shadow-none sm:shadow-none drop-shadow-md shadow-md border sm:border-none m-1 lg:gap-2'>
              {val.icon}
              <p className='text-[16px] sm:text-base py-1'>{val.text}</p>
            </div>
          ))}
        </div>
        <div className='flex flex-start sm:py-6 w-full justify-between items-center flex-wrap lg:flex-nowrap gap-1 sm:gap-6'>
          {arr2.map(val => (
            <div key={val.id} className='flex flex-start flex-col lg:flex-row justify-start w-[45%] h-16 lg:w-full items-center py-2 lg:px-1 sm:drop-shadow-none sm:shadow-none drop-shadow-md shadow-md border sm:border-none m-1 lg:gap-2'>
              {val.icon}
              <p className='text-[16px] sm:text-base py-1 sm:px-2'>{val.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Heading text='Our Space Overview' />
        <div className='flex mt-10 lg:gap-10 w-full flex-wrap justify-between'>
          {arr3.map(element => (
            <SpaceCard key={element.id} text={element.text} image={element.image} />
          ))}
        </div>
      </div>

      <div className='mb-16'>
        <Heading text='Download our app now' />
        <div className='py-5 drop-shadow-md border flex items-center gap-10 lg:hidden'>
          <FooterSmall className='mx-auto' />
        </div>
        <div className='py-5 drop-shadow-md border lg:flex items-center gap-10 hidden justify-around w-full'>
          <FooterLarge />
          <div className='flex flex-col w-1/2 gap-2'>
            <p className='w-full'>
              Boost your productivity with the BHIVE Workspace app. Elevate your workspace, collaborate efficiently, 
              and unlock exclusive perks.
            </p>
            <div className='flex gap-4'>
              <GooglePlay />
              <AppleStore />
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white text-[16px] w-full fixed bottom-0 left-0 flex justify-center p-2">
        © Copyright 2024. Bhive Private Limited
      </footer>
    </div>
  )
}

export default App;
