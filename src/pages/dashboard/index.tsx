import { useContext, useEffect, useState } from "react";
import CurrentWeather from "../../components/currentWeather/CurrentWeather";
import { skipToken } from "@reduxjs/toolkit/query";
import { useGetForecastByCoordsQuery, useGetWeatherByCoordsQuery } from "../../store/weather";
import { useGetLocationByCoordsQuery } from "../../store/location";
import Forecast from "../../components/forecast/Forecast";
import { AppContext } from "../../context/AppContext";

export default function DashboardPage() {

    const [posCoord, setPosCoord] = useState<{ lat: number; lon: number }>({} as any);
    const { selectedCity } = useContext(AppContext);

    const reqData = posCoord.lat || posCoord.lon ? { lat: posCoord.lat, lon: posCoord.lon, appid: process.env.REACT_APP_WEATHER_API_KEY ?? '' }
        : skipToken

    const { data: weatherData } = useGetWeatherByCoordsQuery(reqData);
    const { data: locationData } = useGetLocationByCoordsQuery(reqData)
    const { data: forecastData } = useGetForecastByCoordsQuery(reqData);

    const getWeather = async () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setPosCoord({
                lat: position.coords.latitude,
                lon: position.coords.longitude
            })
        }, (error) => {
            console.log('error: ', error)
        })
    }

    useEffect(() => {
        getWeather();
    }, []);

    useEffect(() => {
        if (selectedCity.name) {
            setPosCoord({ lat: selectedCity.lat, lon: selectedCity.lon });
        }
    }, [selectedCity])

    return (
        <div className="w-full flex justify-center p-[20px] backdrop-blur-sm backdrop-brightness-[0.85]">
            <div className="lg:w-[900px] w-full flex flex-col gap-4 py-[30px]">
                {
                    weatherData && locationData && <CurrentWeather
                        countryCode={weatherData?.sys.country}
                        location={{name: locationData[0].name, ...posCoord}}
                        weatherData={weatherData}
                    ></CurrentWeather>
                }
                <div className="w-full flex md:justify-end justify-start">
                    {
                        forecastData && <Forecast data={forecastData} />
                    }
                </div>
            </div>
        </div>
    )
}