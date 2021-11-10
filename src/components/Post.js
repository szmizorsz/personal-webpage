import React from 'react'

function Post({ date, link, title }) {
    return (
        <div>
            <div>{date}</div>
            <a href={link}>{title}</a>
        </div>
    )
}

export default Post
