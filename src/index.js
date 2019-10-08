import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import useLocation from './useLocation';


const App = () => {
    const { lat, long, timeStamp, errMsg } = useLocation()
    if (lat && long && timeStamp) {
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
            {!errMsg ? '' : <span>Error: {errMsg}</span>}
        </div>
    );

}

ReactDOM.render(<App />, document.querySelector('#root'));