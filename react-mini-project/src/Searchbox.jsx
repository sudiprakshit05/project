import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import './Searchbox.css'

export default function Searchbox({updateinfo}) {
    const API_URL="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    let getweatherinfo = async () => {
        let responce=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`) // Fetch weather information for the entered city using the OpenWeatherMap API  
        let jsonResponce=await responce.json() // Parse the response as JSON 

        let result={
          city:city,
          temp:jsonResponce.main.temp,
          humidity:jsonResponce.main.humidity,
          pressure:jsonResponce.main.pressure,
          feelslike:jsonResponce.main.feels_like,
          temp_min:jsonResponce.main.temp_min,
          temp_max:jsonResponce.main.temp_max,
        }
        console.log(result)
        return result
    }
  const [city, setCity] = useState('') // State to hold the city name input by the user 
  let handleChange = (evt) => { // Handle changes in the city input field and update the city state accordingly 
    setCity(evt.target.value)
  }

  let handleSubmit = async (evt) => {
    evt.preventDefault()  // Prevent the default form submission behavior 
    console.log(city) 
    let info=await getweatherinfo() // Call the function to fetch weather information for the entered city
    updateinfo(info) // Update the weather information in the parent component using the provided updateinfo function
    setCity('') // Clear the city input field after fetching the weather information  
  }

  return (
    <div className='Searchbox'>
        <form onSubmit={handleSubmit}>
            <TextField id="filled-basic" className='inputbox' label="City name" variant="filled" required value={city} onChange={handleChange}/><br /><br />
            <Button variant="contained" endIcon={<SearchIcon />} type='submit'>Search</Button>
        </form>
    </div>
  )
}