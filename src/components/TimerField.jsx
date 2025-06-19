import React from 'react'

export const TimerField = ({ value, label }) => {
    return (
        <div className="flex flex-col items-center bg-white rounded-xl px-4 py-3 shadow-md w-24">
            <span className="text-sm font-semibold text-gray-600">{label}</span>
            <span className="text-3xl font-bold text-rose-500">{value}</span>
        </div>
    )
}
