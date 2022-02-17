import React, { Component } from 'react';
import axios from 'axios';
import User from './User';
import SearchUsers from './SearchUsers';

export class Users extends Component {
 
    constructor(props) {
        super(props)
 
        this.state = {
            users:[]
        }
 }
 
 getUsers = () =>{
     axios.get('https://api.github.com/users')
        .then(response=>{
            this.setState({
                users: response.data
            })
     })
 }

 searchUserFromGit = (data) =>{

    if(data != ''){
            axios.get('https://api.github.com/search/users?q='+ data)
            .then(response=>{
                console.log(response.data.items)
                this.setState({
                    users: response.data.items
                })
            })
    }
 }

        componentDidMount(){
            this.getUsers();
        }
    
  render() {
    return( 
    
        <div className='container'>
            <div className="row">
                <div className="col-sm-12">
                    <SearchUsers getUserSearch={this.searchUserFromGit}/>
                </div>
            </div>
            <div className="row">
                {this.state.users.map(user => (
                   <div className="col-md-4" key={user.avatar_url}>
                       <User user={user} />
                    </div>    
                ))}
            </div>   

        </div>
        
        
        );
  }
}

export default Users;
