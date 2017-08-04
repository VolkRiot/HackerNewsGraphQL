import React, { Component } from 'react';

class Link extends Component {
  _voteforLink = async () => {
    //  Placeholder
  };

  render() {
    return (
      <div>
        {this.props.link.description} ({this.props.link.url})
      </div>
    );
  }
}

export default Link;
