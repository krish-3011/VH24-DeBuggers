import React  from 'react'
import SpiWheel from 'react-spin-to-wheel/index'

const SpinWheel = () => {
    const segments = [
        {
            color: '#db7093',
            value: 'Decoration'
        },
        {
            color: '#20b2aa',
            value: 'Recharge'
        },
        {
            color: '#d63e92',
            value: 'Movie Ticket'
        },
        {
            color: '#daa520',
            value: 'Refrigrator'
        },
        {
            color: '#ff340f',
            value: 'Air Conditionar'
        },
        {
            color: '#ff7f50',
            value: 'Ring'
        },
        {
            color: '#3cb371',
            value: 'Watch'
        },
        {
            color: '#4169e1',
            value: 'Laptop'
        }

    ];

    const spinOutput = result => {
        alert(result)
    }
    return (
        <SpiWheel segments={segments} spinOutput={spinOutput} />
    )
}

export defaul