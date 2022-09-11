import React from "react";
import useSWR from "swr";
import { UncontrolledCollapse, Button } from "reactstrap";


type Certification = {
    id: number,
    type: string,
    year: number,
    title: string,
    url: string,
    courses: string[]
}

type Data = Certification[]


const badgeColor = (type: string) => {
    if (type === 'specialization') return 'success'
    else if (type === 'course') return 'warning'
    else if (type === 'learning path') return 'info'
    else return 'primary'
}

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

const Certifications = ({ setIsLoaded }: { setIsLoaded: React.Dispatch<React.SetStateAction<boolean>> }) => {

    const { data, error } = useSWR('/api/certifications', (url: string) => fetch(url).then(res => res.json()))
    if (error) return <div>Error</div>
    if (!data) return <div>Loading...</div>

    setIsLoaded(true)

    const certifs = data as Data
    const certifsList = certifs.map((certif) => {
        return (
            <li key={certif.id} className="list-unstyled mb-5"><h4><a href={certif.url} target="_blank" rel="noreferrer">{certif.title}</a> &nbsp;<span className="d-none d-md-inline-block text-muted">&bull;&nbsp; {certif.year}</span><span className={`d-none d-md-inline-block badge bg-${badgeColor(certif.type)} ms-3`}>{certif.type}</span></h4>

                {
                    certif.courses.length !== 0 ?
                        <NestedCertifs titles={certif.courses} id={certif.id} /> : undefined
                }

            </li>
        )
    })
    return (
        <div id="certifs-div" className="bg-dark text-start">
            <div className="container pt-5 pb-5">
                <div className="mb-5">
                    <h1 className="d-none d-md-block spaced-out display-4 text-uppercase text-center">certifications</h1>
                    <h1 className="d-block d-md-none spaced-out-mobile text-uppercase text-center">certifications</h1>
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