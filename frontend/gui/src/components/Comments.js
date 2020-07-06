import React from 'react';
import './portfolio.css'
function formatdate()
{
  let now = new Date();
  return now.getHours() +':'+now.getMinutes()+':'+now.getSeconds();
}

const Comments = (props)=>{
    console.log(props.data)
    return(
        <div >
         
          <textarea className="commentbox"  id="email" type="text "rows="1" cols="80"  placeholder="Enter your Email"></textarea>
          <textarea className="commentbox"  id="comment" type="text "rows="6" cols="80"  placeholder="anything to say?"></textarea>

          <button className="submit"  type="button" onClick={()=>{
            const obj={
              "email":document.getElementById("email").value,
              "content":document.getElementById("comment").value,
              "timeStamp": formatdate()
            }
            document.getElementById("email").value='';
            document.getElementById("comment").value='';

            props.postdata(obj)}} >Comment</button>
            <ul >
            {props.data.map(({ email, content }, index) => <li className="block" key={index}> <div className="commentname">{email}:</div> {content}</li>)}
            </ul>
        
        </div>
    )
}

export default Comments;