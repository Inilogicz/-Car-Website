import React from 'react';
import carImage from '../../assets/car.png'; 
import buildingImage from '../../assets/building.jpg';
import{FaArrowRight} from 'react-icons/fa'
import Navbar from '../Navbar/Navbar';
import { motion } from "framer-motion";


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
                <motion.h1
                initial ={{opacity:0, y:-100}}
                whileInView={{opacity:1, y:0}}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  duration:0.4,
                } }
                className="uppercase relative  text-5xl lg:text-7xl font-bold leading-tight ">
                   Honda <br /> {" "}
                      <span className=' text-transparent text-outline '>
                        Sports EV
                      </span>
                </motion.h1>
                < motion.button
                initial ={{opacity:0, y:-100}}
             whileInView={{opacity:1, y:0}}
        
                 whileHover={{ scale: 1.2 }}
                 whileTap={{ scale: 0.8 }}
                 transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay:1.2,
                  duration:0.4,
                } }
                className='outline-btn flex justify-center  items-center gap-4 group'>
                    Explore
                    <FaArrowRight
                    className='group-hover:translate-x-2 transition'/>
                </motion.button>

                <motion.div
                  initial ={{opacity:0, y:-100}}
                  whileInView={{opacity:1, y:0}}
                
                transition={{
                  // type: "spring",
                  // stiffness: 100,
                  // damping: 10,
                  delay:1.2,
                  duration:0.4,
                } }       
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              
                className='bg-black/40 p-6 space-y-2 lg:max-w-[350px] !mt=[60px]'>
                  {/* {features section} */}
                  <h1 className="uppercase text-xs leading loose">
                    Vehicle features
                   
                  </h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore est voluptas harum delectus asperiores voluptate nemo quasi nulla sint porro! Sit architecto voluptates nulla numquam expedita nam, sequi excepturi ratione!</p>
                </motion.div>
            </div> 
                {/* {image area} */}
                <div className='relative'>
                    <motion.img 
                    initial ={{opacity:0, x:200}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{
                      duration: 1 ,
                    } }
                    src={carImage} alt="" className='w-full relative z-30' />

                    {/* {Glowing circle} */}
                      
                        <motion.div
                        initial ={{opacity:0, x:200, scale:0}}
                        whileInView={{opacity: 1, x: 0, scale: 1}}
                        transition={{
                          type: "spring",
                          stiffness: 100,
                          damping: 10,
                          delay:0.8,
                          duration:0.8,
                        } }

                        className="border-[20px] border-cyan-200 rounded-full h-[180px] w-[180px]  md:h-[300px] md:w-[300px] absolute top-10 left-1/2 glowing-shadow">
                        
                        </motion.div>
                          <motion.div
                          initial ={{opacity:0, x:-100}}
                          whileInView={{opacity: 1, x: 0}}
                          transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                            delay:1.4,
                            duration:0.8,
                          } }
                          className="absolute bottom-40 right-2  z-[1]">
                              <h1 className='text-[200px] font-bold text-cyan-200/10 leading-none'>
                              {" "}
                              Sport
                              </h1>

                          </motion.div>
                       </div>

                
            </section>
        </div>
      </div>
    </main>
  );
};

export default Hero;








