import React from 'react'
import { FaXTwitter, FaLinkedin, FaGithub } from 'react-icons/fa6';
function Footer() {
  return (
    <div className='flex justify-between px-10 mb-7 '>
        <div className="flex gap-4 ">
      <a href="https://x.com/_Aman_JeetSingh" target="_blank" rel="noopener noreferrer">
        <FaXTwitter className="w-6 h-6 text-white hover:text-gray-400" />
      </a>
      <a href="www.linkedin.com/in/aman-jeet-singh-b12246243/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="w-6 h-6 text-blue-600 hover:text-blue-800" />
      </a>
      <a href="https://github.com/AMAN-JEET-SINGH" target="_blank" rel="noopener noreferrer">
        <FaGithub className="w-6 h-6 text-gray-200 hover:text-white" />
      </a>
    </div>
        <p className='text-white/60 '>Made with ❤️ by Aman Jeet Singh</p>
    </div>
  )
}

export default Footer