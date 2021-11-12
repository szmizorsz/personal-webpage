import React from 'react'

function Post({ date, link, title }) {
    return (
        <div class="pt-4 pb-4">
            <span class="pr-5 text-lg">{date}</span>
            <a href={link} class="text-2xl ">{title}</a>
        </div>
    )
}

export default Post
