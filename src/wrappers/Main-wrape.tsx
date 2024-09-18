import React,{ReactNode} from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';




interface MainWrapeProps{
    children:ReactNode
}

const MainWrape: React.FC<MainWrapeProps> = ({ children }) => {
  return (
    <div>
      <Navbar/>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}

export default MainWrape;
