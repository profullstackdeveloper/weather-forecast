import { useRef, useState, KeyboardEvent } from "react"
import { useGetCoordsByNameQuery } from "../../store/location"
import { skipToken } from "@reduxjs/toolkit/query";
import { CityMenu } from "./CityMenu";

export default function SearchBar() {

    const [cityName, setCityName] = useState<string>('');
    const [showMenu, setShowMenu] = useState<boolean>(false);

    const { data: cityData } = useGetCoordsByNameQuery(cityName ? { q: cityName, appid: process.env.REACT_APP_WEATHER_API_KEY || '' } : skipToken);

    const searchInputRef = useRef<HTMLInputElement>(null);

    const handleSearch = () => {
        if (searchInputRef.current) {
            setShowMenu(true);
            setCityName(searchInputRef.current.value);
        }
    }

    const handleEnterKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && searchInputRef.current) {
            setShowMenu(true);
            setCityName(searchInputRef.current.value);
        }
    }

    return (
        <div className="relative">
            <div>
                <input 
                    onKeyDown={handleEnterKeyDown} 
                    ref={searchInputRef} 
                    placeholder="Search City" 
                    className="p-2 border border-solid border-white rounded-tl-[8px] rounded-bl-[8px] outline-none" 
                ></input>
                <button 
                    onClick={handleSearch} 
                    className="p-2 border border-solid border-red-400 bg-red-400 rounded-tr-[8px] rounded-br-[8px] hover:bg-red-300 hover:border-red-300"
                >Search</button>
            </div>
            {
                cityData && cityName && <CityMenu cities={cityData} showMenu={showMenu} setShowMenu={setShowMenu} />
            }
        </div>
    )
}