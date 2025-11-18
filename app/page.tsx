import "./../app/app.css";
import ToDo from "./components/ToDo";
import LocationFinderServer from "./components/LocationFinderServer"; 
import LocationFinderClient from "./components/LocationFinderClient";
//import LocationFinderClient from "./components/LocationFinderClient";  
 
export default function App() {
    
    return (
        <main>
            <LocationFinderClient/>
            <LocationFinderServer/>
            <ToDo />
        </main>
    )

}