import React, { useEffect, useState } from "react";

const About = ({ setIsLoaded }: { setIsLoaded: React.Dispatch<React.SetStateAction<boolean>> }) => {
    useEffect(() => {
        setIsLoaded(true)
    }, [])
    return (
        <div id="about-div" className="text-start bg-dark">

            <div className="container-fluid pt-5 pb-5">
                <div className="row">
                    <div className="col-12 col-md-2">
                        <div className="row">
                            <div className="col-12 col-md-2 offset-md-2">

                            </div>
                            <div style={{ zIndex: 10 }} className="col-12 col-md-8">
                                <div className="m-5 d-block d-md-none">
                                    <div className=" circular-frame border border-warning rounded-circle"></div></div>
                                <div className="d-none d-md-block">
                                    <div className=" circular-frame border border-warning rounded-circle"></div></div>


                            </div>


                        </div>
                    </div>

                    <div className="col-12 col-md-10">
                        <div className="mt-3 mt-md-0 ms-md-3">
                            <h1 className="display-4">About Me</h1>
                            <p className="lead">I am an avid full-stack developer and aspiring data scientist</p>
                            <p className="lead">I am fascinated by the world of blockchain</p>
                            <p className="lead">I strive to create a positive impact everywhere I go</p>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default About;