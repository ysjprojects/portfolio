import React, {useEffect} from "react";
import { Button } from "reactstrap";



const RenderTitle = () => {
    return (
        <div className="h1 text-uppercase text-center">
            sj&apos;s ruminations
        </div>

    )
}


const Blog = ({ setIsLoaded }: { setIsLoaded: React.Dispatch<React.SetStateAction<boolean>> }) => {
    useEffect(() => {
        setIsLoaded(true)
    }, [])
 
    return (
        <div id="blog-div" className="bg-dark text-center">
            <div className="container pt-5 pb-5">
                <div className="mb-5">
                    <RenderTitle />
                    <h5 style={{color:'#ababab'}}>A personal blog where I will regularly share my school and life experiences and write about AI/ML and blockchain</h5>

                </div>
      
                <div>
                    <Button outline size="lg" color="warning" onClick={()=> window.open('https://blog.sjyu.xyz', '_blank')}>View Blog</Button>
                </div>
            </div>
        </div>
    )
}

export default Blog;