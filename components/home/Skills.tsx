import React from "react"
import useSWR from "swr"


type Skill = {
    id: number
    name: string,
    type: string,
    startYear: number
}

type Data = Skill[]

const RenderSkill = ({ skill }: { skill: Skill }) => {
    const getYears = (currYear: number, startYear: number) => {
        if (currYear - startYear === 0)
            return '<1 year'
        else if (currYear - startYear === 1)
            return '1 year'
        else
            return `${currYear - startYear} years`
    }
    const d = new Date();
    let currYear = d.getFullYear();

    return (
        <div>
            <h5 className="mb-0">
                {skill.name}
            </h5>
            {skill.startYear > 0 ?
                <p className="mb-2">
                    {getYears(currYear, skill.startYear)
                    }
                </p> : <br></br>
            }
        </div>
    )
}

const Skills = () => {

    const { data, error } = useSWR('/api/skills', (url: string) => fetch(url).then(res => res.json()))
    if (error) return <div>Error</div>
    if (!data) return <div>Loading...</div>
    const skills = data as Data


    const frontend = skills.filter(skill => skill.type === 'frontend').map(skill => {
        return (
            <RenderSkill skill={skill} />
        )
    })
    const backend = skills.filter(skill => skill.type === 'backend').map(skill => {
        return (
            <RenderSkill skill={skill} />
        )
    })
    const analytics = skills.filter(skill => skill.type === 'analytics').map(skill => {
        return (
            <RenderSkill skill={skill} />
        )
    })
    const blockchain = skills.filter(skill => skill.type === 'blockchain').map(skill => {
        return (
            <RenderSkill skill={skill} />
        )
    })
    const programming = skills.filter(skill => skill.type === 'programming').map(skill => {
        return (
            <RenderSkill skill={skill} />
        )
    })

    const miscellaneous = skills.filter(skill => skill.type === 'miscellaneous').map(skill => {
        return (
            <RenderSkill skill={skill} />
        )
    })

    return (
        <div id="skills-div" className="text-start">
            <div className="container pt-5 pb-5">
                <div className="mb-5">
                    <h1 className="spaced-out display-4 text-uppercase text-center"><span className="text-info">s</span><span className="text-warning">k</span><span className="text-light">i</span><span className="text-info">l</span><span className="text-warning">l</span><span className="text-light">s</span></h1>
                </div>
                <div className="row row-cols-2 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card bg-transparent h-100 border-info">
                            <div className="card-header text-info border-info text-uppercase">
                                front-end
                            </div>
                            <div className="card-body text-info">
                                {frontend}
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card bg-transparent h-100 border-warning">
                            <div className="card-header border-warning text-warning text-uppercase">
                                back-end
                            </div>
                            <div className="card-body text-warning">
                                {backend}
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card bg-transparent h-100 border-light">
                            <div className="card-header text-uppercase border-light text-light">
                                analytics
                            </div>
                            <div className="card-body text-light">
                                {analytics}
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card bg-transparent h-100 border-info">
                            <div className="card-header text-uppercase border-info text-info">
                                blockchain
                            </div>
                            <div className="card-body text-info">
                                {blockchain}
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card bg-transparent h-100 border-warning">
                            <div className="card-header text-uppercase border-warning text-warning">
                                programming
                            </div>
                            <div className="card-body text-warning">
                                {programming}
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card bg-transparent h-100 border-light">
                            <div className="card-header text-uppercase border-light text-light">
                                miscellaneous
                            </div>
                            <div className="card-body text-light">
                                {miscellaneous}
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )

}

export default Skills;