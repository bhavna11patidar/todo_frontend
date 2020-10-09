import React,{usetask, createContext, useReducer, useEffect} from 'react'
import axios from 'axios';
export const Consumer=createContext();

const initialtask = []; 
const reducer=(task, action)=>{
    console.log(task);
    switch(action.type){
        case "DELETE_TASK":
            return task.filter((el)=>{return el.id==action.payload})
        case 'OnSuccess':  
            return  action.payload  
        case 'OnFailure':  
            return []
        case "VIEW_TASK":
            return task=action.payload
        default:
            return task;
    }
}


export function Provider(props) {

    /*initialtask={
        'success_msg':"",
        "failure_msg":"",
        task:[],
    }
    */
    const [task, setlist]=useReducer(reducer,initialtask); 
    return (
        <Consumer.Provider value={[task,setlist]}>
            {props.children}
        </Consumer.Provider>
    )
}