import './App.css'
import logo from "./svg/logo.svg";
import call from "./svg/call.svg";
import backgroundDesign from "./assets/hero.png";
import coworking from "./assets/Coworking.png";

function App() {

  return (
    <div> 
      <nav className='flex justify-between p-2'>
        <img src={logo} alt="logo" />
        <div className='border-yellow-400	border-2 rounded-md p-2 drop-shadow-md'>
          <img src={call} alt="call" />
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

    </div>
  )
}

export default App;
