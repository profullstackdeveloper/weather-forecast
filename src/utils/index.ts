export const filterData = <T>(list: Array<T>) => {
    const dailyData: any = {};
    const result: any[] = [];

    list.forEach((item: any) => {
        const date = item.dt_txt.split(" ")[0];
        if (!dailyData[date]) {
            dailyData[date] = {
                maxTemps: [],
                minTemps: [],
                ninepmData: null,
                latestData: null,
            };
        }

        dailyData[date].maxTemps.push(item.main.temp_max);
        dailyData[date].minTemps.push(item.main.temp_min);

        if (item.dt_txt.endsWith(`06:00:00`)) {
            dailyData[date].ninepmData = item;
        }

        dailyData[date].latestData = item;
    });

    Object.keys(dailyData).forEach((date) => {
        const dayData = dailyData[date];
        const maxTemp = Math.max(...dayData.maxTemps);
        const minTemp = Math.min(...dayData.minTemps)

        const weatherData = dayData.ninepmData || dayData.latestData;

        result.push({
            date,
            maxTemp,
            minTemp,
            ...weatherData,
        });
    });
    return result;
}