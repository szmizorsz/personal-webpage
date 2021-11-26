import React from 'react'

function ProjectCard({ title, link, paragraphs }) {
    return (
        <div class="pl-5 pr-5 pb-3 m-3 bg-gray-600 rounded shadow-md">
            <div class="pt-10 pb-5 underline text-lg">
                <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
            </div>
            <div>
                {paragraphs.map((paragraph) =>
                    <div class="pb-2 text-gray-300 text-justify text-sm lg:text-base">
                        {paragraph.text}
                    </div>
                )}
            </div>
        </div >
    )
}

export default ProjectCard
