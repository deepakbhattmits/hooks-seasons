import React from 'react';

import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component {

    state = { lat: null, long: null, errMsg: '', timeStamp: '' };
    componentDidMount() {
        this.getLocation();
    }
    getLocation() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude, long: position.coords.longitude });

                setInterval(() => {
                    this.setState({ timeStamp: new Date().toLocaleTimeString() });
                }, 1000);


            }
            , (err) => this.setState({ errMsg: err.message })
        );

    }
    render() {
        if (!this.state.errMsg && this.state.lat && this.state.long) {
            return (
                <div>
                    <SeasonDisplay lat={this.state.lat} long={this.state.long} error={this.state.errMsg} time={this.state.timeStamp} />

                </div>
            );
        }
        if (!this.state.errMsg && !this.state.lat && !this.state.long) {
            return (
                <Spinner message="please accept location request" />
            );
        }
        return (
            <div>
                {!this.state.errMsg ? '' : <span>{this.state.errMsg}</span>}
            </div>
        );

    }
}

ReactDOM.render(<App />, document.querySelector('#root'));