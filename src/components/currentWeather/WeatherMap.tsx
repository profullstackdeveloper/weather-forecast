import { FC } from 'react';
import { MapContainer, MapContainerProps, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface WeatherMapProps extends MapContainerProps {
    location: { lat: number; lon: number; };
    apiKey: string;
    layer: string;
}

const WeatherMap: FC<WeatherMapProps> = ({ location, apiKey, layer='clouds_new', ...props }) => {
    return (
        location ? <MapContainer center={[location.lat, location.lon]} zoom={5} {...props}>
            <TileLayer url={`https://tile.openweathermap.org/map/${layer}/{z}/{x}/{y}.png?appid=${apiKey}`} />
            <TileLayer opacity={0.2} url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </MapContainer>
            : <div className='w-full min-h-[200px] bg-red-100'></div>
    );
};

export default WeatherMap;
