'use client';

import { useEffect, useState } from "react"; 

export default function LocationFinderClient() {
    const [locationInfo, setLocationInfo] = useState(1);

    const getLocationInfo = async () => {
        const response = await fetch('https://apip.cc/json');
        const locationData = await response.json();
        console.log(locationData);
        setLocationInfo(locationData);
    }

    useEffect(() => {
        getLocationInfo();
    })

    return (
        <>
            <h1>Hello from {locationInfo?.City} - client component</h1>
        </>
    )
}