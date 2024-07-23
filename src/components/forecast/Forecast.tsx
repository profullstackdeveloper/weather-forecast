import { ForecastComponentProps, ForecastListDTO } from "../../utils/types";
import { RowCard } from "../rowCard/RowCard";
import { filterData } from "../../utils";
import SimpleChart from "./BarChart";

export default function Forecast({ data }: ForecastComponentProps) {

    const chartData = filterData<ForecastListDTO>(data.list).map((item) => ({ maxTemp: item.maxTemp, minTemp: item.minTemp, date: item.date }));

    return (
        <div className="w-full flex md:flex-row flex-col-reverse gap-3">
            <div className="flex-1">
                <SimpleChart
                    data={{
                        labels: chartData.map((row) => new Date(row.date).getDate() + 1),
                        datasets: [
                            {
                                label: 'Max Temperature',
                                data: chartData.map((row) => row.maxTemp - 273.15),
                                backgroundColor: '#d9ca7ea0',
                            },
                            {
                                label: 'Min Temperature',
                                data: chartData.map((row) => row.minTemp - 273.15),
                                backgroundColor: '#7e9ed99f'
                            }
                        ]
                    }}
                    options={{
                        color: 'red',
                        scales: {
                            x: {
                                grid: {
                                    color: 'black'
                                },
                                ticks: {
                                    color: 'black',
                                }
                            },
                            y: {
                                grid: {
                                    color: 'black'
                                },
                                ticks: {
                                    color: 'black',
                                    callback: (tickValue) => tickValue + ' °C'
                                }
                            }
                        }
                    }}
                />
            </div>
            <div className="md:w-[500px] w-full flex-1">
                <p className="text-[18px] font-bold">5-day forecast</p>
                {
                    data && data.list.length > 0 && filterData<ForecastListDTO>(data.list).map((item, index) => {
                        return (
                            <RowCard {...item} timezone={data.city.timezone} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}