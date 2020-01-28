import React from ('react');
import axios from ('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('/')
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log('Error contating server! ', err);
      });
  }

  render () {
    //Insert React HTML for basic App here
  }
}