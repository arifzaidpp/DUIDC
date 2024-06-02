import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Members from "../../components/members/Members";

const Committee = () => {
  const committee = [
    {
      id: 1,
      name: "Committee",
      mainMembers: [
        {
          name: "John Doe",
          position: "President",
          img: "https://tailus.io/sources/blocks/classic/preview/images/man.jpg",
        },
        {
          name: "Alice Smith",
          position: "Secretary",
          img: "https://tailus.io/sources/blocks/classic/preview/images/man.jpg",
        },
        {
          name: "Robert Johnson",
          position: "Treasurer",
          img: "https://tailus.io/sources/blocks/classic/preview/images/man.jpg",
        },
      ],
      members: [
        {
          id: 101,
          name: "Members",
          members: [
            {
              name: "Emily Brown", 
              position: "Member",
              img: "https://tailus.io/sources/blocks/classic/preview/images/man.jpg",
            },
            {
              name: "Michael Lee", 
              position: "Member",
              img: "https://tailus.io/sources/blocks/classic/preview/images/man.jpg",
            },
            {
              name: "Grace Wang", 
              position: "Member",
              img: "https://tailus.io/sources/blocks/classic/preview/images/man.jpg",
            },
            {
              name: "Emily Brown", 
              position: "Member",
              img: "https://tailus.io/sources/blocks/classic/preview/images/man.jpg",
            },
            {
              name: "Michael Lee", 
              position: "Member",
              img: "https://tailus.io/sources/blocks/classic/preview/images/man.jpg",
            },
            {
              name: "Grace Wang", 
              position: "Member",
              img: "https://tailus.io/sources/blocks/classic/preview/images/man.jpg",
            },
            {
              name: "Emily Brown", 
              position: "Member",
              img: "https://tailus.io/sources/blocks/classic/preview/images/man.jpg",
            },
            {
              name: "Michael Lee", 
              position: "Member",
              img: "https://tailus.io/sources/blocks/classic/preview/images/man.jpg",
            },
            {
              name: "Grace Wang", 
              position: "Member",
              img: "https://tailus.io/sources/blocks/classic/preview/images/man.jpg",
            },
          ],
        },
      ],
    },
  ];
  return (
    <>
      <Navbar />
      <Members data={committee} />
      <Footer />
    </>
  );
};

export default Committee;
