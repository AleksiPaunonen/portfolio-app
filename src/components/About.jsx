import React from 'react'

const url = "https://www.haaga-helia.fi/fi";

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className=' pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='text-4xl font-bold'>
              <p>Hi, I'm Aleksi. Nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I'm a Business Information Technology student at <b><a href={url}>Haaga-Helia</a></b>. My major
                  is Software Development. I am passionate about building excellent software that improves
              the lives of those around me. I specialize in Frontend development and I'm constantly developing
              my skills to become a Full Stack Developer. I'm currently looking for a trainee job to complete my
              internship.</p>  
            </div>
            <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                <a href='https://drive.google.com/file/d/1MW_DU0_HijeDuZ6pm-pvX5VWyZl6oyxj/view'>
                Here you can find my resume
                </a>
              </button>
              </div>
          </div>

      </div>
    </div>  
  );
};

export default About