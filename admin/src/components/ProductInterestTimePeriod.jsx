import React, { useState } from 'react';
import './ProductInterestTimePeriod.css'; // Import the CSS file
import Navbar from './Navbar';

const ProductInterestTimePeriod = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
    };

    const handleEndDateChange = (e) => {
        setEndDate(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Selected Time Period: From ${startDate} to ${endDate}`);
    };

    return (
        <div>
            <Navbar />
            <div className="container">
                <h2>Select Time Period</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="start-date">From: </label>
                        <input
                            type="date"
                            id="start-date"
                            value={startDate}
                            onChange={handleStartDateChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="end-date">To: </label>
                        <input
                            type="date"
                            id="end-date"
                            value={endDate}
                            onChange={handleEndDateChange}
                            required
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ProductInterestTimePeriod;
