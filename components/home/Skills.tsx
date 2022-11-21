import React from "react"
import useSWR from "swr"
import Image from 'next/image'




type Skill = {
    id: number
    name: string,
    imgurl: string,
    startYear: number
}

type Data = Skill[]

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

const toggleVisibility = async (id: number) => {
    let display = document.getElementById(`skill-info-${id}`)!.style.display
    if (display === "block") {
        document.getElementById(`skill-info-${id}`)!.style.display = "none"
    }
    else {
        document.getElementById(`skill-info-${id}`)!.style.display = "block"
    }

}

const RenderTitle = () => {
    return (
        <div style={{ maxWidth: '250px', margin: '0 auto' }} className="row row-cols-6 text-uppercase text-center">
            <div className="col">
                <div style={{ paddingTop: '100%' }}>
                    <h1>
                        <span className="text-info">s</span>

                    </h1>
                </div>
            </div>
            <div className="col">
                <div style={{ paddingTop: '100%' }}>
                    <h1><span className="text-warning">k</span></h1>

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

                    <h1><span className="text-warning">l</span></h1>
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

const RenderSkill = ({ skill }: { skill: Skill }) => {
    const imgurl: string = `/img/skills/${skill.imgurl}`
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
        <div className="col ps-0 pe-0" style={{ cursor: 'pointer' }} onClick={() => toggleVisibility(skill.id)}>
            <div style={{ paddingTop: '100%', position: 'relative' }}>
                <div className="prevent-select">
                    <Image src={imgurl} alt={skill.name} layout='fill' />
                </div>

                <div id={`skill-info-${skill.id}`} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'none' }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        width: '100%',
                        background: 'rgba(12, 12, 12, 0.9)',

                    }}>
                        <div className="text-center">
                            <h5 className="mb-0">
                                {skill.name}
                            </h5>
                            {skill.startYear > 0 ?
                                <p className="mb-2">
                                    {getYears(currYear, skill.startYear)
                                    }
                                </p> : <br></br>}
                        </div>


                    </div>

                </div>
            </div>

            {/*<h5 className="mb-0">
                {skill.name}
            </h5>
            {skill.startYear > 0 ?
                <p className="mb-2">
                    {getYears(currYear, skill.startYear)
                    }
                </p> : <br></br>
            }*/}
        </div >
    )
}

const Skills = ({ setIsLoaded }: { setIsLoaded: React.Dispatch<React.SetStateAction<boolean>> }) => {

    const { data, error } = useSWR('/api/skills', (url: string) => fetch(url).then(res => res.json()))
    if (error) return <div>Error</div>
    if (!data) return <div>Loading...</div>

    setIsLoaded(true)

    const skills = data as Data
    console.log(skills)

    const getSkillsByCat = (category: string) => {
        let indicesListByCat: {
            [category: string]: number[]
        }
        indicesListByCat = {
            'frontend': [1, 2, 3, 18, 4, 5, 22, 30],
            'backend': [6, 7, 9, 10],
            'analytics': [12, 13, 21, 29, 27],
            'python': [32, 33, 34, 35, 36, 37, 31, 38],
            'blockchain': [15, 19, 24, 16, 20, 14],
            'miscellaneous': [23, 11, 17, 25, 26, 28]
        }
        let indices: number[] = indicesListByCat[category]
        let filteredSkills: Data = []
        indices.forEach((index) => {
            let skillArr = skills.filter(skill => skill.id === index)
            if (skillArr.length > 0) {
                filteredSkills.push(skillArr[0])
            }
        })
        return filteredSkills

    }


    const frontend = getSkillsByCat('frontend').map((skill) => {
        return (
            <RenderSkill key={skill.id} skill={skill} />
        )
    })
    const backend = getSkillsByCat('backend').map((skill) => {
        return (
            <RenderSkill key={skill.id} skill={skill} />
        )
    })
    const analytics = getSkillsByCat('analytics').map((skill) => {
        return (
            <RenderSkill key={skill.id} skill={skill} />
        )
    })
    const blockchain = getSkillsByCat('blockchain').map((skill) => {
        return (
            <RenderSkill key={skill.id} skill={skill} />
        )
    })

    const pythonDataScience = getSkillsByCat('python').map((skill) => {
        return (
            <RenderSkill key={skill.id} skill={skill} />
        )
    })


    const miscellaneous = getSkillsByCat('miscellaneous').map((skill) => {
        return (
            <RenderSkill key={skill.id} skill={skill} />
        )
    })

    return (
        <div id="skills-div" className="text-start">
            <div className="container pt-5 pb-5">
                <div className="mb-5">
                    <RenderTitle />
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card bg-transparent h-100 border-info">
                            <div className="card-header text-info border-info text-uppercase">
                                front-end
                            </div>
                            <div className="card-body text-info pt-0 pb-0">
                                <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4'>
                                    {frontend}
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card bg-transparent h-100 border-warning">
                            <div className="card-header border-warning text-warning text-uppercase">
                                back-end
                            </div>
                            <div className="card-body text-warning pt-0 pb-0">
                                <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4'>
                                    {backend}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card bg-transparent h-100 border-light">
                            <div className="card-header text-uppercase border-light text-light">
                                analytics
                            </div>
                            <div className="card-body text-light pt-0 pb-0">
                                <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4'>

                                    {analytics}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card bg-transparent h-100 border-info">
                            <div className="card-header text-uppercase border-info text-info">
                                blockchain
                            </div>
                            <div className="card-body text-info pt-0 pb-0">
                                <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4'>

                                    {blockchain}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card bg-transparent h-100 border-warning">
                            <div className="card-header text-uppercase border-warning text-warning">
                                python data science
                            </div>
                            <div className="card-body text-warning pt-0 pb-0">
                                <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4'>

                                    {pythonDataScience}
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col">
                        <div className="card bg-transparent h-100 border-light">
                            <div className="card-header text-uppercase border-light text-light">
                                miscellaneous
                            </div>
                            <div className="card-body text-light pt-0 pb-0">
                                <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4'>

                                    {miscellaneous}
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )

}

export default Skills;