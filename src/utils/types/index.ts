import { Dispatch, SetStateAction } from "react";

export enum ForecastUnit {
    STANDARD = 'standard',
    METRIC = 'metric',
    IMPERIAL = 'imperial'
}
export enum MODE {
    XML = 'xml',
}

export interface GetWeatherByLocationIdRequest {
    id: number;
    appid: string;
}

export interface GetWeatherByCoordsResponse {
    base: string;
    clouds: {
        all: number;
    };
    cod: number;
    coord: {
        lon: number;
        lat: number;
    };
    dt: number;
    id: number;
    main: {
        feels_like: number;
        grnd_level: number;
        humidity: number;
        pressure: number;
        sea_level: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    };
    name: string;
    sys: {
        country: string;
        id: number;
        sunrise: number;
        sunset: number;
        type: number;
    };
    timezone: number;
    visibility: number;
    weather: Array<{
        description: string;
        icon: string;
        id: number;
        main: string;
    }>;
    wind: {
        deg: number;
        gust: number;
        speed: number;
    }
}

export interface GetWeatherByCoordsRequest {
    lat: number;
    lon: number;
    appid: string;
}

export interface GetForecastByCoordsRequest {
    lat: number;
    lon: number;
    appid: string;
    units?: ForecastUnit;
    mode?: MODE;
    cnt?: number;
    lang?: string;
}

export interface ForecastListDTO {
    dt: number,
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        sea_level: number,
        grnd_level: number,
        humidity: number,
        temp_kf: number
    },
    weather: Array<{
        id: number,
        main: string,
        description: string,
        icon: string
    }>,
    clouds: {
        all: number
    },
    wind: {
        speed: number,
        deg: number,
        gust: number
    },
    visibility: number;
    pop: number;
    rain: {
        "3h": number;
    },
    sys: {
        pod: string;
    },
    dt_txt: string;
}

export interface GetForecastByCoordsResponse {
    cod: string;
    message: number;
    cnt: number;
    list: Array<ForecastListDTO>;
    city: {
        id: number;
        name: string;
        coord: {
            lat: number;
            lon: number;
        };
        country: string;
        population: number;
        timezone: number;
        sunrise: number;
        sunset: number;
    }
}

export interface GetCitiesBySearchTermRequest {
    search: string;
}

export interface GetCoordsByNameRequest {
    q: string;
    appid: string;
    limit?: number;
}

export interface GetCoordsByNameResponse {
    name: string;
    country: string;
    lon: number;
    lat: number;
    state: string;
}

export interface GetLocationsByCoordsRequest {
    lat: number;
    lon: number;
    appid: string;
    limit?: number;
}

export interface GetLocationsByCoordsResponse {
    country: string;
    lat: number;
    local_names: {
        en: string;
    };
    lon: number;
    name: string;
    state: string;
}

export interface CurrentWeatherComponentProps {
    countryCode: string;
    weatherData: GetWeatherByCoordsResponse;
    location: {
        name: string;
        lat: number;
        lon: number;
    }
}

export interface RowCardComponentProps {
    timezone: number,
    maxTemp: number,
    minTemp: number,
    dt: number,
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        sea_level: number,
        grnd_level: number,
        humidity: number,
        temp_kf: number
    },
    weather: Array<{
        id: number,
        main: string,
        description: string,
        icon: string
    }>,
    clouds: {
        all: number
    },
    wind: {
        speed: number,
        deg: number,
        gust: number
    },
    visibility: number;
    pop: number;
    rain: {
        "3h": number;
    },
    sys: {
        pod: string;
    },
    dt_txt: string;
}

export interface ForecastComponentProps {
    data: GetForecastByCoordsResponse
}

export type City = {
    name: string;
    lat: number;
    lon: number;
    country: string;
}

export interface CityMenuComponentProps {
    cities: City[],
    showMenu: boolean;
    setShowMenu: Dispatch<SetStateAction<boolean>>;
}