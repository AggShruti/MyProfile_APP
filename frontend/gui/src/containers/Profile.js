import '../App.css';
import React from 'react';
import pic from './pic.png';
import './profile.css';

const Profile = (props)=>{
    console.log(props.data)
    return(

        <div className="pic">
        <img src={pic} className="pic" alt="Logo" ></img>
        <div className="row">
        <div className="block">
        <ul>
        {props.data.map(({ title, content }, index) => <li key={index}>Name: {title}, Content: {content}</li>)}
        </ul>
        </div>
        <div className="block">
        <ul>
        {props.data.map(({ title, content }, index) => <li key={index}>Name: {title}, Content: {content}</li>)}
        </ul>
        </div>
        </div>
        </div>
    )
}

export default Profile;