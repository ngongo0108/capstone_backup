import { useState } from "react";
import SearchIcon from "@/assets/search_icon.svg";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        console.log("Searching for: ", searchTerm);
        
    }

    return (
        <div className="flex items-center py-3 pr-4 pl-6 my-auto w-3/5 rounded-2xl bg-white bg-opacity-60 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:pl-5 max-md:max-w-full">
            {/* Input field */}
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Tìm kiếm sản phẩm"
                className="flex-1 text-xl text-zinc-400 bg-transparent outline-none"
            />

            {/* Search button */}
            <button
                onClick={handleSearch}
                className="bg-white rounded-lg border border-red-500 border-solid shadow-sm h-[42px] min-h-[42px] w-[42px] ml-2"
            >
                <div className="flex justify-center items-center w-full h-full">
                <img
                    loading="lazy"
                    src={SearchIcon}
                    alt="Search Icon"
                    className="object-contain w-[18px]"
                />
                </div>
            </button>
        </div>

    );
};

export default SearchBar