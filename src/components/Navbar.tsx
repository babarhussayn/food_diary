import React from 'react'


interface navbar{
    name:string,
    link:string
}
const navbar=[
    {
    
    link:'Community'},
    {
    
    link:'Books'
    },
    {

        link:'Recipe Index'
    },
    {
    
        link:'Popular'
    }
]




const Navbar = () => {
  return (
    <div className='main'>
      <div className='main-item'>
      {navbar.map((items)=>
      <div>
       
        <a className='main-link' href={items.link}>{items.link}</a>
      </div>
    )}
</div>
<div className='main-sec'>
    <div className='main-register'>
        <img src="icons/icon-2.png" alt="arro" />
        <h4 className='main-font-1'>Register</h4>
         </div>
    <div className='main-register'>
        <img src='icons/icon-1.png' alt='person'/>
        <h4 className='main-font-1'>Login</h4></div>
    </div>

    </div>
  )
}

export default Navbar
