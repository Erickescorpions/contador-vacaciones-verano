import React, { useEffect, useState } from 'react'
import { TimerField } from './components/TimerField';

export const Timer = () => {
    const lastDay = new Date("2025-07-04T07:30:00");

    const [timer, setTimer] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const current = Date.now();
            // calculamos el tiempo restante en milisegundos
            let remainingTime = lastDay.getTime() - current;
            // calculamos los dias que faltan
            const remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
            const remainingHours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const remainingMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            const remainingSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

            setTimer({
                days: remainingDays,
                hours: remainingHours,
                minutes: remainingMinutes,
                seconds: remainingSeconds
            })
        }, 1000);
        // clearing interval
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-wrap justify-center gap-4">
            <TimerField value={timer.days} label="Días" />
            <TimerField value={timer.hours} label="Horas" />
            <TimerField value={timer.minutes} label="Minutos" />
            <TimerField value={timer.seconds} label="Segundos" />
        </div>

    )
}
