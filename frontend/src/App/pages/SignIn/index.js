import React, { Component } from "react";

import { Link } from 'react-router-dom'
import logo_title from 'src/App/assets/vomit_logo_title.png'

import classnames from "classnames/bind";

import css from "./index.scss";

const cx = classnames.bind(css);
const moduleName = "SignIn";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        <Link to="/">
          <img src={logo_title}/>
        </Link>
      </div>
    )
  }
}

export default SignIn