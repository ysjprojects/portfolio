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
const toggleVisibility = async (id: number) => {
    let display = document.getElementById(`award-info-${id}`)!.style.display
    if (display === "block") {
        document.getElementById(`award-info-${id}`)!.style.display = "none"
    }
    else {
        document.getElementById(`award-info-${id}`)!.style.display = "block"
    }

}

const RenderAward = ({ award }: { award: Award }) => {
    const getColor = (prize: string) => {
        switch (prize) {
            case "1st":
                return "#FFD700"
            case "2nd":
                return "#C0C0C0"
            case "3rd":
                return "#CD7F32"
            default:
                return "#6495ED"
        }
    }

    return (

        <div className="col">
            <div className="card h-100 bg-transparent border-light">
                <div className="prevent-select" style={{ position: 'relative', cursor: 'pointer' }} onClick={() => toggleVisibility(award.id)}>
                    <img src={`/img/awards/${award.thumbnail}`} className="card-img-top" alt={award.name} />
                    <div id={`award-info-${award.id}`} style={{ display: 'none', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                        <div style={{
                            display: 'flex', justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                            width: '100%',
                            background: 'rgba(12, 12, 12, 0.9)'
                        }}>
                            <h1 style={{ color: getColor(award.prize) }}>{award.prize}</h1>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div>
                        <h5 className="card-title">{award.name}</h5>
                    </div>

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
                        <span className="text-info">a</span>

                    </h1>
                </div>
            </div>
            <div className="col">
                <div style={{ paddingTop: '100%' }}>
                    <h1><span className="text-warning">w</span></h1>

                </div>
            </div>
            <div className="col">
                <div style={{ paddingTop: '100%' }}>

                    <h1><span className="text-light">a</span></h1>
                </div>
            </div>
            <div className="col">
                <div style={{ paddingTop: '100%' }}>

                    <h1><span className="text-info">r</span></h1>
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
                    <RenderTitle />
                </div>
                <div className="row row-cols-2 row-cols-md-3 g-4">
                    {awardsList}
                </div>

            </div>
        </div>
    )

}

export default Awards;