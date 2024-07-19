export type Exclude = {
    CURRENT: 'current',
    MINUTELY: 'minutely',
    HOURLY: 'hourly',
    DAILY: 'daily',
    ALERTS: 'alerts'
}

export interface GetWeatherByLocationIdRequest {
    id: number;
    appid: string;
}

export interface GetWeatherByCoordsRequest {
    lat: number;
    lon: number;
    appid: string;
    exclude?: Exclude;
}