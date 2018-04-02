import React, { Component } from "react";
import { connect } from "react-redux";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

class SearchBar extends Component {
    constructor(props) {
    super(props)
    this.state = { address: 'San Francisco, CA' }
    this.onChange = (address) => this.setState({ address })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))
  }

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }

    const renderSuggestion = ({ formattedSuggestion }) => (
        <div>
          <strong>{ formattedSuggestion.mainText }</strong>{' '}
          <small>{ formattedSuggestion.secondaryText }</small>
        </div>
      )

    return (
      <form onSubmit={this.handleFormSubmit}>
        <PlacesAutocomplete inputProps={inputProps}
            renderSuggestion={renderSuggestion}
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

function mapStateToProps(state) {
    return {
        // look at combined reducers, we called this piece of state - auth
        auth : state.auth
    };
}

export default connect(mapStateToProps)(SearchBar);
