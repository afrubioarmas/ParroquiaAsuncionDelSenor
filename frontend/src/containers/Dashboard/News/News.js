import React, { Component } from 'react';
import * as moment from 'moment';

import TopNav from '../../../components/Dashboard/TopNav/TopNav';
import NewInstance from '../../../components/Dashboard/NewInstance/NewInstance';
import AllNews from '../../../components/Dashboard/AllNews/AllNews';
import CreateNew from '../../../components/Dashboard/CreateNew/CreateNew';
import EditNew from '../../../components/Dashboard/EditNew/EditNew';


import axios from '../../../Axios';


class News extends Component {

    state = {
        create:{title:'',content:'',image:'',video:'',date:moment()},
        edit:{toggle:false,id:'',title:'',content:'',image:'',video:'',date:moment()},
        hide:false,
        news: [],
        error: false
    }

    handleCreate= (create) => (e) =>{
        e.preventDefault();
        console.log(this.state.create.title);

        let data = new FormData();

        data.append('name', create.title);
        data.append('content', create.content);
        data.append('image', create.image);
        data.append('video', create.video);
        data.append('date', create.date.format('YYYY-MM-DD HH:mm'));


        const config = { headers: {'Content-Type': 'multipart/form-data'}}

        axios.put('/new',data,config)
            .then(response => {
                //handle success
                this.setState({news:[]});
                //console.log(response);
            })
            .catch(response => {
                //handle error
                //console.log(response);
            });
    }

    handleToggleEdit=(edit)=>(e)=>{
        e.preventDefault();
        
        this.setState({edit:
                        {toggle:true,
                        id:edit.id,
                        title:edit.title,
                        content:edit.content,
                        image:edit.image,
                        video:edit.video,
                        date:edit.date}
                    });

    }

    handleEdit=(edit)=>(e)=>{
        e.preventDefault();

        let data = new FormData();

        data.append('id',edit.id);
        data.append('name', edit.title);
        data.append('content', edit.content);
        data.append('image', edit.image);
        data.append('video',edit.video);
        data.append('date', edit.date.format('YYYY-MM-DD HH:mm'));


        const config = { headers: {'Content-Type': 'multipart/form-data'}}

        axios.post('/new',data,config)
            .then(response => {
                //handle success
                this.setState({events:[],edit:{toggle:false,id:'',title:'',content:'',image:'',video:'',date:moment()}});
                //console.log(response);
            })
            .catch(response => {
                //handle error
                //console.log(response);
            });
    }

    handleDelete = (id)=>(e) =>{
        e.preventDefault();
        

        axios.delete('/new/'+id)
            .then(response => {
                //handle success
                this.setState({events:[]});
                //console.log(response);
            })
            .catch(response => {
                //handle error
                //console.log(response);
            });

    }

    componentDidMount () {
        //console.log(this.props);
        axios.get( '/new' )
            .then( response => {
                const news = response.data;
                const updatedNews = news.map(newAux => {
                    return {
                        ...newAux
                    }
                });
                this.setState({news: updatedNews}); 
                //console.log(this.state.events);
                //console.log( "respose" + response );
                const $ = window.$;
                $(document).ready( function () {
                $('#newsTable').DataTable();
        } );
            } )
            .catch(error => {
                //console.log(error);
                this.setState({error: true});
            });
    }

    componentDidUpdate(){
        if(this.state.news.length===0){
        this.componentDidMount();
        }
    }

    

    render() {
        let news;
        if (!this.state.error) {
            news = this.state.news.map(newAux => {
                console.log(newAux);
                return (
                    
                    <NewInstance 
                        key={newAux.id}
                        id={newAux.id}
                        title={newAux.title}
                        content={newAux.content}
                        image={newAux.image}
                        video={newAux.video}
                        date={newAux.date}

                        handleDelete={this.handleDelete}

                        handleToggleEdit={this.handleToggleEdit}
                        />
                );
            });
        }
        return (
            <div className="main-panel">
                <TopNav title={"Administración de noticias"}/>
                <div className="content">
                        <AllNews>
                            {news}
                        </AllNews>    
                        <CreateNew  handleCreate={this.handleCreate}/>
                        <EditNew/>
                </div>
            </div>
           
        );
    }
}

export default News;