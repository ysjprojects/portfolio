import React, { useState } from "react";
import useSWR from "swr";

import { SocialIcon } from "react-social-icons";

import { PDFObject } from "react-pdfobject";
import { Modal, ModalHeader, ModalBody, Card, CardBody, Row, Col, Button } from "reactstrap";
import * as stats from '../../data/stats';

type Data = {
    id: number,
    name: string,
    url: string
}[]

const Landing = () => {
    const { data, error } = useSWR('/api/socials', (url: string) => fetch(url).then(res => res.json()))
    const [modal, setModal] = useState(false);

    if (error) return <div>Error</div>
    if (!data) return <div>Loading...</div>


    const toggle = () => setModal(!modal);

    const socials = data as Data

    const socialBtns = socials.map((social) => {
        return (<SocialIcon key={social.id} className="me-2"
            url={social.url} target="_blank" />)
    })


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
                                I like to build stuff
                            </h1>

                            <h3 className="d-md-none d-block">
                                I like to build stuff
                            </h3>
                            <h4 className="d-none d-md-block">
                                I&apos;m a software developer and tech enthusiast from Singapore <span className="fi fi-sg"></span>
                            </h4>
                            <br />

                            <div>
                                {socialBtns}
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 mt-5 mt-lg-0">

                        <Card id="landing-div-section-2" className="border-light border border-3 bg-transparent d-none d-md-block">
                            <CardBody className="pb-1">


                                <h3 className="mt-3 mb-0">Occupation</h3>
                                <h5>{stats.OCCUPATION}</h5>
                                <Row>
                                    <Col md={8}>
                                        <h3 className="mt-4 mb-0">Course</h3>
                                        <h5>{stats.COURSE}</h5>
                                    </Col>
                                    <Col md={4}>
                                        <h3 className="mt-4 mb-0">Year</h3>
                                        <h5>{stats.YEAR_OF_STUDY}</h5>
                                    </Col>
                                </Row>
                                <h3 className="mt-4 mb-0">Education</h3>
                                <h5>{stats.EDUCATION[0]}</h5>
                                <h5>{stats.EDUCATION[1]}</h5>
                                <h3 className="mt-4 mb-0">Skills</h3>
                                <h5>
                                    {stats.SKILLS.map((skill, index) => {
                                        if (index === stats.SKILLS.length - 1) {
                                            return (<span key={index}>{skill}</span>)
                                        }
                                        return (<span key={index}>{skill} &nbsp;&bull;&nbsp; </span>)
                                    })}
                                </h5>
                                <Row className="mt-5 mb-3 ms-2 me-2">
                                    <Button onClick={toggle} className="rounded-pill" color="info">View CV</Button>
                                </Row>









                            </CardBody>
                        </Card>

                    </div>

                    <div className="col-lg-2">
                    </div>
                </div>

            </div>

            <Modal size="lg" isOpen={modal}
                toggle={toggle}
            >
                <ModalHeader >
                    <button type="button" className="btn-close" onClick={toggle} aria-label="Close"></button>
                </ModalHeader>
                <ModalBody>
                    <PDFObject height="80vh" url="/resources/CV_YU_SHI_JIE.pdf" />                </ModalBody>

            </Modal>



        </div>


    )
}

export default Landing;