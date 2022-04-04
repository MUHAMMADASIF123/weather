import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState('lahore');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperical&appid=ef690ce4d6cd63ba9faf8511985c1e21`;

  const searchLocation = (event) => {
      axios
        .get(url)
        .then((res) => {
          setData(res.data);
          // console.log(res.data);
        })
        .catch((err) => {
          // console.log(err);
        });
        // setLocation('')
    
  };
  useEffect(()=>{
    searchLocation()
  },[])
  return (
      <div className="container">
        <div className="search">
          <input type='text' value={location}
          onChange={(event)=>setLocation(event.target.value)}
          placeholder="Enter location"
          onKeyPress={searchLocation}
          />
        </div>
      <div className="top">
        <div className="location">
          {/* <p>{data.name}</p> */}
          <p className="bold">{data.name}</p>
        </div>
        <div className="temp">
          {data.main ? <p className="bold">{data.main.temp.toFixed()}°F</p>:null}
          {/* {data.main ? <p className="bold">({data.main.temp.toFixed()})</p>:null} */}

        </div>
        <div className="description">
          {data.weather ? <p className="bold">{data.weather[0].main}</p>:null}
      
        </div>
      </div>
      { data.name !==undefined &&
      <div className="bottom">
        <div className="feels">
         {data.main ? <p className="bold">{data.main.feels_like.toFixed()}°F</p>:null}
          
              </div>
        <div className="humidity">
          {data.main ? <p className="bold">{data.main.humidity}%</p>:null}
 
        </div>
        <div className="wind">
          {data.main ? <p className="bold">{data.wind.speed.toFixed()}MPH</p>:null}
        </div>
      </div>
      }
    </div>
  );
}

export default Home;
