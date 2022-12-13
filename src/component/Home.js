import React, { useEffect } from 'react'

import {useSelector,useDispatch} from 'react-redux'
import {getRecord} from '../action/index'

const Home = () => {
  // const [data,setdata]=useState([])
  const dispatch=useDispatch()
  const getData=useSelector((state)=>
  state.datareducer.data)
  console.log(getData);

  useEffect(()=>{
    dispatch(getRecord())
  },[dispatch])
  return (
    <div>
      {getData.map((e)=>{
        return(
          <div>
          <p>Id : {e.id}</p>
          <p>Name: {e.name}</p>
          </div>
        )
      })}
      
    </div>
  )
}

export default Home;

