import { useEffect, useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Home() {
  const [datas, setDatas] = useState([])
  const [loader, setLoader] = useState(false)
  const [pageLocation, setPageLocation] = useState(1)
  const num = 10
  const pages = datas && datas.length / num

  const end = num * pageLocation
  const start = end - num
  const data = datas.slice(start, end)

  function nextPage(id) {
    setPageLocation(id)
  }

  useEffect(()=> {
    setLoader(true)
    axios.get('https://jsonplaceholder.typicode.com/posts').then((data) => {
      setDatas(data.data)
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
    <div className='home'>
      
      <div className="home-data">
        {
          data.map(item => {
            return (
              <Link key={item.id} to={`about/${item.id}`}>
                <div className='card'>
                  <h1>{item.id}</h1>
                  <p>{item.title}</p>
                </div>  
              </Link>
            )
          })
        }
      </div>

      <div className="btns">
        {
          Array.from({length: pages}, (_, index) => index + 1).map((item)=> <button key={item} onClick={() => nextPage(item)}>{item}</button>)
        }
      </div>
    </div>
  )
}

export default Home