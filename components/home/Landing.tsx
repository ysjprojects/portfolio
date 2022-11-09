import React, { useState } from "react";
import useSWR from "swr";

import { SocialIcon } from "react-social-icons";



type Data = {
    id: number,
    name: string,
    url: string
}[]

const Landing = ({ setIsLoaded }: { setIsLoaded: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const { data, error } = useSWR('/api/socials', (url: string) => fetch(url).then(res => res.json()))


    if (error) return <div>Error</div>
    if (!data) return <div>Loading...</div>

    setIsLoaded(true)




    const socials = data as Data

    const socialBtns = socials.map((social) => {
        return (<SocialIcon key={social.id} className="me-2"
            url={social.url} target="_blank" />)
    })

    const toSgUrl = () => {
        window.open('https://www.nationsonline.org/oneworld/singapore.htm#:~:text=Singapore%20is%20famous%20for%20being,is%20a%20World%20Heritage%20Site.', '_blank')
    }


    return (


        <div id='landing-div'>


            <div id="landing-div-container" className="container-fluid">
                <div className="row mb-0 pt-5 pb-5">
                    <div className="text-center text-lg-start offset-lg-1 col-lg-6">
                        <div id="landing-div-section-1">
                            <h1 className="text-uppercase display-4">
                                Hi, I&apos;m SJ
                            </h1>

                            <h1 className="d-none d-md-block">
                                I like to build and explore
                            </h1>

                            <h3 className="d-md-none d-block">
                                I like to build and explore
                            </h3>
                            <h4 className="d-none d-md-block">
                                Data Science • Blockchain • DeFi
                            </h4>
                            <h5 className="d-block d-md-none">
                                Data Science • Blockchain • DeFi
                            </h5>
                            <br />

                            <div>
                                {socialBtns}
                            </div>
                        </div>

                    </div>

                </div>

            </div>





        </div>


    )
}

export default Landing;