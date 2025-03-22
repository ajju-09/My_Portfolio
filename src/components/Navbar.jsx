import React, { useEffect } from 'react'

function Navbar({menuOpen, setMenuOpen}) {

    useEffect( () => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
    }, [menuOpen])


  return (
    <nav className='fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg'>
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className='font-mono text-xl font-bold text-white'>Ajinkya's<span className='text-blue-500'> Portfolio</span></a>

                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={ () => setMenuOpen( (prev) => !prev)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-gray-300 hover:text-white transition-colors"> Home </a>
                    <a href="#about" className="text-gray-300 hover:text-white transition-colors"> About </a>
                    <a href="#projects" className="text-gray-300 hover:text-white transition-colors"> Projects </a>
                    <a href="#contact" className="text-gray-300 hover:text-white transition-colors"> Contact </a>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar