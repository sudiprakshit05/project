import Infobox from "./infobox"
import Searchbox from "./Searchbox"
import { useState } from "react"

export default function Weatherapp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city:"",
        temp:0,
        humidity:0,
        pressure:0,
        feelslike:0,
        temp_min:0,
        temp_max:0
    });

    let updateinfo=(newinfo)=>{  // Function to update the weather information state with the new information received from the Searchbox component    
        setWeatherInfo(newinfo) // Update the weather information state with the new information received from the Searchbox component 
    }

    return (
        <div>
            <h1>Nimbus</h1>
            <Searchbox updateinfo={updateinfo}/>           
            <Infobox info={weatherInfo} />
        </div>
    )
}