import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Members from "../../components/members/Members";
import Footer from "../../components/footer/Footer";

const Department = () => {
  const Dept = [
    {
      id: 1,
      name: "Arabic Department",
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
          name: "Arabic Wing",
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
          ],
        },
        {
          id: 102,
          name: "Urdu Wing",
          members: [
            {
              name: "Daniel Garcia",
              position: "Member",
              img: "https://tailus.io/sources/blocks/classic/preview/images/man.jpg",
            },
            {
              name: "Sophia Kim",
              position: "Member",
              img: "https://tailus.io/sources/blocks/classic/preview/images/man.jpg",
            },
            {
              name: "Liam Patel",
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
      <Members data={Dept} />
      <Footer />
    </>
  );
};

export default Department;
