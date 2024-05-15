import React from "react";
import { CDN_URL } from "../../utils/constants";

const ResCard = ({resData}) => {
    const {name, cuisines, avgRatingString,costForTwo, cloudinaryImageId,sla} = resData.info
    return(
        <div className="res-card">
            <img className="res-logo" alt="resLogo" src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{avgRatingString}</h3>
            <h3>{costForTwo}</h3>
            <h3>{sla.deliveryTime} Minutes</h3>
        </div>
    )
}

export default ResCard