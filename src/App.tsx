import './App.css'
import logo from "./svg/logo.svg";
import call from "./svg/call.svg";

function App() {

  return (
    <div> 
      <nav className='flex justify-between p-2'>
        <img src={logo} alt="logo" />
        <div className='border-yellow-400	border-2 rounded-md p-2 drop-shadow-md'>
          <img src={call} alt="call" />
        </div>
      </nav>



    </div>
  )
}

export default App
