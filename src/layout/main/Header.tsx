import SearchBar from "../../components/searchBar/SearchBar";

export function MainHeader () {
    return (
        <div className="w-full flex-grow-0 flex-shrink-0 flex sm:flex-row justify-between md:items-center px-5 py-2 bg-[#f2f2f2] flex-col items-end">
            <p className="font-bold text-[32px]">Weather Forecast</p>
            <SearchBar />
        </div>
    )
}