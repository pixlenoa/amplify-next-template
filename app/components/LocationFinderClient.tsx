'use client';

import { useEffect, useState } from "react"; 

export default function LocationFinderClient() {
    const [locationInfo, setLocationInfo] = useState({City: 'Loading...', RegionName: ''});
    const [temperature, setTemperature] = useState('Loading...');

    const getLocationInfo = async () => {
        const locationResponse = await fetch('https://apip.cc/json');
        const locationData = await locationResponse.json();
        console.log(locationData);
        setLocationInfo(locationData);

        const weatherResponse = await fetch(`https://www.7timer.info/bin/civil.php?lon=${locationData.Longitude}&lat=${locationData.Latitude}&ac=0&unit=metric&output=json&tzshift=0`);
        const weatherData = await weatherResponse.json();
                
        if (weatherData.dataseries && weatherData.dataseries.length > 0) {
            setTemperature(weatherData.dataseries[0].temp2m);
        }
        
        console.log(weatherData);
    }

    useEffect(() => {
        getLocationInfo();
    }, []);

    return (
        <>
            <h3 style={{marginBottom: ".1em"}}>client component</h3>
            <h1 style={{marginTop: ".1em", marginBottom: ".5em"}}>Hello from {locationInfo.City}, {locationInfo.RegionName}</h1>
            <h2 style={{marginTop: ".1em"}}>Current Temperature: {temperature} °C</h2>
        </>
    )

}