import React from "react";
import useSWR from "swr";
import Stack from "./Final/Stack";
import { SocialIcon } from "react-social-icons";

type Data = {
    id: number,
    name: string,
    url: string
}[]

const Final = () => {
    const { data, error } = useSWR('/api/socials', (url: string) => fetch(url).then(res => res.json()))
    if (error) return <div>Error</div>
    if (!data) return <div>Loading...</div>

    const socials = data as Data

    const len = socials.length;
    const socialBtns = socials.map((social) => {
        return (<SocialIcon key={social.id} className={social.id !== len ? 'me-2' : ''}
            url={social.url} target="_blank" />)
    })
    return (
        <div id="final-div" className="pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8">
                        <img src="/img/misc/thankyou.png" alt="thank you" style={{ width: "100%", maxWidth: "500px" }} />
                    </div>
                    <div className="col-12 col-md-4">
                        <Stack />
                    </div>
                </div>
                <hr className="orange-divider"></hr>
                <div className="row justify-content-center">
                    {socialBtns}
                </div>
            </div>
        </div>
    )
}


export default Final;