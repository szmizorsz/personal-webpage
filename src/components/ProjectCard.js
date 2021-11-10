import React from 'react'

function ProjectCard({ title, description, paragraphs }) {
    return (
        <div>
            <div>
                {title}
            </div>
            <div>
                {description}
            </div>
            <div>
                {paragraphs.map((paragraph) =>
                    <div>
                        {paragraph.text}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProjectCard
