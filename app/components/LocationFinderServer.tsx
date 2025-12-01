export default async function LocationFinderServer() {
  
        const locationResponse = await fetch('https://apip.cc/json');
        const locationData = await locationResponse.json();
        console.log(locationData);
        const locationInfo = locationData;

        const weatherResponse = await fetch(`https://www.7timer.info/bin/civil.php?lon=${locationData.Longitude}&lat=${locationData.Latitude}&ac=0&unit=metric&output=json&tzshift=0`)
        const weatherData = await weatherResponse.json();
        console.log(weatherData);
        const weatherInfo = weatherData;

    return (
        <>
            <h3 style={{marginTop: "2em", marginBottom: ".1em"}}>server component</h3>
            <h1 style={{marginTop: ".1em", marginBottom: ".5em"}}>Hello from {locationInfo?.City}, {locationInfo?.RegionName}</h1>
            <h2 style={{marginTop: ".1em"}}>Current Temperature: {weatherInfo.dataseries[0].temp2m} °C</h2>
        </>
    )
}