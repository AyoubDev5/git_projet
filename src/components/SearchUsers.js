import React, { Component } from 'react';

export class SearchUsers extends Component {

    state={
        search:''
    }

    handleForm = (e)=>{
        this.setState({
            search: e.target.value
        })
    }
    searchUser = (e) =>{
        e.preventDefault();
        this.props.getUserSearch(this.state.search)
    }
  render() {
      const {search}=this.state;
    return (
           <form onSubmit={this.searchUser}>
                <div className="mb-3">
                    <input onChange={this.handleForm} type="text" name="search" id="search" className="form-control" placeholder="search any user here...." aria-describedby="helpId" value={search}/>
                </div>
                    <button type="submit" className="btn btn-primary btn-block mb-2">Search</button> 
           </form>
    );
  }
}

export default SearchUsers;

