import React from "react";

const LocationBox = ({image,titileLocation}) => {
    <div className="location">
        <div className="location_inner">
            <img src={image} width="100%" alt={titileLocation}/>
            <span>{titileLocation}</span>
        </div>
    </div>
};

export default LocationBox;
