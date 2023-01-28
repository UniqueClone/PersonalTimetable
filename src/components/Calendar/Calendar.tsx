import React from "react";

const Calendar: React.FC = () => {
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                   'July', 'August', 'September', 'October', 'November', 'December'];

    const today = new Date();

    return (
        <div>
            <h1>Calendar</h1>
            <h2>{weekdays[today.getDay()]} {today.getDate()} {months[today.getMonth()]} {today.getFullYear()}</h2>
        </div>
    );
};

export default Calendar;