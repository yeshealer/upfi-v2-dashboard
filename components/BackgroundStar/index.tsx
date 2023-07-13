import React from "react";
import './index.scss'

const BackgroundStar = () => {
    const starArray = [];
    for (let i = 0; i < 15; i++) {
        starArray[i] = (
            <div className="shooting_star" key={i} />
        )
    }
    return (
        <div className="night">
            {starArray}
        </div>
    )
}

export default BackgroundStar