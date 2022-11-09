import React, { useEffect, useState } from "react";
import { PDFObject } from "react-pdfobject";
import { Modal, ModalHeader, ModalBody, Card, CardBody, Row, Col, Button } from "reactstrap";

const About = ({ setIsLoaded }: { setIsLoaded: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    useEffect(() => {
        setIsLoaded(true)
    }, [])
    return (
        <div id="about-div" className="text-start bg-dark">
            <Modal size="lg" isOpen={modal}
                toggle={toggle}
            >
                <ModalHeader >
                    <button type="button" className="btn-close" onClick={toggle} aria-label="Close"></button>
                </ModalHeader>
                <ModalBody>
                    <PDFObject height="80vh" url="/resources/CV_YU_SHI_JIE.pdf" />                </ModalBody>

            </Modal>
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
                            <h1 className="display-4">About Me&nbsp; <Button size="sm" onClick={toggle} className="text-light rounded-pill d-none d-lg-inline-block" color="success">&nbsp;&nbsp;View CV&nbsp;&nbsp;</Button><Button size="sm" onClick={() => window.open('/resources/CV_YU_SHI_JIE.pdf', '_blank')} className="text-light rounded-pill d-inline-block d-lg-none" color="success">&nbsp;&nbsp;View CV&nbsp;&nbsp;</Button></h1>
                            <p className="lead">I am an avid full-stack developer and aspiring data scientist.</p>
                            <p className="lead">I am fascinated by the world of blockchain and decentralized finance.</p>
                            <p className="lead">I strive to create a positive impact everywhere I go.</p>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default About;