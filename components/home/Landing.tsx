import React, { useState, useEffect } from "react";
import useSWR from "swr";

import { SocialIcon } from "react-social-icons";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

import { PDFObject } from "react-pdfobject";


type Data = {
    id: number,
    name: string,
    url: string
}[]

const Landing = ({ setIsLoaded }: { setIsLoaded: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const { data, error } = useSWR('/api/socials', (url: string) => fetch(url).then(res => res.json()))
    const [modal, setModal] = useState(false);
    const toggle = () => {
        //setModal(!modal);
        window.open('/resume.pdf','_blank')
    }




    if (error) return <div>Error</div>
    if (!data) return <div>Loading...</div>



    setIsLoaded(true)



    const socials = data as Data

    const socialBtns = socials.map((social) => {
        return (<SocialIcon fgColor="#FFFFFF" key={social.id} className="me-2"
            url={social.url} target="_blank" />)
    })

    const toSgUrl = () => {
        window.open('https://www.nationsonline.org/oneworld/singapore.htm#:~:text=Singapore%20is%20famous%20for%20being,is%20a%20World%20Heritage%20Site.', '_blank')
    }


    return (


        <div id='landing-div'>
            <Modal size="lg" isOpen={modal}
                toggle={toggle}
            >
                <ModalHeader >
                    <button type="button" className="btn-close" onClick={toggle} aria-label="Close"></button>
                </ModalHeader>
                <ModalBody>
                    <PDFObject height="80vh" url="/resume.pdf" />
                </ModalBody>

            </Modal>

            <div className="container min-vh-100 position-relative">
            <div style={{top:'50%', transform:'translateY(-50%)', padding:'inherit'}} className="position-absolute">
                <div className="row mb-0 pt-5 pb-5">
                    <div className="text-start">
                        <div id="landing-div-section-1">
                            <h1 style={{color:'#FF5733'}} className="fw-normal text-uppercase display-4">
                                Hi, I&apos;m SJ
                            </h1>

                            <h1 className="text-uppercase display-4">
                                I like to build and explore
                            </h1>

                            <h5 className="d-none d-md-block text-uppercase" style={{color:'#ababab'}}>
                                I have <span className='text-light fw-bolder'>6 years</span> of <span className='text-light fw-bolder'>Developer</span> experience and <span className='fw-bolder text-light'>3 years</span> of <span className='fw-bolder text-light'>Blockchain</span> experience. I am an avid <span className='text-light fw-bolder'>Buidler</span> and <span className='text-light fw-bolder'>Explorer</span> in the <span className='text-light fw-bolder'>Web3</span> and <span className='text-light fw-bolder'>Machine Learning</span> space. My <span className='text-light fw-bolder'>Goal</span> in life is to create a <span className='text-light fw-bolder'>Positive</span> impact everywhere I go.
                            </h5>

                            <p className="d-block d-md-none text-uppercase" style={{color:'#ababab'}}>
                                I have <span className='text-light fw-bolder'>6 years</span> of <span className='text-light fw-bolder'>Developer</span> experience and <span className='fw-bolder text-light'>3 years</span> of <span className='fw-bolder text-light'>Blockchain</span> experience. I am an avid <span className='text-light fw-bolder'>Buidler</span> and <span className='text-light fw-bolder'>Explorer</span> in the <span className='text-light fw-bolder'>Web3</span> and <span className='text-light fw-bolder'>Machine Learning</span> space. My <span className='text-light fw-bolder'>Goal</span> in life is to create a <span className='text-light fw-bolder'>Positive</span> impact everywhere I go.
                            </p>
                            <br />

                            <div>
                                {socialBtns} <Button onClick={toggle} color="success" className="text-light rounded-pill btn-labeled" size="lg"><span className="btn-label"><i className="fa fa-chevron-right"></i></span>View Resume</Button>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            </div>
           





        </div>


    )
}

export default Landing;