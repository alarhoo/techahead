import Image from 'next/image'
import React from 'react'

const Hero = () => {
  const companyName = 'TechAhead'
  const companyTagline = 'Discover the Power of AI Learning'
  const ctaPrimary = 'Get Started'
  const ctaSecondary = 'Learn More'

  return (
    <>
      <div className='bg-neutral-50 px-6s py-40 text-center dark:bg-neutral-900 md:px-12 lg:text-lefts h-[50vh]s flex justify-center items-center'>
        <div className='w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl'>
          <div className='grid items-center gap-12 lg:grid-cols-2'>
            <div className='mt-12 lg:mt-0'>
              <h1 className='mt-2 mb-2 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl'>
                Welcome to <br />
                <span className='text-primary'>{companyName}</span>
              </h1>
              <p className='mb-16 text-xl font-medium text-slate-600'>{companyTagline}</p>
              <a
                className='mb-2 inline-block rounded bg-primary px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0'
                data-te-ripple-init
                data-te-ripple-color='light'
                href='#!'
                role='button'
              >
                {ctaPrimary}
              </a>
              <a
                className='inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-800 dark:hover:bg-opacity-60'
                data-te-ripple-init
                data-te-ripple-color='light'
                href='#!'
                role='button'
              >
                {ctaSecondary}
              </a>
            </div>
            <div className='mb-12 lg:mb-0'>
              <Image
                className='w-full object-cover rounded-lg shadow-lg dark:shadow-black/20'
                src={'/images/annie-spratt-4-4WPFLVhAY-unsplash.jpg'}
                alt='{image.alt}'
                height={255}
                width={380}
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
