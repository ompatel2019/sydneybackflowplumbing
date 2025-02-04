import React from 'react'
import divider from '../images/curve.svg'

const PageTitle = ({pageTitle, pageRoute, dividerBackground, dividerFill, backgroundColour, textColour}) => {
  return (
    <>
      <section className={`${backgroundColour} ${textColour} space-y-12 max-md:space-y-4`}>
      <div className='space-y-4 responsivePad 2xl:pt-32 lg:pt-24 md:pt-20 pt-12 text-center'>
          <h2 className='h1 font-satoshi-black'>
            {pageTitle}
          </h2>
          <p className='h7 font-satoshi-medium'>
            {pageRoute}
          </p>
        </div>
      </section>
    <svg className={dividerBackground} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" ><path  d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill" fill={dividerFill} fill-opacity="1"></path></svg>
    </>
  )
}

export default PageTitle