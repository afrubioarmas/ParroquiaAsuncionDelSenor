import React, { Component } from 'react';

import axios from '../../Axios';
import NewInstance from '../../components/NewInstance/NewInstance'; 

class News extends Component {

    state = {
        news: [],
        error: false
    }

    componentDidMount () {
        //console.log(this.props);
        axios.get( '/new' )
            .then( response => {
                const news = response.data.slice(0, 4);
                const updatedNews = news.map(newAux => {
                    return {
                        ...newAux
                    }
                });
                this.setState({news: updatedNews}); 
                //console.log(this.state.news);
                //console.log( "respose" + response );
            } )
            .catch(error => {
                //console.log(error);
                this.setState({error: true});
            });
    }

    render() {

        let news = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            news = this.state.news.map(newAux => {
                return (
                    <NewInstance 
                        key={newAux.id}
                        title={newAux.title} 
                        date={newAux.date}
                        />
                );
            });
        }

        return (
            <div className="fullwidth-block">
                <div className="container">
                    <h2 className="section-title">Recent news</h2>
                    <div className="row">
                        {news}
                    </div>
                </div> 
            </div> 
        );
    }
}

export default News;