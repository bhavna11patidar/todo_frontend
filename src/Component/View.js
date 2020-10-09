import React,{useContext, useEffect, useState} from 'react'
import {Consumer} from './Context';
import List from './List';
import Service from './Service';
export default  function MoviesList() {
    const [task, setlist]=useContext(Consumer)
    if(task.length === 0){
        new Service().getData().then(res => {
            //console.log('res', res)
            setlist({type:"VIEW_TASK", payload:res});
        });
   
    }
    return (
        <div className="container ">
           <h1 className="text-center text-primary text-info my-3">Task list</h1>
           <div className="row">
           <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Duration</th>
                    <th>Description</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
               {task.map((data)=>(
                   <List data={data} ></List>
                ))}
            </tbody>
            </table>
           </div>
        </div>
    )
}
