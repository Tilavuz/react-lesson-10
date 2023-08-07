import { useParams } from 'react-router-dom'
import './About.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

function About() {

  const { id } = useParams()
  const [data, setData] = useState({})
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    setLoader(true)
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((data)=> {
      setData(data.data)
      setLoader(false)
    })
  }, [])

  if(loader) {
    return (
      <div className="loader">
        <div class="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    )
  }


  return (
    <div className="about">
      <h1>{data.id}</h1>
      <p>{data.body}</p>
    </div>
  )
}

export default About