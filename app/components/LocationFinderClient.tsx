'use client';

import { useEffect, useState } from "react"; 

export default function LocationFinderClient() {
    const [locationInfo, setLocationInfo] = useState({City: 'N/A'});
    const [temperature, setTemperature] = useState('N/A');

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
            <h1>Hello from {locationInfo.City} - client component</h1>
            <h2>Current Temperature: {temperature} °C</h2>
        </>
    )

}