import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='justify-center items-center flex md:max-w-7xl mx-auto xs:py-4 md:py-8 '>
      <p className='font-light xs:text-xs sm:text-base'>Developed by Salman Mahmud | <Link className='text-sky-400 hover:text-white' href={"tel:631-721-8930"}>631-721-8930</Link> | 2023</p>
    </div>
  )
}

export default Footer