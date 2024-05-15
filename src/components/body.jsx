import react from "react";
import ResCard from "./resCard";
import resList from "../../utils/mockData";

const Body = () => {
    return(
        <div className="body">
            <div className="filter">
            <button className="top-rated" onClick={handleTopRated()}>Top Rated</button>
            </div>
            <div className="res-container">
                {resList.map((res) =>
              <ResCard key={res.info.id} resData={res}/>  
                )}
            </div>
        </div>
    )
}

export default Body

