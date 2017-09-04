import React from 'react';

class About extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    home: React.PropTypes.object,
  };

  state = {
    info: 'About'
  }

  render() {
    const homeStyles = require('../../containers/Home/Home.css');

    return (
      <div className={homeStyles.main} />
    );
  }
}

export default About;
