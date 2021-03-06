import React, { Component } from 'react'

export default class Search extends Component {

  handleChange = event => {
    this.props.triggerSetQuery(event.target.value)
  }

  render() {
    return (
      <div>
        <input
          type="text"
          name="query"
          ue={this.props.query}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}
