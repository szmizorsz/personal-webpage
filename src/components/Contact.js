import React from 'react'
import github from "../images/github.jpeg";
import linkedin from "../images/linkedin.jpeg";
import medium from "../images/medium.jpeg";

function Contact() {
    return (
        <div id="contact" class="pt-5 md:pt-16 pb-16">
            <h6 class="flex justify-start pb-5 border-b-4 mb-10 text-yellow-400 text-3xl">
                Contact
            </h6>
            <div class="text-lg text-center mb-4">
                Links to social:
            </div>
            <div class="flex justify-center">
                <a href="https://medium.com/@szmizorsz" target="_blank" rel="noopener noreferrer" >
                    <img src={medium} alt="medium" width="40"></img>
                </a>
                <a href="https://github.com/szmizorsz" target="_blank" rel="noopener noreferrer" class="ml-10 mr-10">
                    <img src={github} alt="github" width="40"></img>
                </a>
                <a href="https://www.linkedin.com/in/szabolcs-szentes-21859b68/" target="_blank" rel="noopener noreferrer" >
                    <img src={linkedin} alt="linkedin" width="40"></img>
                </a>
            </div>
            <div class="mt-8 mb-5 text-center">
                If you have any questions, opportunities, enquiries or just want to chat feel free to shoot me an email.
            </div>
            <div class="flex justify-center items-center">
                <div class="bg-blue-400 w-1/12 text-center h-8 text-lg">
                    <a href="mailto:szmizorsz@gmail.com" target="_blank" rel="noopener noreferrer">
                        Contact me
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact
