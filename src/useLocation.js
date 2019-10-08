import { useState, useEffect } from 'react'

export default () => {

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
    return { lat: lat, long: long, errMsg: errMsg, timeStamp: timeStamp }
}