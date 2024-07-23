import dayjs from "dayjs";
import { Container } from "./style";
import { RowCardComponentProps } from "../../utils/types";

export function RowCard({ timezone, weather, dt_txt, maxTemp, minTemp }: RowCardComponentProps) {
    const localTime = dayjs(new Date(new Date(dt_txt).getTime())).format('ddd, MMM DD')
    return (
        <Container>
            <p className="text-[14px]">{localTime}</p>
            <div className="flex gap-4 items-center basis-[60%] justify-between">
                <div className="flex gap-4 items-center">
                    <img src={process.env.REACT_APP_BASE_ICON_URL + `${weather[0].icon}@2x.png`} className="w-[50px] h-[50px]" alt="row card" />
                    <p className="text-[14px]">{`${(maxTemp - 273.15).toFixed(2)} / ${(minTemp - 273.15).toFixed(2)}°C`}</p>
                </div>
                <div className="w-auto text-[#48484a] text-[10px] text-right">
                    {
                        weather[0].description
                    }
                </div>
            </div>
        </Container>
    )
}