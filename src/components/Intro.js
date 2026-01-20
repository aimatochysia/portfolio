import React from 'react'

const Intro = () => {
  return (
    <div
      id='intro-section'
      className='flex flex-col items-center text-center space-y-4 mb-16 relative'
    >
      <img
        src={process.env.PUBLIC_URL + '/images/self_portrait.png'}
        alt='Self Portrait'
        className='w-64 h-64 rounded-full shadow-lg glassmorphism object-cover'
      />
      <div className='relative bg-opacity-30 glassmorphism backdrop-blur-md p-6 rounded-lg'>
        <h1 id='intro' className='text-4xl font-bold'>
          Petra Michael
        </h1>
        <p className='text-xl mt-2'>
          I'm a Computer Science student at BINUS University in Bandung,
          Indonesia, currently interning at IDEMIA as a Software Development
          Engineering Intern.
        </p>
        <p className='text-xl mt-2'>
          At IDEMIA, I focus on writing and executing test cases, particularly
          involving FIDO2 authentication protocols and APDU command sets. My
          interests span across Deep Learning, Software Engineering, Automation
          Testing, Data Science, and Full-Stack Development. I'm passionate
          about building secure, scalable, and efficient systems that bridge the
          gap between theory and real-world application.
        </p>
      </div>
    </div>
  )
}

export default Intro
