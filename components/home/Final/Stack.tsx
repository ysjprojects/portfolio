import React from "react";


const Stack = () => {
    const stacks = ['NextJS', 'ReactJS', 'Reactstrap', 'FontAwesome', 'EmailJS', 'Typescript', "HTML", "CSS"].map((item) => {

        return (<li className="col" key={item}><h5>
            {item}
        </h5>
        </li>)
    })
    return (
        <div className="text-start pt-5">
            <h3 className="text-uppercase">This website is built with</h3>
            <ul className="row row-cols-1 row-cols-lg-2 g-4">
                {stacks}
            </ul>
        </div>
    )
}

export default Stack;