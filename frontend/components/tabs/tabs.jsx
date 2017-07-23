import React from 'react';
import EssayContainer from '../profile/essay_container';

class Tabs from React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0
    };

    this.tabArray = this.tabArray.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  tabArray() {
    let title;

    return (
      this.props.tabNames.map((tab, idx) => {
        if(this.state.selectedIndex === idx) {
          return (
            <li key={idx} onClick={() => this.handleClick(idx) }>
              <p>{tab}</p>
            </li>
          );
          )
        }
      })
    );
  }

  render() {
    return (
      <div>
        <div className="profile-tabs-container">
          <ul>
            {this.tabArray()}
          </ul>
        </div>
        <div>{this.props.tabs[this.state.selectedIndex]}</div>
      </div>
    );
  }

}

export default Tabs;
