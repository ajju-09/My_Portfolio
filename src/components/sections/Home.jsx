import React from 'react'
import RevealOnScroll from '../RevealOnScroll'
import myImage from '../../assets/myImage2.png'

function Home() {
  return (
    <section className="min-h-screen flex justify-center items-center relative" id="home">
        <RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">

        <div className="z-10 px-4 flex justify-center items-center">
            <img src={myImage} alt="myImage" className='z-10 md:h-[400px] md:w-[400px] md:rounded-[400px] h-[200px] w-[200px] rounded-[200px] overflow-hidden bg-center bg-cover shadow-xl shadow-[#c520f7] '/>
        </div>

        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-left ">
                Hi, I'm Ajinkya Awachar
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                I'm a full-stack developer who loves crafting clean, scalable web 
                applications. My goal is to built solution that offer both
                exceptional performance and a delightful user experience. 
            </p>

            <div className="flex justify-center space-x-4">
                <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">View Projects</a>

                <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/50">Contact Me</a>
            </div>
        </div>

       

        </div>
        </RevealOnScroll>
    </section>
  )
}

export default Home