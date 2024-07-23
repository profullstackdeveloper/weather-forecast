import { GetForecastByCoordsRequest, GetForecastByCoordsResponse, GetWeatherByCoordsRequest, GetWeatherByCoordsResponse, GetWeatherByLocationIdRequest } from "../../utils/types";
import { basicApi } from "../basicApi";

const apiWithTag = basicApi.enhanceEndpoints({
    addTagTypes: ['Weather']
});

const weatherApi = apiWithTag.injectEndpoints({
    endpoints: (build) => ({
        getWeatherByLocationId: build.query<any, GetWeatherByLocationIdRequest>({
            query: (params) => ({
                url: '/data/3.0/',
                params
            })
        }),
        getWeatherByCoords: build.query<GetWeatherByCoordsResponse, GetWeatherByCoordsRequest>({
            query: (params) => ({
                url: '/data/2.5/weather',
                params
            })
        }),
        getForecastByCoords: build.query<GetForecastByCoordsResponse, GetForecastByCoordsRequest>({
            query: (params) => ({
                url: '/data/2.5/forecast',
                params
            })
        })
    })
});

export const { 
    useGetWeatherByLocationIdQuery, 
    useLazyGetWeatherByLocationIdQuery, 
    useGetWeatherByCoordsQuery, 
    useLazyGetWeatherByCoordsQuery,
    useGetForecastByCoordsQuery,
    useLazyGetForecastByCoordsQuery
} = weatherApi