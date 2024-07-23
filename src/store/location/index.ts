import { GetCoordsByNameRequest, GetCoordsByNameResponse, GetLocationsByCoordsRequest, GetLocationsByCoordsResponse } from "../../utils/types";
import { basicApi } from "../basicApi";

const apiWithTag = basicApi.enhanceEndpoints({
    addTagTypes: ['Location']
});

const locationApi = apiWithTag.injectEndpoints({
    endpoints: (build) => ({
        getCoordsByName: build.query<GetCoordsByNameResponse[], GetCoordsByNameRequest>({
            query: (params) => ({
                url: '/geo/1.0/direct',
                params
            })
        }),
        getLocationByCoords: build.query<GetLocationsByCoordsResponse[], GetLocationsByCoordsRequest>({
            query: (params) => ({
                url: '/geo/1.0/reverse',
                params
            })
        })
    })
});

export const { useGetLocationByCoordsQuery, useLazyGetLocationByCoordsQuery, useGetCoordsByNameQuery, useLazyGetCoordsByNameQuery } = locationApi