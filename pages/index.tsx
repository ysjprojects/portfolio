import type { NextPage } from 'next'
import Head from 'next/head'


import Landing from '../components/home/Landing';
import About from '../components/home/About';
import Certifications from '../components/home/Certifications';
import Awards from '../components/home/Awards';
import Skills from '../components/home/Skills';
import Projects from '../components/home/Projects';
import Final from '../components/home/Final';


const Home: NextPage = () => {


  return (
    <><Head>
      <title>SJ's Portfolio</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
      <div>
        <Landing />
        <About />
        <Skills />
        <Certifications />
        <Awards />
        <Projects />
        <Final />
      </div>
    </>

  )
}

export default Home;
