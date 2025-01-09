import React from 'react';
import logo from '../../assets/honda-logo.png';
import{GiHamburgerMenu} from 'react-icons/gi';
import{FaSearch} from 'react-icons/fa';

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
  id: 1,
  title: 'Cars',
  link: '#',
},
  {
  id: 1,
  title: 'Contact',
  link: '#',
},
];
const Navbar = () => {
  return (
    <main className='py-10 text-white'>
      <div className="container">
        <div className='flex justify-between items-center'>
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
                <div>
                  <FaSearch/>
                </div>
              </div>

        </div>
      </div>
    </main>
  );
}

export default Navbar;
