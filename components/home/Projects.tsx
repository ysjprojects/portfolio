import React from "react";
import useSWR from "swr";
import $ from "jquery"

type Project = {
    id: number
    name: string,
    url: string,
    thumbnail: string,
    shortDesc: string
}
type Data = Project[]

const toggleImg = (imgid: string) => {
    $(`#${imgid}`).hasClass('project-img-darken') ? $(`#${imgid}`).removeClass('project-img-darken') :
        $(`#${imgid}`).addClass('project-img-darken')
}

const RenderProject = ({ project }: {
    project: Project
}) => {
    const imgId = `project-img-${project.id}`
    return (

        <div className="col">
            <div className="card h-100 bg-transparent border-light">
                <a href={project.url} target="_blank" rel="noreferrer">
                    <img id={imgId} onMouseEnter={() => toggleImg(imgId)} onMouseLeave={() => toggleImg(imgId)} src={`/img/projects/${project.thumbnail}`} className="card-img-top" alt={project.name} />
                </a>
                <div className="card-body">
                    <h5 className="card-title">{project.name}</h5>
                    <p className="card-text text-half-muted">{project.shortDesc}</p>
                </div>
            </div>
        </div>


    )
}

const RenderTitle = () => {
    return (
        <div style={{ maxWidth: '250px', margin: '0 auto' }} className="row row-cols-6 text-uppercase text-center">
            <div className="col">
                <div style={{ paddingTop: '100%' }}>
                    <h1>
                        <span className="text-info">b</span>

                    </h1>
                </div>
            </div>
            <div className="col">
                <div style={{ paddingTop: '100%' }}>
                    <h1><span className="text-warning">u</span></h1>

                </div>
            </div>
            <div className="col">
                <div style={{ paddingTop: '100%' }}>

                    <h1><span className="text-light">i</span></h1>
                </div>
            </div>
            <div className="col">
                <div style={{ paddingTop: '100%' }}>

                    <h1><span className="text-info">l</span></h1>
                </div>
            </div>
            <div className="col">
                <div style={{ paddingTop: '100%' }}>

                    <h1><span className="text-warning">d</span></h1>
                </div>
            </div>
            <div className="col">
                <div style={{ paddingTop: '100%' }}>

                    <h1><span className="text-light">s</span></h1>
                </div>
            </div>
        </div>

    )
}

const Projects = ({ setIsLoaded }: { setIsLoaded: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const { data, error } = useSWR('/api/projects', (url: string) => fetch(url).then(res => res.json()))
    if (error) return <div>Error</div>
    if (!data) return <div>Loading...</div>

    setIsLoaded(true)

    const projects = data as Data


    const projectsList = projects.map((project) => {
        return (
            <RenderProject key={project.id} project={project} />
        )
    })
    return (
        <div id="projects-div" className="bg-dark">
            <div className="container pt-5 pb-5">
                <div className="mb-5">
                    <RenderTitle />
                </div>
                <div className="ps-lg-5 pe-lg-5">
                    <div className="ps-lg-5 pe-lg-5">
                        <div className="ps-lg-5 pe-lg-5">
                            <div className="ps-lg-5 pe-lg-5 text-start row row-cols-1 row-cols-md-3 g-4">
                                {projectsList}
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Projects;