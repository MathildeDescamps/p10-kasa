import React from 'react';
import { Routes, Route } from "react-router-dom";
import data from "../data";
import Home from '../pages/Home';
import About from '../pages/About';
import Location from '../pages/Location';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home locations={data} />} />
                <Route path="/a-propos" element={<About />} />
                <Route path='/location/:id' element={<Location locations={data} />} />
            </Routes>
        </>
    )
}
export default App;