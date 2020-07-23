import React from "react";
import App from "../App";


const Weather = props => (

                <div className="weather">
    
                   { props.city && props.country && <p className="first-weather">Местоположение: { props.city }, { props.country }</p>}
                   { props.temperature && <p>Температура: { props.temperature }</p>}
                   { props.humidity && <p>Влажность: { props.humidity }</p>}
                   { props.description && <p className="last-weather">Описание: { props.description }</p>}
                   { props.error && <p className="full-weather">{ props.error }</p>}

                </div>
        );

export default Weather;