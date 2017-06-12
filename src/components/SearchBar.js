import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      term: ''
    }

    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleSearchSubmit(event) {
    event.preventDefault();

    this.props.handleSubmit(this.state.term)
  }

  handleInputChange(event) {
    this.setState({
      term: event.target.value
    })

    this.props.timedChanges(this.state.term)

  }

  render() {
    return (
      <form className="search-bar" onSubmit={this.handleSearchSubmit}>
        <input type="text" value={this.state.term} onChange={this.handleInputChange}/>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}
