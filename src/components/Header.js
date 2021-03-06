import React from 'react'
import logo from '../images/logo.jpg'

function Header() {
    return (
        <div class="flex justify-center pt-6 pb-6 sticky top-0 z-50 bg-gray-800">
            <div class="relative">
                <a href="/">
                    <img src={logo} alt="logo" width="40"></img>

                </a>
            </div>
            <div class="ml-5 md:ml-20 mt-3 md:text-xl">
                <a href="#projects" class="mr-5 md:mr-16">
                    <span>
                        Projects
                    </span>
                </a>
                <a href="#posts" class="mr-5 md:mr-16">
                    <span>
                        Posts
                    </span>
                </a>
                <a href="#about" class="mr-5 md:mr-16">
                    <span>
                        About
                    </span>
                </a>
                <a href="#contact">
                    <span>
                        Contact
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Header
