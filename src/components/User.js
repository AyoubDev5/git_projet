import React, { Component } from 'react';

export class User extends Component {
  render() {
    const {avatar_url,login,html_url,repos_url}=this.props.user;
    return (
        <div>
             <div className="card mb-2">
                    <div className="card-body">
                        <img className='card-img-top' src={avatar_url}/>
                        <h4 className="card-title">{login}</h4>
                        <p className="card-text">
                            <a className="btn btn-primary mr-2" href={'/users/'+ login} role="button">Show more</a>
                            <a className="btn btn-info" href={repos_url} role="button">Show Repository</a>
                        </p>
                    </div>
                </div>
        </div>
    );
  }
}

export default User;
