import React, { Component } from "react";

import classnames from "classnames/bind";

import css from "./index.scss";

const cx = classnames.bind(css);
const moduleName = "SignUp";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    return (
      <div className={cx(`${moduleName}`)}>
      </div>
    )
  }
}

export default SignUp