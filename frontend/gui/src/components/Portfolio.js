import React from 'react';
import backgroundImage from './pic2.png';
import mypic from './myimage.png';
import './portfolio.css';

const Profile = (props)=>{
    console.log(props.data)
     
     if(props.data)   
    {
        return(
        <div>
        <div className="container">
        
        <img src={backgroundImage} className="pic" alt="Logo" ></img>
        <img src={mypic} className="mypic" alt="mypic" ></img>
        {props.data.map(data=>
            <div className="centered" > 
                {data.name}
            </div>
        )}
        </div>
        <div className="row">
        <div className="blockPortfolio1">
         
        <ul>
    {props.data.map(data=>
    <div>
        <div className="bold" >
        Education Qualification:
        </div>
        <div className="normal">
         {data["education_qualification"]}
        </div>
        </div>
    )}
    {/* {props.data["Education_Qualification"].map(({Project1,Project2,Project3 }, index) => <div><li key={index}></li> <li>Education Qualification: {Project1["Title"]}</li></div>)} */}
        </ul>
        </div>
        <div className="blockPortfolio">
        <ul>
        {props.data.map(data=>
        <div>
            <div className="bold" >
              {data["experiences"]["Project1"]["Title"]} 
             </div>
             <div className="normal" >
             {data["experiences"]["Project1"]["Description"]}
             </div>
             <div className="bold" >
             {data["experiences"]["Project2"]["Title"]}
             </div>
             <div className="normal" >
             {data["experiences"]["Project2"]["Description"]}
             </div>
             <div className="bold" >
             {data["experiences"]["Project3"]["Title"]}
             </div>
             <div className="normal" >
             {data["experiences"]["Project3"]["Description"]}
             </div>
            
        </div>)}
        {props.data.map(data=>
        <div>
            <div className="bold" >
                Languages: 
            </div>
            <div className="normal">
            {data["tech_stack"]["Languages"][0]}, {data["tech_stack"]["Languages"][1]}, {data["tech_stack"]["Languages"][2]}
            </div>
            <div className="bold" >
            Database: 
            </div>
            <div className="normal">
            {data["tech_stack"]["Database"]}
            </div>
            <div className="bold" >
            Framework: 
            </div>
            <div className="normal">
            {data["tech_stack"]["FrameWork"]}
            </div>
            
        </div>)}
        </ul>
        </div>
        </div>
        </div>
    )
        }
        else return;
}

export default Profile;