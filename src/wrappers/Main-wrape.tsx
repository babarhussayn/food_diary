import React,{ReactNode} from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';




interface MainWrapeProps{
    children:ReactNode
}

const MainWrape: React.FC<MainWrapeProps> = ({ children }) => {
  return (
    <div>
      <Navbar/>{children}<Footer/>
    </div>
  )
}

export default MainWrape;
