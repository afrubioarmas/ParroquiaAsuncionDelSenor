import React, { Component } from 'react';

import axios from '../../../Axios';
import NewInstance from '../../../components/Main/NewInstance/NewInstance'; 

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
            <React.Fragment>

                <div class="page-head" data-bg-image="images/page-head-1.jpg">
                    <div class="container">
                        <h2 class="page-title">Noticias</h2>
                    </div>
                </div>

                <main class="main-content">
                    <div class="fullwidth-block">
                        <div class="container">
                            <div class="row">
                                <div class="content col-md-12">
                                    <h2 class="section-title">Últimas Noticias</h2>
                                    <ul class="seremon-list large">
                                        {news}
                                    </ul>
                                </div>
                                {/* <div class="sidebar col-md-3 col-md-offset-1">
                                    <div class="widget">
                                        <h3 class="widget-title">Categories</h3>
                                        <ul class="arrow">
                                            <li><a href="#">Perspiciatis unde</a></li>
                                            <li><a href="#">Omnis iste natus</a></li>
                                            <li><a href="#">Voluptatem accusantium</a></li>
                                            <li><a href="#">Doloremque eaque</a></li>
                                            <li><a href="#">Totam rem aperiam</a></li>
                                        </ul>
                                    </div>

                                    <div class="widget">
                                        <h3 class="widget-title">Donations</h3>
                                        <p>Distinctio unde consequuntur delectus, repudiandae, impedit atque earum adipisci, explicabo perferendis.</p>
                                        <a href="#" class="button">Make a donation</a>
                                    </div>

                                    <div class="widget">
                                        <h3 class="widget-title">Gallery updates</h3>

                                        <div class="galery-thumb">
                                            <a href="#"><img src="images/gallery-thumb-1.jpg" alt=""/></a>
                                            <a href="#"><img src="images/gallery-thumb-2.jpg" alt=""/></a>
                                            <a href="#"><img src="images/gallery-thumb-3.jpg" alt=""/></a>
                                            <a href="#"><img src="images/gallery-thumb-4.jpg" alt=""/></a>
                                            <a href="#"><img src="images/gallery-thumb-5.jpg" alt=""/></a>
                                            <a href="#"><img src="images/gallery-thumb-6.jpg" alt=""/></a>
                                        </div>
                                    </div>

                                    <div class="widget">
                                        <h3 class="widget-title">Text widget </h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum aliquam obcaecati velit, atque necessitatibus molestias ullam tempore itaque quidem sequi ea sed consectetur, eligendi cupiditate saepe! Hic veniam maiores explicabo.</p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </main>
            </React.Fragment> 
        );
    }
}

export default News;