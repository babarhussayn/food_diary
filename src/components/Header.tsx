import Search from "./Search_bar";
import { useNavigate } from "react-router-dom";
const headNav = [
  {
    link: "Home",
  },
  {
    link: "Explore",
  },
  {
    link: "Help",
  },
  {
    link: "Profile",
  },
];

const Header = () => {

  const navigate =useNavigate()

  const handleHome=()=>{
    navigate('/')
  }
  return (
    <>
      <div className="header ">
        <div className="header-sec" onClick={handleHome}>
          <img src="/images/CP-Logo-1.png" alt="logo" />
         
        </div>
        <div className="header-search">
          <Search />
        </div>
      </div>
      <div className="header-pic">
        <img src="/images/cropped-pistaciafood_11-1.jpg" alt="header-pic" />
        <div className="header-pic-title">
            <h3>Food Diary</h3>
          </div>
      </div>

      <hr className="header-hr" />

      <div className="header-nav">
        <div className="header-item">
          {headNav.map((item) => (
            <a className="header-link" href={item.link}>
              {item.link}
            </a>
          ))}
        </div>
      </div>
      <hr className="header-hr" />
    </>
  );
};

export default Header;
