import React from "react";
import Post from "./Post";

function Posts() {
  const posts = [
    {
      title: "NFT fractions decentralised exchange introduction",
      date: "Sept 10, 2021",
      link: "https://medium.com/@szmizorsz/nft-fractions-decentralised-exchange-introduction-3e696f27c065",
    },
    {
      title: "Smart contract architecture",
      date: "Sept 15, 2021",
      link: "https://medium.com/@szmizorsz/smart-contract-architecture-77a17ae9255d",
    },
    {
      title: "NFT fractions repository contracts",
      date: "Sept 20, 2021",
      link: "https://medium.com/@szmizorsz/nft-fractions-repository-contracts-3ecab96f3d1",
    },
    {
      title: "Dex contracts",
      date: "Sept 26, 2021",
      link: "https://medium.com/@szmizorsz/dex-contracts-20e11ed52ef7",
    },
    {
      title: "The Bridge",
      date: "Oct 1, 2021",
      link: "https://medium.com/@szmizorsz/the-bridge-82608dfcf5a2",
    },
    {
      title: "The Graph",
      date: "Oct 9, 2021",
      link: "https://medium.com/@szmizorsz/the-graph-bec114d56e0e",
    },
    {
      title: "UI, Deployment, Hosting, Decentralisation",
      date: "Oct 12, 2021",
      link: "https://medium.com/@szmizorsz/ui-deployment-hosting-decentralisation-d1b2d4c41f87",
    },
    {
      title: "Full-stack web3 for semi-DAPPs: web3 onboarding as a service",
      date: "Jun 5, 2022",
      link: "https://medium.com/coinmonks/full-stack-web3-for-semi-dapps-web3-onboarding-as-a-service-cfbb70fa9d54",
    },
    {
      title: "Web3 onboarding as a service: technical details",
      date: "Jun 5, 2022",
      link: "https://medium.com/coinmonks/web3-onboarding-as-a-service-technical-details-f9f19b8daba5",
    },
    {
      title: "Design Patterns in Solidity: An Introduction",
      date: "May 4, 2023",
      link: "https://medium.com/coinmonks/design-patterns-in-solidity-an-introduction-fcfb0834e134",
    },
    {
      title: "Contract Management patterns",
      date: "May 4, 2023",
      link: "https://medium.com/coinmonks/contract-management-patterns-61fad80d49c9",
    },
    {
      title: "Security patterns",
      date: "May 4, 2023",
      link: "https://medium.com/coinmonks/security-patterns-208394299142",
    },
    {
      title: "Access Restriction Patterns",
      date: "May 4, 2023",
      link: "https://medium.com/coinmonks/access-restriction-patterns-ee1736628a44",
    },
    {
      title: "Behavioral patterns",
      date: "May 4, 2023",
      link: "https://medium.com/coinmonks/behavioral-patterns-a44676669d1a",
    },
    {
      title: "Gas optimization patterns",
      date: "May 4, 2023",
      link: "https://medium.com/coinmonks/gas-optimization-patterns-a166569ecb72",
    },
  ];
  return (
    <div id="posts" class="pt-5 md:pt-16">
      <h6 class="flex justify-start pb-5 border-b-4 mb-10 text-yellow-400 text-3xl">
        Posts
      </h6>
      {posts.map((post) => (
        <Post title={post.title} link={post.link} date={post.date} />
      ))}
    </div>
  );
}

export default Posts;
