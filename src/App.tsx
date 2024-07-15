/// <reference types="vite-plugin-svgr/client" />
import './App.css'
import Logo from "./svg/logo.svg?react";
import Call from "./svg/call.svg?react";
import Star from "./svg/star.svg?react";
import backgroundDesign from "./assets/hero.png";
import coworking from "./assets/Coworking.png";

function App() {

  return (
    <div> 
      <nav className='flex justify-between p-2'>
        <Logo />
        <div className='border-yellow-400	border-2 rounded-md p-2 drop-shadow-md'>
          <Call />
        </div>
      </nav>


      <div className='relative flex lg:justify-between justify-center'>
        <p className=' text-left text-5xl font-bold w-[50%] hidden lg:block my-auto mx-auto'>
          Host your meeting with world-class amenities. <p>Starting at <span className='text-yellow-400	'>₹199/-!</span></p>
        </p>
        <img src={coworking} alt='coworking' />
        <div className='absolute top-0 left-0 hidden lg:block'>
          <img src={backgroundDesign} alt='background-image' />
        </div>
      </div>

      <div>
        <h3>Why Choose Us?</h3>
        <div className='flex '>
          <Star/> Community Events
        </div>
      </div>

    </div>
  )
}

export default App;
