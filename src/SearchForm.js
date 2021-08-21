import React from "react";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = props.handleSearch;
    this.state = { formData: "" };
  }

  handleChange = (evt) => {
    const { value } = evt.target;
    this.setState({ formData: value });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.handleSearch(this.state.formData)
  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Enter search term.."
          onChange={this.handleChange}
        /> 
        <button type="submit">search</button>
      </form>
    )
  }
}

export default SearchForm;