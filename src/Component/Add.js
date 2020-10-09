import React,{useState,useContext} from 'react'
import {Consumer} from './Context'
import axios from 'axios';
import Service from './Service';
export default function Add() {
    const [task,setlist]=useContext(Consumer)
    const [formdata,setformdata]=useState({name:"",title:"",duration:"",description:""})
    
    const oninput=(e)=>{
        setformdata({...formdata,[e.target.name]:e.target.value})
    }

    const addlist=async()=>{
       // setlist(task=>[...task, {id:id, ...formdata}])
        //setlist({type:"ADD_TASK", payload: formdata})
        setformdata({...formdata,name:"",title:"",duration:"",desc:""})
        await new Service().addData(formdata);
       const newTask=await new Service().getData();
       console.log(newTask);
       setlist({type:"VIEW_TASK", payload: newTask})
    }
    return (
        <div className="container">
            <h1 className="text-center my-5 text-info" >Add Task List</h1>
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
            </div>
            <div className="text-center">
            <button className="btn btn-info" onClick={addlist}>Add Task</button>
            </div>
        </div>
    )
}
