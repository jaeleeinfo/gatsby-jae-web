import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import gatsbyLogo from '../../assets/images/learning/gatsby-logo.png'
import reactLogo from '../../assets/images/learning/react-logo.png'
import lsatLogo from '../../assets/images/learning/lsat-logo.png'

class LearningSection extends React.Component {
  render() {
    return (
      <Section title="Learning">
        <div className="row">
          <ExperienceUnit
            logo={gatsbyLogo}
            colour='#FFFFFF'
            title='Gatsby'
            link='https://www.gatsbyJS.org'
            timeperiod='Expected to master by October 2018'
            subtitle='Feeling 🧐'
          />
          <ExperienceUnit
            logo={reactLogo}
            colour='#FFFFFF'
            title='React'
            link='https://reactjs.org/'
            timeperiod='Expected to master by December 2018'
            subtitle='Feeling 🤖'
          />
          <ExperienceUnit
            logo={lsatLogo}
            colour='#FFFFFF'
            title='LSAT'
            link='https://twitter.com/jaebv_/status/996462480351203328'
            timeperiod='Expected to master by September 2018'
            subtitle='Feeling 🙀. Leave a note for me using the hashtag: #lsatshout.  '
          />
        </div>
      </Section>
    )
  }
}

export default LearningSection
