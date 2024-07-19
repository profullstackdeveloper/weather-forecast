import { useEffect, useState } from "react";
import CurrentWeather from "../../components/CurrentWeather";
import { useGetWeatherByCoordsQuery } from "../../store/location";
import { skipToken } from "@reduxjs/toolkit/query";

export default function DashboardPage() {

    const [posCoord, setPosCoord] = useState<{ lat: number; lon: number }>({} as any);
    const { data } = useGetWeatherByCoordsQuery(posCoord.lat || posCoord.lon ? { appid: process.env.REACT_APP_WEATHER_API_KEY ?? '', lat: posCoord.lat, lon: posCoord.lon } : skipToken)

    const getLocation = async () => {
        console.log('called!')
        const success = (position: any) => {
            console.log('position: ', position)
        }
        const result = await navigator.permissions.query({ name: "geolocation" })
        navigator.geolocation.watchPosition((position) => {
            console.log('position: ', position.coords.latitude)
        }, (error) => {
            console.log('error: ', error)
        })
        console.log('permission result: ', result)
        
    }

    useEffect(() => {
        getLocation();
    }, []);

    return (
        <div className="w-full flex justify-center">
            <div className="w-[900px] flex flex-col gap-4 py-[30px]">
                <div className="flex gap-4">
                    <CurrentWeather></CurrentWeather>
                </div>
            </div>
        </div>
    )
}