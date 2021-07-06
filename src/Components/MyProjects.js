import axios from 'axios'
import React, {useState, useEffect} from 'react'

const MyProjects = () => {
  const [projects, setProjects] = useState([])

  useEffect(()=>{
    getProjects()
  },[])

  const getProjects = async () => {
    try {
      let res = await axios.get('https://api.github.com/users/landonHickman/starred')
      setProjects(res.data)
    } catch(err){
      alert('err on axios')
      console.log(err)
    }
  }

  const renderProjects = () => {
    return projects.map(p => {
      return (
        <div key={p.id}>
          <h1>{p.name}</h1>
          <p>{p.owner.login}</p>
        </div>
      )
    })
  }
  return (
    <div>
      <h1>Projects Page</h1>
      {renderProjects()}
    </div>
  )
}

export default MyProjects