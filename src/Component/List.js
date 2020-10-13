import React,{useContext} from 'react'
import {Consumer} from './Context';
import Service from './Service';
import {Link} from 'react-router-dom';
export default function List(props) {
    const [task,setlist]=useContext(Consumer)
    
    const ondelete=async(id)=>{
       // setlist(task.filter((item)=>item.id!==id));
      // console.log(id);
        await  new Service().deleteData(id)
        const newTask=await new Service().getData();
        //console.log(newTask);
        setlist({type:"VIEW_TASK", payload: newTask})
    }
    return (    
                <tr key={props.data.id}>
                    <td>{props.data.name}</td>
                    <td>{props.data.title}</td>
                    <td>{props.data.duration}</td>
                    <td>{props.data.description}</td>
                    <td><button className="btn btn-danger m-2" onClick={()=>{ondelete(props.data._id)}}>delete</button>
                    <Link className="btn btn-success m-2" to={"/edit/"+props.data._id}>Edit</Link>
                    </td>
                </tr>
    )
}
