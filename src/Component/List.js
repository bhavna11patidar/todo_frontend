import React,{useContext} from 'react'
import {Consumer} from './Context';
export default function List(props) {
    const [task,setlist]=useContext(Consumer)
    
    const ondelete=(id)=>{
        setlist(task.filter((item)=>item.id!==id));
    }
    return (    
                <tr key={props.data.id}>
                    <td>{props.data.name}</td>
                    <td>{props.data.title}</td>
                    <td>{props.data.duration}</td>
                    <td>{props.data.description}</td>
                    <td><button className="btn btn-danger m-2" onClick={()=>{ondelete(props.data.id)}}>delete</button></td>
                </tr>
    )
}
