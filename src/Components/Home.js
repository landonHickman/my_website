import axios from 'axios'
import React, {useState, useEffect} from 'react'

const Home = () => {
  const [things, setThings]=useState([])

  useEffect(()=>{
    getThings()
  },[])

  const getThings = async () => {
    try{
      let res = await axios.get('https://heroku-sum21.herokuapp.com/api/things')
      console.log(res)
      setThings(res.data)
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div>
      <h1>Home</h1>
      {things && things.length === 0 && <p>0 things</p>}
      {things && things.map(t=> (
      <p>{t.name}</p>))}
    </div>
  )
}

export default Home