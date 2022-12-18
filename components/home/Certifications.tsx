import React from "react";
import useSWR from "swr";
import { UncontrolledCollapse, Button } from "reactstrap";


type Certification = {
    id: number,
    type: string,
    year: number,
    title: string,
    org: string,
    url: string,
    desc: string
}

type Data = Certification[]

const RenderTitle = () => {
    return (
        <div className="h1 text-uppercase text-center">
            certifications & courses
        </div>

    )
}

const badgeColor = (type: string) => {
    if (type === 'certification') return 'success'
    else if (type === 'course') return 'primary'
    else return 'danger'
}

/*
const NestedCertifs = ({ titles, id }: { titles: String[], id: number }) => {
    const nestedCertifs = titles.map((title, index) => {
        return (

            <li key={index}>
                <p>{title}</p>
            </li>
        )
    })

    return (

        <div>
            <Button className="btn btn-light btn-sm" id={`list-toggler-${id}`}>
                view courses
            </Button>
            <UncontrolledCollapse toggler={`#list-toggler-${id}`}>
                <br />
                <ul className="ms-3">
                    {nestedCertifs}
                </ul>
            </UncontrolledCollapse>

        </div>

    )
}
*/

const Certifications = ({ setIsLoaded }: { setIsLoaded: React.Dispatch<React.SetStateAction<boolean>> }) => {

    const { data, error } = useSWR('/api/certifications', (url: string) => fetch(url).then(res => res.json()))
    if (error) return <div>Error</div>
    if (!data) return <div>Loading...</div>

    setIsLoaded(true)

    const certifs = data as Data
    const certifsList = certifs.map((certif) => {
        return (
            <li key={certif.id} className="list-unstyled mb-5"><h4><a href={certif.url} target="_blank" rel="noreferrer">{certif.title}</a></h4>
                <h4><span className={`d-none d-md-inline-block badge bg-${badgeColor(certif.type)} me-3`}>{certif.type}</span><span className={`d-none d-md-inline-block badge bg-secondary me-3`}>{certif.org}</span><span className="d-none d-md-inline-block text-warning">{certif.year}</span></h4>
                <div className="h5 fw-lighter">{certif.desc}</div>

            </li>
        )
    })
    return (
        <div id="certifs-div" className="bg-dark text-start">
            <div className="container pt-5 pb-5">
                <div className="mb-5">
                    <RenderTitle />
                </div>
                <div>
                    <ul className="ps-0">
                        {certifsList}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Certifications;