import React from 'react'
import profile_pic from "../images/profile_pic.jpg";

function Summary() {
    return (
        <div class="bg-gray-900 md:grid md:grid-cols-6">
            <div class="col-span-1"></div>
            <div class="col-span-2">
                <div class="text-lg lg:text-3xl 2xl:text-5xl pt-10 md:pt-20 md:pb-20">
                    I'm Szabolcs Szentes.
                </div>
                <div class="pb-10 lg:text-lg 2xl:text-xl text-gray-400">
                    I'm a software developer and blockchain enthusiast.<br />
                    First and foremost, this website is a collection of my projects and writings mostly related to blockchain.<br />
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
