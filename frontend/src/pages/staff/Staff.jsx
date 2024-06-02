import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Members from "../../components/members/Members";

const Staff = () => {
  const staff = [
    {
      id: 1,
      name: "Faculty & Staffs",
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
      ],
      members: [
        {
          id: 101,
          name: "Teachers",
          members: [
            {
              name: "Emily Brown",
              img: "https://tailus.io/sources/blocks/classic/preview/images/man.jpg",
            },
            {
              name: "Michael Lee",
              img: "https://tailus.io/sources/blocks/classic/preview/images/man.jpg",
            },
            {
              name: "Grace Wang",
              img: "https://tailus.io/sources/blocks/classic/preview/images/man.jpg",
            },
            {
              name: "Emily Brown",
              img: "https://tailus.io/sources/blocks/classic/preview/images/man.jpg",
            },
            {
              name: "Michael Lee",
              img: "https://tailus.io/sources/blocks/classic/preview/images/man.jpg",
            },
            {
              name: "Grace Wang",
              img: "https://tailus.io/sources/blocks/classic/preview/images/man.jpg",
            },
            {
              name: "Emily Brown",
              img: "https://tailus.io/sources/blocks/classic/preview/images/man.jpg",
            },
            {
              name: "Michael Lee",
              img: "https://tailus.io/sources/blocks/classic/preview/images/man.jpg",
            },
            {
              name: "Grace Wang",
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
      <Members data={staff} />
      <Footer />
    </>
  );
};

export default Staff;
