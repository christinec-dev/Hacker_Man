import React, { Component } from 'react'
import Page from 'react-page-loading'

//page loader
export default class Loader extends Component {
    render() {    
      return (
        <div>
          <Page loader={"bubble-spin"} color={"rgb(179, 2, 2)"}size={20}>
          </Page>
        </div>
      )
    }
  }