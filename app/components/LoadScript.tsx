import { LoadScript } from '@react-google-maps/api';

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "";

const LoadMapScript = ({ children }: { children: React.ReactNode }) => {

    return (
        <LoadScript
            googleMapsApiKey={apiKey}
        >
            {children}
        </LoadScript>
    )
}

export default LoadMapScript;

