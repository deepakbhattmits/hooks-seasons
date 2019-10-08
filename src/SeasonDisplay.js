import './SeasonDisplay.css';
import React from 'react';

// import ReactDOM from 'react-dom';
const seasonConfig = {
    Summer: {
        text: 'let\'s hit the beach',
        iconName: 'sun orange'
    },
    Winter: {
        text: 'Burr it\'s chill ',
        iconName: 'snowflake teal'
    }
}
const getSeason = (lat, month) => {
    if (month > 2 && month < 8) {
        return lat > 0 ? 'Summer' : 'Winter';
    } else {
        return lat > 0 ? 'Winter' : 'Summer'
    }
}
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const time = props.time;




    const { text, iconName } = seasonConfig[season]; // get the text and icon name
    //  console.log(season);  
    //  const text = season === 'Winter' ? 'Burr it\'s chill' : 'let\'s hit the beach';
    //  const text = season === 'Winter' ? 'Burr it\'s chill' : 'let\'s hit the beach';
    // const icon = season === 'Winter' ? 'snowflake teal' : 'sun orange';
    return (
        <div className={`season-display ${season} }`}>
            <i className={`${iconName} icon massive icon-top-left`}></i>
            <h1>the time is : {time} {text}</h1>
            <i className={`${iconName} icon massive icon-bottom-right`}></i>
        </div>
    );
}


// class SeasonDisplay extends React.Component {
//     render (props) {
//         console.log(props);
//         return (
//             // <div>Lat is {props.lat}</div>
//         // <div> { props.error? <div> {props.error} </div> : <div>Lat is {props.lat} and long is {props.long} </div> } </div>
//         );
//     }

// }
export default SeasonDisplay;