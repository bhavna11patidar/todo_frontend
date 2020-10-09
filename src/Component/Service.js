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



}