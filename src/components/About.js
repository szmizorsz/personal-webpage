import React from 'react'

function About() {
    return (
        <div id="about" class="pt-5 md:pt-16 text-sm md:text-base">
            <h6 class="flex justify-start pb-5 border-b-4 mb-10 text-yellow-400 text-3xl">
                About me
            </h6>
            <p>
                I am a software engineer passionate about blockchain technologies. Over the course of the last many years that I've spent as a software engineer,
                I worked both with clients and developers from multiple countries. The experiences I've gained encompass various facets of software engineering,
                including the development of complex systems, architecting data processing pipelines and in depth system analysis.
            </p>
            <br />
            <p>
                These experiences endowed me with invaluable lessons about intercultural work relationships, communicating with clients,
                translating their requirements into code and functioning products, estimating reasonable time-frames for new features,
                and of course, writing clean, readable, and robust code that passes both UI and unit tests and the ultimate test of real-life users interacting with it.
            </p>
            <br />
            <p>
                In the last four years I got excited about the potential and role of blockchain technologies in our society and future.
                I started my journey in the space with learning on different platforms like IvanOnTech and EatTheBlocks.
                Along the way I created my hobby projects where I could play with many dominant technologies in this industry nowadays.
                After gaining valuable insight of these technologies I made my contribution to the community by sharing my experience on Medium with Coinmonks.
                Once I felt ready to step out I started my Dapp developer carrier as a freelancer that is my passion nowadays.
            </p>
            <br />
            <p>
                Outside technology and software engineering, I am a proud dad, an enthusiastic runner and an occasional yoga practitioner and maybe a digital nomad someday.
            </p>
            <br />
            <p>
                I think we are extremely lucky to be alive in such a unique point in history where the code we write and the products we engineer can positively impact the lives of millions.
            </p>
            <div class="mt-10 flex justify-center items-center">
                <div class="bg-blue-400 w-1/12 text-center h-8 text-lg">
                    <a href="../CV.pdf" target="_blank" rel="noopener noreferrer">
                        Resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About
