import React from 'react'

const Footer = () => {
  return (
    <footer className='text-center bg-slate-800 text-white flex w-full justify-center items-center h-20'>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className='capitalize'>

        Copyright &copy; { new Date().getFullYear() } Muhammad Shumail All rights reserved.

      </a>

    </footer>
  )
}

export default Footer