import React from 'react';
import momentTZ from 'moment-timezone';
import { useForm } from 'react-hook-form';


const ReminderPage = () => {
    const timeZonesList = momentTZ.tz.names();
    const {  register, handleSubmit, reset } = useForm();

    const handleInfo = (data) =>{
        console.log(data);

        //Posting a Reminder
        // fetch('https://localhost:5000/reminders', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        // .then(res => res.json())
        // .then(res => {
        //     if(res.insertedId){
        //         alert('Reminder added successfully');
        //         reset();
        //     }
        // })

    }
    return (
        <div>
            <form onSubmit={handleSubmit(handleInfo)}>
                <br />
                <div>
                    <input type="email" placeholder="Email"  {...register("email")} />
                </div>
                <br />
                <div>
                    <select placeholder="Time Zone"  {...register("timezone")}>
                        {timeZonesList.map(timeZone => <option value={timeZone}>{timeZone}</option>)}
                    </select>
                </div>
                <br />
                <div>
                    <input type="date" placeholder="Reminder Date" {...register("date")} />
                </div>
                <br />
                <div>
                    <input type="time" placeholder="Reminder Time"  {...register("time")} />
                </div>
                <br />
                <div>
                    <input type="text" placeholder="Message"  {...register("message")} />
                </div>
                <br />
                <div>
                    <input type="submit" value="Set Reminder" />
                </div>
            </form>
        </div>
    );
};

export default ReminderPage;