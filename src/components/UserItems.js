import axios from 'axios';
import React, { Component } from 'react';
import User from './User';


export class UserItems extends Component {
    
    state={
        users:{}
    }
    
    componentWillUnmount(){
        const log = this.props.match.params.login;
        axios.get('https://api.github.com/users/'+ log)
        .then(response=>{
              this.setState({
                  users: response.data
              })
        })
    }
  render() {
      const {user}=this.state
    return (
        <div>
           <User user={user}/>
        </div>
    );
  }
}

export default UserItems;
