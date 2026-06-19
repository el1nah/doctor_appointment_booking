import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/*left*/}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Our company provides facilities related to the medical field. Use our website to book appointments with trusted doctors specialised in their respective fields and domains. We provide smooth booking experiences and we will always be there for you. Thank you. </p>
        </div>

        {/*center*/}
        <div>
            <p className='text-xl font-medium mb-5 '>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        {/*right*/}
        <div>
            <p className='text-xl font-medium mb-5 '>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+91 1234567890</li>
                <li>bookdoctor@bookdoctor.com</li>
            </ul>
        </div>
      </div>

      <div>
        <hr/>
        <p className='py-5 text-sm text-center'>copyright 1234@ protected - All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
