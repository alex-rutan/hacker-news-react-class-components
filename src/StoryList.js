import React from "react";
import SearchForm from "./SearchForm";
import Story from "./Story";
import axios from "axios";

class StoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stories: [], searchTerm: "" };
    this.handleSearch = this.handleSearch.bind(this);
  }

  async componentDidMount() {
    let res = await axios.get(`https://hn.algolia.com/api/v1/search?query=react`);
    this.setState({ ...this.state, stories: res.data.hits });
  }

  async handleSearch(searchTerm) {
    let res = await axios.get(`https://hn.algolia.com/api/v1/search?query=${searchTerm}`);
    console.log(res)
    let stories = res.data.hits;
    this.setState({ stories: stories }, () => {
    this.forceUpdate();
    console.log(this.state);
    })
    
  }

  render() {
    console.log(this.state);
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