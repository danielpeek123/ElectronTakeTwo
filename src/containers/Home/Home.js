import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
  static propTypes = {
    home: React.PropTypes.object,
  };
  constructor(props) {
    super(props);

    this.state = {
      info: 'Hahoo App!'
    };
  }


  render() {
    const styles = require('./Home.css');

    return (
      <div className={styles.main}>
        <h1>{this.state.info}</h1>
      </div>
    );
  }
}
export default connect(null)(Home);
