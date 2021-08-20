import React from "react";

class Story extends React.Component{
  constructor(props) {
    super(props);
    this.title = props.title;
    this.url = props.url;
  }

  render(){
    return (
        <li><a href={this.url}>{this.title} </a></li>
    )
  }
}

export default Story;