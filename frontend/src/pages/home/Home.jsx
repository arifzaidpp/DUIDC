import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner/>
            <div id="page-content" className="page-content">
                <div className="container">
                    <div className="row">


                        <div id="page-main-content" className="page-main-content">

                            <div className="rich-snippet display-none">
                                <h1 className="entry-title">University 01</h1>	<span className="published">March 22, 2021</span>
                                <span className="updated" data-time="2021-05-04 8:28">2021-05-04 8:28</span>
                            </div>

                            <article id="post-2136" className="post-2136 page type-page status-publish hentry post-no-thumbnail">
                                <h2 className="screen-reader-text">University 01</h2>
                                <div data-elementor-type="wp-page" data-elementor-id="2136" className="elementor elementor-2136" data-elementor-post-type="page">
                                    <div className="elementor-inner">
                                        <div className="elementor-section-wrap">
                                           
                                        </div>
                                    </div>
                                </div>
                            </article>

                        </div>


                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
