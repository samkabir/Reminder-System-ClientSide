import React from 'react';
import momentTZ from 'moment-timezone';


const ReminderPage = () => {
    const timeZonesList = momentTZ.tz.names();
    console.log(timeZonesList);

    const handleInfo = (e) =>{
        e.preventDefault();
        console.log(e.target[0].value, e.target[1].value,e.target[2].value,e.target[3].value );
    }
    return (
        <div>
            <form onSubmit={handleInfo}>
                <label>Date</label>
                <input type="date" name="Reminder Date" />
                <br />
                <label>Time</label>
                <input type="time" name="Reminder Time" />
                <br />
                <label>Message</label>
                <input type="text" name="Message" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default ReminderPage;