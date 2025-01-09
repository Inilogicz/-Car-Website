import React from 'react';
import carImage from '../../assets/car.png'; 
import buildingImage from '../../assets/building.jpg';
import{FaArrowRight} from 'react-icons/fa'
import Navbar from '../Navbar/Navbar';


const bgImage = {
  backgroundImage: `url(${buildingImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center", 
   
};

const Hero = () => {
  return (
    <main style={bgImage}>
      <div className='bg-gradient-to-r from-primary to bg-primaryDark/90'>
        <div className="container text-white" >
            {/* {navbar components} */}
            <Navbar/>
            {/* {Hero section} */}
            
            <section className='grid grid-cols-1 md:grid-cols-2 place-items-center min-h-[800px] '>
                {/* {textarea} */}

            <div className='space-y-8'> 
                <h1 className="uppercase text-5xl lg:text-7xl  font-bold leading-tight ">
                   Honda <br /> {" "}
                      <span className=' text-transparent text-outline '>
                        Sports EV
                      </span>
                </h1>
                <button className='outline-btn flex justify-center  items-center gap-4 group'>
                    Explore
                    <FaArrowRight
                    className='group-hover:translate-x-2 transition'/>
                </button>

                <div className='bg-black/40 p-6 space-y-2 lg:max-w-[350px] !mt=[60px]'>
                  {/* {features section} */}
                  <h1 className="uppercase text-xs leading loose">
                    Vehicle features
                   
                  </h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore est voluptas harum delectus asperiores voluptate nemo quasi nulla sint porro! Sit architecto voluptates nulla numquam expedita nam, sequi excepturi ratione!</p>
                </div>
            </div> 
                {/* {image area} */}
                <div>
                    <img src={carImage} alt="" />
                </div>
            </section>
        </div>
      </div>
    </main>
  );
};

export default Hero;








