import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-container flex flex-col md:flex-row md:justify-between items-center gap-4'>
            <div className='hidden md:block w-1/3' />

            <div className='socials flex justify-center w-full md:w-1/3'>
                {socialImgs.map((img) => (
                    <a className='icon mx-2' target='_blank' href={img.url} key={img.url}>
                        <img src={img.imgPath} alt='social icon' />
                    </a>
                ))}
            </div>

            <div className='w-full md:w-1/3 flex justify-center md:justify-end mt-4 md:mt-0'>
                <p className='text-center md:text-right text-sm text-gray-500'>
                    {new Date().getFullYear} Daniel Vincent. All rights reserved.
                </p>

            </div>

        </div>
    </footer>
  )
}

export default Footer