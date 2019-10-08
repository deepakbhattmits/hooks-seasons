import React, { useState, useEffect } from 'react';

import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


const App = () => {
    const [lat, setLat] = useState(null)
    const [long, setLong] = useState(null)
    const [errMsg, setErrMsg] = useState('')
    const [timeStamp, setTimeStamp] = useState('')
    useEffect(() => {
        getLocation();
    }, [])
    const getLocation = () => {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                setLat(position.coords.latitude)
                setLong(position.coords.longitude)

                setInterval(() => {
                    setTimeStamp(new Date().toLocaleTimeString())
                }, 1000);
            }
            , (err) => setErrMsg(err.message)
        );

    }
    if (lat && long) {
        return (
            <div>
                <SeasonDisplay lat={lat} long={long} error={errMsg} time={timeStamp} />
            </div>
        );
    }
    if (!errMsg && !lat && !long) {
        return (
            <Spinner message="please accept location request" />
        );
    }
    return (
        <div>
            {!errMsg ? '' : <span>{errMsg}</span>}
        </div>
    );

}

ReactDOM.render(<App />, document.querySelector('#root'));