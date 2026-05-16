import Card from '@mui/material/Card';
import SunnyIcon from '@mui/icons-material/Sunny';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import './Infobox.css'
import Typography from '@mui/material/Typography';



export default function Infobox({info}) {
    const INITIAL_IMG="https://images.unsplash.com/photo-1672226405717-697c84f48f9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    

    return (
        <div className='Infobox'>
            <h3>Weather Information</h3>
            <div className='cardcontainer'>
            <Card sx={{ maxWidth: 400, width:"100%" }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={INITIAL_IMG}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.city}{
                        info.temp >25 ? <SunnyIcon sx={{ color: 'orange' }} /> : <SunnyIcon sx={{ color: 'blue' }} />
                    }
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                    <p>Temperature: {info.temp}°C</p> 
                    <p>Humidity: {info.humidity}%</p> 
                    <p>Pressure: {info.pressure} hPa</p> 
                    <p>Feels Like: {info.feelslike}°C</p> 
                    <p>Min Temp: {info.temp_min}°C</p> 
                    <p>Max Temp: {info.temp_max}°C</p> 
                </Typography>
            </CardContent>
            </Card>
            </div>
        </div>
    )
}