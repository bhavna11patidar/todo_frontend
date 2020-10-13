import axios from 'axios';

export default class Service{
 
    addData=(payload)=>{
        return axios.post('http://localhost:8080/save',payload)
           .then(res=>{

           }).catch(err=>{
               console.log(err);
           })
    }

    getData=()=>{
        return axios.get('http://localhost:8080/view')  
        .then(response => { 
            //console.log(response); 
            if(response.status==200){
             return response.data;
            }
        })  
    }

    deleteData=(id)=>{
        return axios.get('http://localhost:8080/delete/'+id)  
        .then(response => { 
            //console.log(response); 
            if(response.status==200){
             return response.data;
            }
        }) 
    }

    getSingleData=(id)=>{
        return axios.get('http://localhost:8080/edit/'+id)  
        .then(response => { 
            //console.log(response); 
            if(response.status==200){
             return response.data;
            }
        })  
    }
    updateData=(data)=>{
        return axios.post('http://localhost:8080/update-task',data)
        .then(res=>{

        }).catch(err=>{
            console.log(err);
        })
    }



}