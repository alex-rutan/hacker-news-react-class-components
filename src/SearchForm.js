import React from "react";

class SearchForm extends React.Component{
  constructor(props) {
    super(props);
    this.handleSearch = props.handleSearch;
    this.formData = {};
  }

  handleChange(evt) {
    const { name, value } = evt.target;
    this.setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.handleSearch()
    
  }


  render(){
    return (
    <form>
      <input 
        placeholder="Enter search term.."
        onChange={handleChange}
        >

        </input>
    </form>
    )
  }
}

export default SearchForm;