import Search from "./Search_bar"


const Header = () => {
  return (
    <div className='header '>
      <div className="header-sec">
      
        logo
        </div>
      <div className="header-search">
      
        <Search/>
      </div>
    
      {/* <div>
        img
      </div>
      <div>
        home about etc
      </div> */}
    </div>
  )
}

export default Header
