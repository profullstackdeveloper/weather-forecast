import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { City } from "../utils/types";

interface AppContextValues {
    selectedCity: City;
    setSelectedCity: Dispatch<SetStateAction<City>>;
}

export const AppContext = createContext({} as AppContextValues);

export default function AppContextProvider({ children }: { children: ReactNode }) {

    const [selectedCity, setSelectedCity] = useState<City>({} as City);

    return (
        <AppContext.Provider
            value={{
                selectedCity,
                setSelectedCity
            }}
        >
            {
                children
            }
        </AppContext.Provider>
    )
}