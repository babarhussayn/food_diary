import Search from "./Search_bar"


const Header = () => {
  return (<>
    <div className='header '>
      <div className="header-sec">
      
        <img src="/images/CP-Logo-1.png" alt="logo" />
        </div>
      <div className="header-search">
      
        <Search/>
      </div>
  
    
    </div>
  <div className="header-pic">
      <img src="/images/cropped-pistaciafood_11-1.jpg" alt="header-pic" />
    </div>
</>  )
}

export default Header
