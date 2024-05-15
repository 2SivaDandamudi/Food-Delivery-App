import react, { useState } from "react";
import ResCard from "./resCard";
import resList from "../../utils/mockData";

const Body = () => {
    const [data, setData] = useState(resList)
    const [searchText, setSearchText] = useState(" ");

    const handleTopRated = () => {
        const topRatedList = data.filter((res)=> res.info.avgRatingString > 4)
        setData(topRatedList)
    }
    
	const clearSelection = () => {
		setData(resList)
	}

    const handleInput = (e) => {
        setSearchText(e.target.value)
        setData(resList)
    }

const handleSearch = (e) => {
    const filteredList = data.filter((res) => res.info.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
     setData(filteredList)
}

    return(
        <div className="body">
            <div className="filter">
                <div>
            <button className="top-rated"   onClick={handleTopRated}>Top Rated</button>
            <button className="clear-btn" onClick={clearSelection}>Clear Filter</button>
            </div>
            <div className="search">
                <input type="text" className="search-field" placeholder="Search Item" value={searchText} onChange={handleInput} ></input>
                <button className="search-btn" onClick={handleSearch}>search</button>
            </div>
            </div>
            <div className="res-container">
                {data.map((res) =>
              <ResCard key={res.info.id} resData={res}/>  
                )}
            </div>
        </div>
    )
}

export default Body

