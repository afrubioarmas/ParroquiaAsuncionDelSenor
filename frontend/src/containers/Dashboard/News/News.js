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
        create:{title:'',content:'',image:null,video:'',date:moment()},
        edit:{toggle:false,id:'',title:'',content:'',image:null,video:'',date:moment(),previousUrl:''},
        news: [],
        error: false
    }

    handleCreate= (e) =>{
        e.preventDefault();
        //console.log(this.state.create.title);

        let data = new FormData();

        data.append('file', this.state.create.image);

        const config = { headers: {'Content-Type': 'multipart/form-data'}}

        axios.put('/upload',data,config)
            .then(response => {
                //handle success
                let data = new FormData();

                data.append('title', this.state.create.title);
                data.append('content',  this.state.create.content);
                data.append('image', response.data);
                data.append('video', '');
                data.append('date', moment().format('YYYY-MM-DD HH:mm'));


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
                        image:null,
                        video:edit.video,
                        date:edit.date,
                        previousUrl:edit.image}
                    });
              
    }

    handleEdit= (e)=>{
        e.preventDefault();
        var editAux=this.state.edit;
        
        if(editAux.image!=null){
            console.log("Uploadding file");
            let data = new FormData();

            data.append('file', editAux.image);

            const config = { headers: {'Content-Type': 'multipart/form-data'}}

            axios.put('/upload',data,config)
                .then(response => {
                    editAux.image=response.data;

                    let data = new FormData();

                    data.append('id',editAux.id);
                    data.append('title', editAux.title);
                    data.append('content', editAux.content);
                    data.append('image', editAux.image);
                    data.append('video',editAux.video);
                    data.append('date', moment().format('YYYY-MM-DD HH:mm'));


                    const config = { headers: {'Content-Type': 'multipart/form-data'}}

                    axios.post('/new',data,config)
                        .then(response => {
                            //handle success
                            this.setState({news:[],edit:{toggle:false,id:'',title:'',content:'',image:null,video:'',date:moment(),previousUrl:''}});
                            //console.log(response);
                        })
                        .catch(response => {
                            //handle error
                            //console.log(response);
                        });

                })
                .catch(response => {
                    //handle error
                    //console.log(response);
                });
        }else{
            console.log("No Uploadding file")
           
            editAux.image=editAux.previousUrl;
            console.log(editAux);
            let data = new FormData();

            data.append('id',editAux.id);
            data.append('title', editAux.title);
            data.append('content', editAux.content);
            data.append('image', editAux.image);
            data.append('video',editAux.video);
            data.append('date', moment().format('YYYY-MM-DD HH:mm'));


            const config = { headers: {'Content-Type': 'multipart/form-data'}}

            axios.post('/new',data,config)
                .then(response => {
                    //handle success
                    this.setState({news:[],edit:{toggle:false,id:'',title:'',content:'',image:null,video:'',date:moment(),previousUrl:''}});
                    //console.log(response);
                })
                .catch(response => {
                    //handle error
                    //console.log(response);
                });
        }
        
    }

    handleDelete = (id)=>(e) =>{
        e.preventDefault();
        

        axios.delete('/new/'+id)
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

    /* componentDidUpdate(){
        if(this.state.news.length===0){
        this.componentDidMount();
        }
    } */

    

    render() {
        let news;
        if (!this.state.error) {
            news = this.state.news.map(newAux => {
                //console.log(newAux);
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
                        <CreateNew handleCreate={this.handleCreate} create={this.state.create}/>
                        <EditNew  handleEdit={this.handleEdit} edit={this.state.edit}/>
                </div>
            </div>
           
        );
    }
}

export default News;