import React, { Component } from 'react';
import ContestantData from '../data/updated-user-ratings.json';
import './UserList.css';

class UserList extends Component {
  render() {
    let users = ContestantData.users;
    users.sort(function(a, b){return a.rank - b.rank;});
    let prev = 0;
    return (
      <div>
        {users.map((contestant, index) => {
            if(prev+1 !== contestant.rank){
              console.log(contestant.rank);
            }
            prev = contestant.rank;
            return <div className = "rwStyle">
                <p style = {{width: "10%"}} className = "cllStyle">{contestant.rank}</p>
                <p className = "hndleStyle"><a href = {"https://leetcode" + (contestant.country_name === "中国" ? "-cn" : "") + ".com/" + contestant.username}>{contestant.username}</a></p>
                <p style = {{width: "20%"}} className = "cllStyle">{contestant.rating}</p>
                <p style = {{width: "20%"}} className = "cllStyle">{contestant.delta | 0}</p>
                <p style = {{width: "20%"}} className = "cllStyle">{contestant.predicted_rating | 0}</p>
              </div>
        })}
      </div>
    );
  }
}

export default UserList;