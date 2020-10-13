import React, {useEffect, useState, useContext} from 'react'
import Service from './Service';
import {Consumer} from './Context';
export default function Edit(props) {
    const [formdata,setformdata]=useState({id:"",name:"",title:"",duration:"",description:""})
    const [task, setlist]=useContext(Consumer)
    useEffect(()=>{
        async function fetchData()
        {
        const newtask=await new Service().getSingleData(props.match.params.id);
        //console.log(newtask);
        setformdata({id:newtask._id,name:newtask.name,title:newtask.title,duration:newtask.duration,description:newtask.description});
    }
    fetchData();
    },[])
    const oninput=(e)=>{
        setformdata({...formdata,[e.target.name]:e.target.value})
    }
    const updateList=async()=>{
        // setlist(task=>[...task, {id:id, ...formdata}])
         //setlist({type:"ADD_TASK", payload: formdata})
         //setformdata({...formdata,name:"",title:"",duration:"",desc:""})
         await new Service().updateData(formdata);
        const newTask=await new Service().getData();
        //console.log(newTask);
        setlist({type:"VIEW_TASK", payload: newTask})
     }
    return (
        <div className="container">
            <h1 className="text-center my-5 text-info" >Edit Task List</h1>
            <div className="form-group">
                <label>Name:</label>
                <input className="form-control" type="text" name="name" onChange={oninput} value={formdata.name}></input>
            </div>
            <div className="form-group">
                <label>Task Title:</label>
                <input className="form-control" type="text" name="title" onChange={oninput} value={formdata.title}></input>
            </div>
            <div className="form-group">
                <label>Duration:</label>
                <input className="form-control" type="text" name="duration" onChange={oninput} value={formdata.duration}></input>
            </div>
            <div className="form-group">
                <label>Task Description:</label>
                <input className="form-control" type="text" name="description" onChange={oninput} value={formdata.description}></input>
                <input className="form-control" type="hidden" name="id" value={formdata.id}></input>
            
            </div>
            <div className="text-center">
            <button className="btn btn-info" onClick={updateList}>Update Task</button>
            </div>
        </div>
    )
}
