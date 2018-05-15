import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import beautiesfoodiesLogo from '../../assets/images/projects/beautiesfoodies.png'
import thinktechLogo from '../../assets/images/projects/thinktech.png'
import catsomfgLogo from '../../assets/images/projects/omgcats.jpg'

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Projects">
        <div className="row">
          <ExperienceUnit
            logo={thinktechLogo}
            colour="#000000"
            title="Think Tech"
            link="https://twitter.com/jaebv_/status/996458849631703041"
            timeperiod="2018"
            subtitle="An organization that provides more efficient tech solutions to issues that exist in the greater Washington metropolitan area. The organization’s focus almost always exclusively deal with resolving inefficiencies and providing solutions that pertains to Washington metropolitan area."
          />
          <ExperienceUnit
            logo={beautiesfoodiesLogo}
            colour="#c1ddf2"
            title="Beauties Foodies"
            link="https://beautiesfoodies.com"
            timeperiod="2017"
            subtitle="Ella and Jae are food lovers, skincare junkies, and creators looking for different ways to share their love & excitement for different products, recipes, and life lessons. They focus most of their energy on researching recipes, finding new ways to make a mess in the kitchen (a delicious mess), trying out health tips, traveling to restaurants, and just enjoying life in general."
          />
          <ExperienceUnit
            logo={catsomfgLogo}
            colour="#312F31"
            title="CatsOMFG"
            link="https://twitter.com/jaebv_/status/996458443262386177"
            timeperiod="2013 - 2014"
            subtitle="A website that generates random images of cats upon user request with 0.00001% chance of getting the same image again. Created using React. The website is now offline."
          />
        </div>
      </Section>
    )
  }
}

export default ProjectsSection
