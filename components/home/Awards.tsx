import React from "react";
import useSWR from "swr";

type Award = {
    id: number,
    name: string,
    prize: string,
    year: number,
    descHTML: string,
    thumbnail: string,
    imgs: string[]
}

type Data = Award[]

const RenderAward = ({ award }: { award: Award }) => {
    return (

        <div className="col">
            <div className="card h-100 bg-transparent border-light">
                <img src={`/img/awards/${award.thumbnail}`} className="card-img-top" alt={award.name} />
                <div className="card-body">
                    <div className="d-md-block d-none">
                        <h5 className="card-title">{award.name}</h5>
                        <h3 className="card-text text-half-muted">{award.prize}</h3>

                    </div>
                    <div className="d-md-none d-block">
                        <p style={{ fontSize: '1rem' }} className="card-title">{award.name}</p>
                        <h5 className="card-text text-half-muted">{award.prize}</h5>

                    </div>
                </div>
            </div>
        </div>


    )
}
const Awards = ({ setIsLoaded }: { setIsLoaded: React.Dispatch<React.SetStateAction<boolean>> }) => {

    const { data, error } = useSWR('/api/awards', (url: string) => fetch(url).then(res => res.json()))
    if (error) return <div>Error</div>
    if (!data) return <div>Loading...</div>

    setIsLoaded(true)

    const awards = data as Data

    const awardsList = awards.map((award) => {
        return (
            <RenderAward key={award.id} award={award} />
        )
    })

    return (
        <div id="awards-div">

            <div className="container py-5" style={{ maxWidth: "970px" }}>
                <div className="mb-5">
                    <h1 className="spaced-out display-4 text-uppercase text-center">&nbsp;awards</h1>
                </div>
                <div className="row row-cols-2 row-cols-md-3 g-4">
                    {awardsList}
                </div>

            </div>
        </div>
    )

}

export default Awards;