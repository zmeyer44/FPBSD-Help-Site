import React, { Component, Fragment } from 'react'
import { X } from 'react-feather'

import './Buttons.css'

class Buttons extends Component {
  render() {
    return (
      <Fragment>
        <div className="taCenter">
          <a href="/post-categories/teacher-resources/">
            <div className="Button btn-margin">Teacher Resources</div>
          </a>
          <a href="/post-categories/parent-resources/">
            <div className="Button btn-margin">Parent Resources</div>
          </a>
        </div>
      </Fragment>
    )
  }
}
export default Buttons
