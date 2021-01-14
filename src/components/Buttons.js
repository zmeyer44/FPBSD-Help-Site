import React, { Component, Fragment } from 'react'
import { X } from 'react-feather'

import './Buttons.css'

class Buttons extends Component {
  render() {
    return (
      <Fragment>
        <div className="taCenter">
          <a href="/post-school/fpb/" className="btn-margin">
            <div className="Button">FPB</div>
          </a>
          <a href="/post-school/jlc/" className="btn-margin">
            <div className="Button">JLC</div>
          </a>
        </div>
      </Fragment>
    )
  }
}
export default Buttons
