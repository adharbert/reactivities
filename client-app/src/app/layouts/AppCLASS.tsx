import React, { Component } from 'react';
import './styles.css';
import axios from 'axios';
import { Header, Icon, List } from 'semantic-ui-react'
import { IActivity } from '../models/activity';


interface IState {
  activities: IActivity[]
}

class App extends Component<{}, IState> {
  // making state readonly, you can still use setState, but cannot use "state ="
  readonly state: IState = {
    activities: []
  }

  /*
  -- traditional way
  componentDidMount() {
    axios.get('http://localhost:5000/api/activities')
         .then((response) => {
            this.setState({
              activities: response.data
            })
         })
  }
  */
  componentDidMount() {
    axios.get<IActivity[]>('http://localhost:5000/api/activities').then((response) => {
      this.setState({
        activities: response.data
      })
    })
  }



  render () {
    return (
      <div>
        <Header as='h2'>
          <Icon name='users' />
          <Header.Content>Reactivities</Header.Content>
        </Header>
        <List>
          {this.state.activities.map((activity, index) => (
            <List.Item key={index}>{activity.title}</List.Item>
          ))}          
        </List>
      </div>
    );
  };
}

export default App;
