import dayjs from "dayjs";
import { CurrentWeatherComponentProps } from "../../utils/types";
import WeatherMap from "./WeatherMap";
import { MenuItem, Select } from "@mui/material";
import { weatherMapLayers } from "../../utils/constants";
import { useState } from "react";

export default function CurrentWeather({ countryCode, weatherData, location }: CurrentWeatherComponentProps) {

    const [layer, setLayer] = useState<string>('');

    const localTime = dayjs((weatherData.dt) * 1000).format('MMM DD YYYY, hh:mma');

    return (
        <div className="w-full flex md:flex-row flex-col justify-between gap-4">
            <div className="flex-[1]">
                <div>
                    <p className="text-[#eb6e4b] text-[14px]">{localTime}</p>
                    <p className="font-bold text-[25px]">{`${location.name}, ${countryCode}`}</p>
                </div>
                <div>
                    <div className="flex items-center">
                        <img className="w-[50px] h-[50px]" src={process.env.REACT_APP_BASE_ICON_URL + `${weatherData.weather[0].icon}@2x.png`} alt="weather condition" />
                        <span className="text-[36px] font-medium">{(weatherData.main.temp - 273.15).toFixed(2)}°C</span>
                    </div>
                    <div>
                        <div className="flex gap-1 font-semibold text-[14px]">
                            <p>
                                {`Feels like ${(weatherData.main.feels_like - 273.15).toFixed(2)}°C.`}
                            </p>
                            <p className="capitalize">
                                {`${weatherData.weather[0].description}.`}
                            </p>
                        </div>
                        <div className="border-l border-l-[#eb6e4b] pl-4 flex flex-wrap gap-[10px] text-[#48484ac] text-[14px]">
                            <p>{weatherData.wind.speed}m/s</p>
                            <p>{weatherData.main.pressure}hPa</p>
                            <p>Humidity: {weatherData.main.humidity}%</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-col gap-3">
                <Select className="bg-white" placeholder="Choose Type" onChange={(e) => setLayer(e.target.value as string)}>
                    {
                        weatherMapLayers.map((layer, index) => {
                            return (
                                <MenuItem value={layer.value} key={index}>{layer.label}</MenuItem>
                            )
                        })
                    }
                </Select>
                <WeatherMap
                    location={location}
                    apiKey={process.env.REACT_APP_WEATHER_API_KEY || ''}
                    layer={layer}
                    className='flex-1 min-h-[200px] w-full'
                />
            </div>
        </div>
    )
}