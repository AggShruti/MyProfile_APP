
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


  })
}



    componentDidMount(){
        axios.get('http://127.0.0.1:8000/portfolio/')
            .then(res=>{
                this.setState({
                    articles:res.data
                });
                console.log(res.data);
            })

            axios.get('http://127.0.0.1:8000/comments/')
            .then(res=>{
                this.setState({
                    comments:res.data
                });
                console.log(res.data);
            })
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