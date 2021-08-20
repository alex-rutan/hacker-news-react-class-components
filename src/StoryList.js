import React from "react";
import SearchForm from "./SearchForm";
import Story from "./Story";
import axios from "axios";

class StoryList extends React.Component {
  state = { stories: [] };

  async componentDidMount() {
    let res = await axios.get(`https://hn.algolia.com/api/v1/search?query=react`);
    console.log(res);
    this.setState({ stories: res.data.hits });
  }

  handleSearch() {
    
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