import React from "react";
import "./Members.css";
import MainMembers from "./MainMembers";
import SubMembers from "./SubMembers";

const Members = (data) => {
  const MainPersons = data.data.filter((person) =>
    [
      "President",
      "Secretary",
      "Treasurer",
      "Principle",
      "Vice-principal",
    ].includes(person.position)
  );
  const Members = data.data.filter((member) =>
    ["Member"].includes(member.position)
  );
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="py-20 bg-gray-50 pt-14">
          <div className="container mx-auto px-6 md:px-12 xl:px-32">
            <div className="mb-16 text-center">
              <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                <h2 className="text-4xl s-heading tracking-tight font-extrabold text-gray-900 dark:text-white">
                  {data.title}
                </h2>
                <div className="underline"></div>
              </div>
            </div>
            <div className="grid gap-12 items-center md:grid-cols-3">
              {MainPersons.map((data, i) => (
                <MainMembers key={i} data={data} />
              ))}
            </div>
          </div>
        </div>

        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-10">
            <h2 className="mb-4 text-4xl tracking-tight s-t-heading font-extrabold text-gray-900 dark:text-white">
              Members
            </h2>
          </div>
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Members.map((data, i) =>(<SubMembers key={i} data={data}/>))}
          </div>
        </div>
      </section>

      {/* <div  className="responsive-container-block outer-container">
  <div  className="responsive-container-block inner-container">
    <p  className="text-blk section-head-text">
      Meet Our Committee Members
    </p>
    <p  className="text-blk section-subhead-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <div  className="responsive-container-block">
      <div  className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
        <div  className="team-card">
          <div  className="img-wrapper">
            <img  className="team-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png"/>
          </div>
          <p  className="text-blk name">
            Maxwell Doe
          </p>
          <p  className="text-blk position">
            Instructor
          </p>
          <div  className="social-media-links">
            <a href="http://www.twitter.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg"/>
            </a>
            <a href="http://www.facebook.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg"/>
            </a>
            <a href="http://www.instagram.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg"/>
            </a>
            <a href="http://www.gmail.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg"/>
            </a>
          </div>
        </div>
      </div>
      <div  className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
        <div  className="team-card">
          <div  className="img-wrapper">
            <img  className="team-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png"/>
          </div>
          <p  className="text-blk name">
            Maxwell Doe
          </p>
          <p  className="text-blk position">
            Instructor
          </p>
          <div  className="social-media-links">
            <a href="http://www.twitter.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg"/>
            </a>
            <a href="http://www.facebook.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg"/>
            </a>
            <a href="http://www.instagram.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg"/>
            </a>
            <a href="http://www.gmail.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg"/>
            </a>
          </div>
        </div>
      </div>
      <div  className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
        <div  className="team-card">
          <div  className="img-wrapper">
            <img  className="team-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png"/>
          </div>
          <p  className="text-blk name">
            Maxwell Doe
          </p>
          <p  className="text-blk position">
            Instructor
          </p>
          <div  className="social-media-links">
            <a href="http://www.twitter.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg"/>
            </a>
            <a href="http://www.facebook.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg"/>
            </a>
            <a href="http://www.instagram.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg"/>
            </a>
            <a href="http://www.gmail.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg"/>
            </a>
          </div>
        </div>
      </div>
      <div  className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
        <div  className="team-card">
          <div  className="img-wrapper">
            <img  className="team-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png"/>
          </div>
          <p  className="text-blk name">
            Maxwell Doe
          </p>
          <p  className="text-blk position">
            Instructor
          </p>
          <div  className="social-media-links">
            <a href="http://www.twitter.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg"/>
            </a>
            <a href="http://www.facebook.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg"/>
            </a>
            <a href="http://www.instagram.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg"/>
            </a>
            <a href="http://www.gmail.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg"/>
            </a>
                        <a href="http://www.instagram.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg"/>
            </a>
            <a href="http://www.gmail.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg"/>
            </a>
          </div>
        </div>
      </div>
      <div  className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
        <div  className="team-card">
          <div  className="img-wrapper">
            <img  className="team-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png"/>
          </div>
          <p  className="text-blk name">
            Maxwell Doe
          </p>
          <p  className="text-blk position">
            Instructor
          </p>
          <div  className="social-media-links">
            <a href="http://www.twitter.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg"/>
            </a>
            <a href="http://www.facebook.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg"/>
            </a>
            <a href="http://www.instagram.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg"/>
            </a>
            <a href="http://www.gmail.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg"/>
            </a>
                        <a href="http://www.instagram.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg"/>
            </a>
            <a href="http://www.gmail.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg"/>
            </a>
          </div>
        </div>
      </div>
      <div  className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
        <div  className="team-card">
          <div  className="img-wrapper">
            <img  className="team-img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png"/>
          </div>
          <p  className="text-blk name">
            Maxwell Doe
          </p>
          <p  className="text-blk position">
            Instructor
          </p>
          <div  className="social-media-links">
            <a href="http://www.twitter.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-twitter.svg"/>
            </a>
            <a href="http://www.facebook.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-fb.svg"/>
            </a>
            <a href="http://www.instagram.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg"/>
            </a>
            <a href="http://www.gmail.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg"/>
            </a>
                        <a href="http://www.instagram.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-insta.svg"/>
            </a>
            <a href="http://www.gmail.com/" target="_blank">
              <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/gray-mail.svg"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}
    </>
  );
};

export default Members;
