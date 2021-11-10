import React from 'react'
import Post from './Post'

function Posts() {
    const posts = [
        {
            title: "NFT fractions decentralised exchange introduction",
            date: "Oct 12, 2021",
            link: "https://medium.com/@szmizorsz/nft-fractions-decentralised-exchange-introduction-3e696f27c065"
        },
        {
            title: "Smart contract architecture",
            date: "Oct 12, 2021",
            link: "https://medium.com/@szmizorsz/smart-contract-architecture-77a17ae9255d"
        },
        {
            title: "NFT fractions repository contracts",
            date: "Oct 12, 2021",
            link: "https://medium.com/@szmizorsz/nft-fractions-repository-contracts-3ecab96f3d1"
        }
    ]
    return (
        <div>
            <h6>
                Posts
            </h6>
            <div>
                Guides, notes, articles and other stuff I've written.
            </div>
            {posts.map((post) =>
                <Post title={post.title} link={post.link} date={post.date} />
            )}

        </div>
    )
}

export default Posts
