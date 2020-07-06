
import React from 'react';
import Profile from '../components/Portfolio';
import axios from 'axios';
import Comments from '../components/Comments';



class Portfolioreviews extends React.Component{
    state={
        articles:[],
        comments:[]
    }

postdata = (text) =>
{
  console.log(text);
  axios.post('http://127.0.0.1:8000/comments/create/',
  text,{
    auth: {
      username: 'shruti',
      password: 'shruti'
    }
  })
  .then( (response) =>{
    console.log(response);
    axios.get('http://127.0.0.1:8000/comments/')
            .then(res=>{
                this.setState({
                    comments:res.data
                });
                console.log(res.data);
            })
            .catch(err=>{
                if (err.response) {
                    // client received an error response (5xx, 4xx)
                    console.log(err.response);
                  } else if (err.request) {
                    // client never received a response, or request never left
                    console.log("No response for "+err.request+ ", may be it never reached the server");
                  } else {
                    console.log(err);
                  }})
            })
        .catch(err=>{
    if (err.response) {
        console.log(err.response);
      } else if (err.request) {
        console.log("No response for "+err.request+ ", may be it never reached the server");
      } else {
        console.log(err);
      }})
  
}



    componentDidMount(){
        axios.get('http://127.0.0.1:8000/portfolio/')
            .then(res=>{
                this.setState({
                    articles:res.data
                });
                console.log(res.data);
            })
            .catch(err=>{
                if (err.response) {
                    console.log(err.response);
                  } else if (err.request) {
                    console.log("No response for "+err.request+ ", may be it never reached the server");
                  } else {
                    console.log(err);
                  }})

            axios.get('http://127.0.0.1:8000/comments/')
            .then(res=>{
                this.setState({
                    comments:res.data
                });
                console.log(res.data);
            })
            .catch(err=>{
                if (err.response) {
                    console.log(err.response);
                  } else if (err.request) {
                    console.log("No response for "+err.request+ ", may be it never reached the server");
                  } else {
                    console.log(err);
                  }})
    }
    render(){
        return (
            <div className = "pic">
            <Profile data={this.state.articles} />
            <Comments data = {this.state.comments} postdata={this.postdata} />
            </div>
        )
    }
}

export default Portfolioreviews;