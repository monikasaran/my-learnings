
import React from 'react'
import './parking-slot.css'


const ParkingSlot =({data, onExit})=> {
    if(!data.receiptNo) return <article className="ParkingSlot">{data.parkingSlot}</article>

    const { parkingSlot, entryTime, receiptNo, vehicle: {registrationNo, color }} = data
    return (
        <article className="ParkingSlot">
            <div className="VehicleColor" style={{backgroundColor: `${color}`}}></div>
            <div>Parking: {parkingSlot}</div>
            <div>Receipt NO: {receiptNo}</div>
            <div>Registration NO: {registrationNo}</div>
            <div>Entry Time: {entryTime}</div>
            <input type='button' value={'EXIT'} onClick={() => onExit(parkingSlot)}/>
        </article>
    )
}

export default ParkingSlot
