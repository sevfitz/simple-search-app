import React, { Component } from 'react';
import { Jumbotron, Grid } from 'react-bootstrap';
import SearchForm from './components/SearchForm';

class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Grid>
            <h1>Search App</h1>
            <p>This is a simple search app based on the Treehouse Create-React-App course example</p>
            <SearchForm />
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
