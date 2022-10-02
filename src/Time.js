import { useEffect, useState } from "react";

function Time() {
    const [time, setTime] = useState();
    const [date, setDate] = useState();
    const [day, setDay] = useState();
   
    useEffect(() => {
       
        setInterval(() => {
            const today = new Date();
            setTime("" + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
        }, 100);
        setInterval(() => {
            const date = new Date();
            setDate(date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + " ");
        });
    }, []);

    return (
        <div className="ml-2">
            {date}
            {time}
        </div>
    );
}
export default Time;