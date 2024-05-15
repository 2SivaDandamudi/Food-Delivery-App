import react, { useState } from "react";
import ResCard from "./resCard";
import resList from "../../utils/mockData";

const Body = () => {
    const [data, setData] = useState(resList)

    const handledTopRated = () => {
        const topRatedList = data.filter((res)=> res.info.avgRatingString > 4)
        setData(topRatedList)
    }
     
    return(
        <div className="body">
            <div className="filter">
            <button className="top-rated"   onClick={handledTopRated}>Top Rated</button>
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

