import React from 'react'
import Loader from "react-loader-spinner";
import './styles.css'
const Loading = () => {
    return (
        <div className='loading'>
            <Loader type="Puff" color="#00BFFF" height={100} width={100} />
            <h3>Loading.....</h3>
        </div>
    )
}

export default Loading
