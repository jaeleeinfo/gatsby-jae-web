import React from 'react'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import LearningSection from '../components/LearningSection'
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'

import './style.scss'

const IndexPage = () => (
    <div className="index">
      <div className="main">
        <h5>
          Hi, my name is <span className="bold">Jae Lee</span>
        </h5>

        <h3 className="bold">
          Project manager and consultant with diverse international experiences. Currently working on a culturally immersive education platform while simultaneously managing a Tech solutions organization. Previously managed projects in both the food and the fashion market.
        </h3>

        <ExperienceSection />
        <ProjectsSection />
        <LearningSection />
      </div>

      <div className="aside">
        <div className="top">
          <About />
        </div>
        <div className="bottom">
          <Links />
        </div>
      </div>
    </div>
)

export default IndexPage
