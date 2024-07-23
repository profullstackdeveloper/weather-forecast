import { ClickAwayListener } from "@mui/material";
import { City, CityMenuComponentProps } from "../../utils/types";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export function CityMenu({ cities, showMenu, setShowMenu }: CityMenuComponentProps) {

    const { setSelectedCity } = useContext(AppContext);

    const handleCityClick = (city: City) => {
        setSelectedCity(city);
        setShowMenu(false);
    }

    return (
        showMenu ? <ClickAwayListener onClickAway={() => { setShowMenu(false) }}>
            <div className="absolute w-full bg-green-100 overflow-auto z-10 rounded-[10px] mt-1">
                <div className="w-full p-3 flex flex-col gap-1 max-h-[200px] overflow-auto">
                    {
                        cities && cities.length > 0 && cities.map((city, index) => {
                            return (
                                <div className="flex gap-1 cursor-pointer" key={index} onClick={() => handleCityClick(city)}>
                                    <p>{city.name},</p>
                                    <p>{city.country}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </ClickAwayListener> : null
    )
}