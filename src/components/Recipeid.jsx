import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import TrendingSlider from './TrendingSlider'
import { useParams } from 'react-router-dom'

const Recipeid = () => {
  const {idMeal}=useParams()
  const [data, setdata] = useState([])

  useEffect(() => {
    const fetchData = async ()=>{
      const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      
      const data = await api.json();
      console.log(data.meals)
      setdata(data.meals[0])
    }
    fetchData()
  }, [idMeal])


  return (
    <>
    <Navbar/>
    <div style={{
      width:'90%',
      margin:'auto',
      textAlign:'center'
    }}>
      <h1>{data.strMeal}</h1>
      <div
      style={{
        display:'flex'
      }}
      >


     <div className="img" style={{width:'30%'}}>
      <img src={data.strMealThumb} alt="" style={{ width:'18rem'}}/>
     </div>

     <div className="content" style={{width:'60%'}}>
      <button className="btn">Ingradient</button>
      <button className="btn">Instructions</button>
     </div>
      </div>

   </div>
    <TrendingSlider/>


    </>
  )
}


export default Recipeid