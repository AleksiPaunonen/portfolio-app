import React from 'react'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

          {/* Container */}
          
          <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600 text-2xl'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Aleksi Paunonen</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Frontend Developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a frontend developer specializing in building exceptional digital experiences. Currently, I'm focused on
          building responsive web applications.
            </p>         
            <div>
              <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                <a href='https://github.com/aleksipaunonen'>
                Check out my projects on Github
                </a>
              </button>

            </div>
            
          </div>
            


    </div>
  )
}

export default Home