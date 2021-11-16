import React from 'react'
import ProjectCard from './ProjectCard'

function Projects() {
    const projects = [
        {
            title: "NFT Fractions Decentralized Exchange",
            link: "https://round-hill-1400.on.fleek.co/#/",
            paragraphs: [
                {
                    text: "This exchange aims to solve the problem of skyrocketing NFT prices with fractional ownership. NFT owners can deposit their NFTs and mint fractions of them that they can trade on this exchange.\n" +
                        "Other users can acquire ownership of fractions and once having them all they can withdraw the original NFT. \n" +
                        "The exchange implements the classic order book model and regular order types like limit and market orders."
                },
                {
                    text: "Trading fractions is affordable to anyone with the exchange's cross chain capabilities. Built on Polygon and Binance Smart Chain the users have the possibility to trade where it is the cheapest."
                },
                {
                    text: "Speaking of technologies, the exchange is built on the non fungible token standards (ERC721 and ERC1155) using the industry standard openzeppelin library. Contracts are indexed by the Graph. \n" +
                        "NFTs are stored on IPFS. Hosting is truly decentralised with Fleek and ENS."
                }
            ]
        },
        {
            title: "Real estate management platform",
            link: "https://royal-mode-4747.on.fleek.co/",
            paragraphs: [
                {
                    text: "The platform's goal is to bring real estates onto the blockchain as non fungible tokens. After a registration process, owners can leverage the immutable nature of blockchains by uploading photos of the property to IPFS and storing their hashes on-chain. \n" +
                        "Those photos can be used to prove certain states of the property that have already happened like reconstructions."
                },
                {
                    text: "There is a selling workflow for real estates that mimics the current off-chain processes. Owners can also use their real estate to get a mortgage against. \n" +
                        "Mortgage liquidity pools are maintained by liquidity providers who are compensated by the interest they gain."
                },
                {
                    text: "Technology stack of the project is based on openzeppelin contracts, react, IPFS and decentralised hosting with Fleek, ENS and contract deployment on Ethereum Ropsten testnet."
                }
            ]
        },
        {
            title: "Ethemerals",
            link: "https://www.ethemerals.com/",
            paragraphs: [
                {
                    text: "The project is a NFT based blockchain game. NFTS are anime inspired female warriors called ethemerals that are collectible and tradable. Each of them represents a top ranking cryptocurrencies. \n" +
                        "Ethemerals can battle each other through staking their life force and gaining based on their real cryptocurrency price movements."
                },
                {
                    text: "Technology stack is based on openzeppelin contracts, react, tailswind, Ethereum and lately Arbitrum and some centralized parts based on Google Cloud Platform. \n" +
                        "I was involved in the core team, where I focused on Chainlink integration for price feeds and Arbitrum related tasks like token migration and bridge contracts."
                }
            ]
        },
        {
            title: "Moonwolf.io",
            link: "https://www.ethemerals.com/",
            paragraphs: [
                {
                    text: "Moonwolf is a project with a deflationary, store of value token and an ecosystem around it with monthly NFT sales. NFTs are high quality art works from Drippies built around wolf themes. \n" +
                        "Besides NFT marketplace the project involves farming and staking possibilities of the Wolf token."
                },
                {
                    text: "I helped this project during its early stages with some proof of concept tasks. I created NFT repositories and farming possibilities."
                }
            ]
        }
    ]
    return (
        <div id="projects" class="pt-16">
            <h6 class="flex justify-start pb-5 mb-2 border-b-4 text-yellow-400 text-3xl">
                Projects
            </h6>
            <div class="grid grid-cols-2">
                {projects.map((project) =>
                    <div class="col-span-1">
                        <ProjectCard title={project.title} link={project.link} paragraphs={project.paragraphs} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Projects
