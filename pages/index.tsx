import type { NextPage } from 'next'
import Head from 'next/head'



import Landing from '../components/home/Landing';
import About from '../components/home/About';
import Certifications from '../components/home/Certifications';
import Awards from '../components/home/Awards';
import Skills from '../components/home/Skills';
import Projects from '../components/home/Projects';
import Final from '../components/home/Final';
import Loading from '../components/home/Loading';

import React, { useState } from 'react';
const Home: NextPage = () => {
  const [landingIsLoaded, setLandingIsLoaded] = useState(false)
  const [aboutIsLoaded, setAboutIsLoaded] = useState(false)
  const [skillsIsLoaded, setSkillsIsLoaded] = useState(false)
  const [certifsIsLoaded, setCertifsIsLoaded] = useState(false)
  const [awardsIsLoaded, setAwardsIsLoaded] = useState(false)
  const [projectsIsLoaded, setProjectsIsLoaded] = useState(false)
  const [finalIsLoaded, setFinalIsLoaded] = useState(false)


  return (
    <><Head>
      <title>SJ&apos;s Portfolio</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
      <div>
        <Landing setIsLoaded={setLandingIsLoaded} />
        <About setIsLoaded={setAboutIsLoaded} />
        <Skills setIsLoaded={setSkillsIsLoaded} />
        <Certifications setIsLoaded={setCertifsIsLoaded} />
        <Awards setIsLoaded={setAwardsIsLoaded} />
        <Projects setIsLoaded={setProjectsIsLoaded} />
        <Final setIsLoaded={setFinalIsLoaded} />
      </div>
      {(landingIsLoaded && aboutIsLoaded && skillsIsLoaded && certifsIsLoaded && awardsIsLoaded && projectsIsLoaded && finalIsLoaded) ? null : <Loading />}
    </>

  )
}

export default Home;
