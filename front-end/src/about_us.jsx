import { useState, useEffect } from 'react'
import axios from 'axios'

const About_us= () => {
    const [about_us, setAbout_us] = useState([])

  
    const fetchAbout_us = () => {
    axios
      .get(`${import.meta.env.VITE_SERVER_HOSTNAME}/about_us`)
      .then(response => {
        setAbout_us(response.data)
      })
  }
  useEffect(() => {
    fetchAbout_us()
 }, [])

    return (
    <>
      <h1>{about_us.title}</h1>

      <p>{about_us.content}</p>
      <p> {about_us.content}</p>
      
      <img src={about_us.picture_url} alt="Bhavya Sharma " style={{width:"100 px", height:"auto"}} />
    
    </>
  )
}


export default About_us
