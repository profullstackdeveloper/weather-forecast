import { GetWeatherByCoordsRequest, GetWeatherByLocationIdRequest } from "../../utils/types";
import { basicApi } from "../basicApi";

const apiWithTag = basicApi.enhanceEndpoints({
    addTagTypes: ['Location']
});

const locationApi = apiWithTag.injectEndpoints({
    endpoints: (build) => ({
        getWeatherByLocationId: build.query<any, GetWeatherByLocationIdRequest>({
            query: (params) => ({
                url: '/weather',
                params
            })
        })
    })
});

const coordApi = apiWithTag.injectEndpoints({
    endpoints: (build) => ({
        getWeatherByCoords: build.query<any, GetWeatherByCoordsRequest>({
            query: (params) => ({
                url: '/onecall',
                params
            })
        })
    })
})

export const { useGetWeatherByLocationIdQuery, useLazyGetWeatherByLocationIdQuery } = locationApi

export const { useGetWeatherByCoordsQuery, useLazyGetWeatherByCoordsQuery } = coordApi;