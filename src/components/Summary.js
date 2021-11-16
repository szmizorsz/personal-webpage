import React from 'react'
import profile_pic from "../images/profile_pic.jpg";

function Summary() {
    return (
        <div class="bg-gray-900 grid grid-cols-6">
            <div class="col-span-1"></div>
            <div class="col-span-2">
                <div class="text-5xl pt-20 pb-20">
                    I'm Szabolcs Szentes.
                </div>
                <div class="pb-10 text-xl text-gray-400">
                    I'm a software developer.<br />
                    First and foremost, this website is a collection of my projects and writings.<br />
                    You will also find some facts about me along with my resume.<br />
                    Have a look around. You're welcome here.
                </div>
            </div>
            <div class="col-span-2 flex justify-center">
                <img src={profile_pic} alt="profile picture" width="300"></img>
            </div>
            <div class="col-span-1"></div>
        </div>
    )
}

export default Summary
