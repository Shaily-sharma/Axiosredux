 import axios from 'axios'

 export const get =(data)=>{
    return{
        type:'GET_DATA',
        payload:data
    }
}

export const getRecord=()=>{
    return(dispatch)=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>
        dispatch(get(res.data))).catch((err)=>{
            console.log(err);
        })
    }
}
