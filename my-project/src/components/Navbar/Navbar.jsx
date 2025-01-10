import React from 'react';
import logo from '../../assets/honda-logo.png';
import{GiHamburgerMenu} from 'react-icons/gi';
import{FaSearch} from 'react-icons/fa';
import {motion} from 'framer-motion';
const NavMenu =[
  {
  id: 1,
  title: 'Home',
  link: '#',
},
  {
  id: 2,
  title: 'About',
  link: '#',
},
  {
  id: 3,
  title: 'Cars',
  link: '#',
},
  {
  id: 4,
  title: 'Contact',
  link: '#',
},
];
const Navbar = () => {
  return (
    <main 
     
    className='relative top-0 left-0 text-white w-full pt-10 z-20'>
      <motion.div 
       initial ={{opacity:0}}
       whileInView={{opacity:1, y:0}}
      className="container">
        <div 
         
        className='flex justify-between items-center'>
          {/* {logosection} */}
          
          <div >
            <img src={logo}  alt="" className="w-[80px] invert"  />
          </div>

          {/* {Nav menu selection} */}

           
            <div className='hidden md:block'>
                <ul className='flex gap-4'>
                    {NavMenu.map((menu) =>(
                      <li key={menu.id}>
                        <a href={menu.link} className='inline-block px-6 py-2 uppercase hover:bg-primary duration-200 rounded-md hover:shadow-[0px_0px_20px_8px_#d2e6ff]'
                        >                        
                        {menu.title}
                        </a>
                      </li>
                    ))}
                </ul>
              
              </div>

          {/* {Hamburger menu} */}

              <div className='flex items center gap-6'>
                <div className='rounded-icons'>
                  <GiHamburgerMenu/>
                </div>
                <div  className='rounded-icons'>
                  <FaSearch className='text-xl'/>
                </div>
              </div>

        </div>
      </motion.div>
    </main>
  );
}

export default Navbar;
// md:h-[300px] md:w[300px] 