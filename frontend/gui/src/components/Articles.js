
import React from 'react';
import Profile from '../containers/Profile';
import axios from 'axios';

class ArticleList extends React.Component{
    state={
        articles:[]
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/profile/')
            .then(res=>{
                this.setState({
                    articles:res.data
                });
                console.log(res.data);
            })
    }
    render(){
        return (
            <Profile data={this.state.articles} />
        )
    }
}

export default ArticleList;