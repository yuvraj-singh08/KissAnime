import React from 'react'

const Front = () => {
  return (
        <div>
      <div className='  h-[40vh]  lg:h-[50vh]'>
        <marquee
          behavior="scroll"
          width="100%"
          direction="right"
          scrollamount="30"
          loop="3"
          className="h-[30vh] pt-5 "

        >
          <div className="text-center text-white text-5xl flex justify-center items-center ">
            <img
              className="h-[20vh]"
              src="./images/naruto-run.gif"
            />
            <hr className="w-20 mx-4" />
            <h1 className=' text-7xl   text-center pt-2 sm:text-2xl'> A N I M E . xxx</h1>
            <hr className="w-20 mx-4" />
            <img
              className="h-[20vh]"
              src="./images/naruto-run.gif"
            />
          </div>

        </marquee>
           
        <div className='text-white  items-center'>
           <div>
            <p className='font-[1000] text-3xl text-center tracking-[1px] pt-3 pb-2 px-1 sm:text-4xl sm:pt-[10px] lg:text-7xl lg:mb-5 '>A PERFECT PLACE FOR <br /> ANIME ENTHUSIAST</p>
            <p className='text-center text-xs sm:px-10 lg:mb-4'>Millions of designers and agencies around the world showcase their portfolio work on Dribbble - the home to the world’s best design and creative professionals.
            </p>
            </div>
            <div className='text-center pl-3 mt-4 '>
                <input className='  px-24 rounded-2xl pl-[2px] md:w-72 lg:w-96 lg:py-1 lg:pl-3 text-black  mx-[-26px]' type="search" placeholder='Search your anime here'/>
                <a href="#"><i className="fa-solid fa-magnifying-glass text-black "></i></a>

            
            </div>
        </div>
    </div>
                
             <div className='text-center space-x-2 text-xs pt-32'>
                    <ul className='justify-center flex text-white text-center space-x-5'>
                       <li className=" hover:text-white hover:outline hover:px-4 rounded-md hover:cursor-pointer hover:font-semibold  hover:bg-black">JUJUTSU KAISEN</li>
                       <li className=" hover:text-white hover:outline hover:px-4 rounded-md hover:cursor-pointer hover:font-semibold  hover:bg-black">NARUTO</li>
                       <li className=" hover:text-white hover:outline hover:px-4 rounded-md hover:cursor-pointer hover:font-semibold  hover:bg-black">DEMON SLAYER</li>
                       
                    </ul>
              </div>
                
    </div>
  )
}

export default Front