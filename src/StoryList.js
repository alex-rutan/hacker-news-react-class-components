import React from "react";
import SearchForm from "./SearchForm";
import Story from "./Story";
import axios from "axios";

class StoryList extends React.Component {
  state = { stories: [],
    searchTerm: ""
  };

  async componentDidMount() {
    let res = await axios.get(`https://hn.algolia.com/api/v1/search?query=react`);
    this.setState({ ...this.state, stories: res.data.hits });
  }

  async handleSearch(searchTerm) {
    this.setState({ ...this.state, searchTerm })
  }

  async componentDidUpdate(){
    let res = await axios.get(`https://hn.algolia.com/api/v1/search?query=${this.searchTerm}`);
    let stories = res.data.hits;
    this.setState({ ...this.state, stories })
  }

  render() {
    return (
      <div>
        <SearchForm handleSearch={this.handleSearch}/>
        <ul>
          {this.state.stories.map(s => <Story
            key={s.objectID}
            title={s.title}
            url={s.url} />)}
        </ul>
      </div>
    )
  }
}

export default StoryList