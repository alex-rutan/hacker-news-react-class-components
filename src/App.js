import StoryList from "./StoryList";
import SearchForm from "./SearchForm";
import React from "react";
import axios from "axios";

class App extends React.Component {

  state={ stories: [] };

  async componentDidMount() {
    let res = await axios.get(`https://hn.algolia.com/api/v1/search?query=react`);
    this.setState({ stories : res.data.hits });
  }

  render() {

    return (
      <div className="App">
        App goes here
        <SearchForm />
        <StoryList />
      </div>
    );
  }
}

export default App;
