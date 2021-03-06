import React, { useState, useEffect } from 'react'
import './styles.css';
import axios from 'axios';
import { Header, Icon, List } from 'semantic-ui-react'
import { IActivity } from '../models/activity';


const App = () => {

    const [activities, setActivities] = useState<IActivity[]>([]);

    useEffect(() => {
        axios
            .get<IActivity[]>('http://localhost:5000/api/activities')
            .then((response) => {
                setActivities(response.data)
        });
    }, []);

    return (
        <div>
            <Header as='h2'>
            <Icon name='users' />
                <Header.Content>Reactivities</Header.Content>
            </Header>
            <List>
                {activities.map((activity, index) => (
                    <List.Item key={index}>{activity.title}</List.Item>
                ))}          
            </List>
        </div>
    )
}



export default App
