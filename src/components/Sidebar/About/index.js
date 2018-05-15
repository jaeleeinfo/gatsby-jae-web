import React, { Component } from 'react'

import './style.scss'

class About extends Component {
  render () {
    return (
      <div className="about">
        <div className="image">
        </div>
        <div className="bio">
          <p>tl;dr: I create.</p>
          <p>Currently reading: <a href='https://twitter.com/hashtag/JAELEERRN?src=hash' target='_blank'>#JAELEERRN</a></p>
          <p>한국어</p>
          <div className="emoji">
            👏&nbsp; 👨‍💻
          </div>
        </div>
      </div>
    )
  }
}

export default About
