import React from 'react';
import data from "../data";
import Header from './Header';
import Thumbnail from './Thumbnail';
import banner from '../assets/banner.jpg';
import "../styles/App.css";

function App() {
    return (
        <React.Fragment>
            <Header />
            <div className='banner'>
                <img src={banner} alt="Kasa : Chez vous, partout et ailleurs." className='banner-img' />
                <h1>Chez vous,<br/>partout et ailleurs</h1>
            </div>
            {data.map((place) => {
                return(
                    <Thumbnail key={place.id} place={place} />
                )
            })}
        </React.Fragment>
    )
}

export default App;