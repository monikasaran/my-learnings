
import React, { useState, useEffect } from 'react'
import ParkingSlot from './parking-slot.js';
import './main-container.css'

const parkingData = [
    {
        
        "entryTime": null,
        "receiptNo": "receipt-0001",
        "vehicle": {
            "registrationNo": "MH 01 6275",
            "color": "black"
        }
    },
    {
        "parkingSlot": "0002",
    },
    {
        "parkingSlot": "0003",
        "entryTime": null,
        "receiptNo": "receipt-0003",
        "vehicle": {
            "registrationNo": "MH 01 6275",
            "color": "yellow"
        }
    },
    {
        "parkingSlot": "0004",
        "entryTime": null,
        "receiptNo": "receipt-0004",
        "vehicle": {
            "registrationNo": "MH 01 6275",
            "color": "green"
        }
    },
    {
        "parkingSlot": "0005",
        "entryTime": null,
        "receiptNo": "receipt-0005",
        "vehicle": {
            "registrationNo": "MH 01 6275",
            "color": "blue"
        }
    },
    {
        "parkingSlot": "0006",
        "entryTime": null,
        "receiptNo": "receipt-0006",
        "vehicle": {
            "registrationNo": "MH 01 6275",
            "color": "grey"
        }
    },
    {
        "parkingSlot": "0007",
    },
    {
        "parkingSlot": "0008",
        "entryTime": null,
        "receiptNo": "receipt-0008",
        "vehicle": {
            "registrationNo": "MH 01 6275",
            "color": "orange"
        }
    },
    {
        "parkingSlot": "0009",
        "entryTime": null,
        "receiptNo": "receipt-0009",
        "vehicle": {
            "registrationNo": "MH 01 6275",
            "color": "black"
        }
    },
    {
        "parkingSlot": "0010",
        "entryTime": null,
        "receiptNo": "receipt-0010",
        "vehicle": {
            "registrationNo": "MH 01 6275",
            "color": "red"
        }
    },
    {
        "parkingSlot": "0011",
        "entryTime": null,
        "receiptNo": "receipt-0011",
        "vehicle": {
            "registrationNo": "MH 01 6275",
            "color": "white"
        }
    },
    {
        "parkingSlot": "0012",
        "entryTime": null,
        "receiptNo": "receipt-0012",
        "vehicle": {
            "registrationNo": "MH 01 6275",
            "color": "blue"
        }
    },
    {
        "parkingSlot": "0013",
        "entryTime": null,
        "receiptNo": "receipt-0013",
        "vehicle": {
            "registrationNo": "MH 01 6275",
            "color": "black"
        }
    },
    {
        "parkingSlot": "0014",
        "entryTime": null,
        "receiptNo": "receipt-0014",
        "vehicle": {
            "registrationNo": "MH 01 6275",
            "color": "orange"
        }
    },
    {
        "parkingSlot": "0015",
        "entryTime": null,
        "receiptNo": "receipt-0015",
        "vehicle": {
            "registrationNo": "MH 01 1111",
            "color": "green"
        }
    },
    {
        "parkingSlot": "0016"
    },
    {
        "parkingSlot": "0017"
    },
    {
        "parkingSlot": "0018"
    },
    {
        "parkingSlot": "0019"
    },
    {
        "parkingSlot": "0020"
    }
]

const MainContainer =()=> {
    const [filterBy, setFilterBy] = useState('')
    const [searchBy, setSearchBy] = useState('')
    const [searchText, setSearchText] = useState('')
    const [showData, setShowData] = useState(parkingData)
    const [vehicleData, setVehicleData] = useState({})
    const [availableParking, setAvailableParking] = useState(parkingData.filter((park) => !park.receiptNo).length)

    const onFilterChange = ({target: {value}}) => {
        setFilterBy(value)
    }

    const onSearchChange = ({target: {value}}) => {
        if(value)
            setSearchBy(value)
    }

    const onSearchTextChange = ({target: {value}}) => {
        if(searchBy && value) setSearchText(value)
        else setSearchText('')
    }

    const onSearch = () => {
        if(searchBy && searchText) {
            let data = []
            if(searchBy === 'color'){
                data = parkingData.filter(park => park.vehicle && park.vehicle.color === searchText)
                setShowData(data)
            } else {
                data = parkingData.filter(park => park.vehicle && park.vehicle.registrationNo === searchText)
                setShowData(data)
            }
        } else {
            setShowData(parkingData)
            alert('Select search type and enter text')
        }
    }

    const onChangeVehicleData = ({target: {value}}, key) => {
        setVehicleData({...vehicleData, [key]: value})
    }

    const onAddVehicle = () => {
        if(!availableParking) {
            alert('Parking Full')
        }
        else if(vehicleData.color && vehicleData.registrationNo) {
            let receiptNo = `receipt-${Math.floor(1000 + Math.random() * 9000)}`
            for(let i=0; i<parkingData.length; i++) {
                if(!parkingData[i].receiptNo){
                    let now = new Date()
                    parkingData[i].entryTime = now.toString()
                    parkingData[i].receiptNo = receiptNo
                    parkingData[i].vehicle = vehicleData
                    break
                }
            }
            setAvailableParking(availableParking-1)
            setShowData([...parkingData])
        } else {
            alert('Enter vehicle data')
        }
    }

    const onExitVehicle = (parkingSlot) => {
        for(let i=0; i<parkingData.length; i++) {
            if(parkingData[i].parkingSlot === parkingSlot) {
                delete parkingData[i].receiptNo
                delete parkingData[i].entryTime
                delete parkingData[i].vehicle
                break
            }
        }
        setAvailableParking(availableParking+1)
        setShowData([...parkingData])
    }

    useEffect(() => {
        if(filterBy) {
            console.log(filterBy);
            let data = []
            if(filterBy === 'all') {
                setShowData(parkingData)
            } else {
                data = parkingData.filter((park) => !park.receiptNo)
                setShowData(data)
            }
        }
    }, [filterBy])

    return (
        <div className="MainContainer">
            <h2>Parking Slots ({availableParking})</h2>
            <header>
                <div className="FilterBY">
                    <label htmlFor="parking">Filter By:</label> 
                    <select name="parking" id="cars" onChange={onFilterChange}>
                        <option value="all">All</option>
                        <option value="available">Available Slots</option>
                    </select>
                </div>
                <div className="SearchBY">
                    <label htmlFor="parking">Search By:</label> 
                    <select value={searchBy} name="parking" onChange={onSearchChange}>
                        <option value="">Select</option>
                        <option value="color">Color</option>
                        <option value="registrationNo">Registration No.</option>
                    </select>
                    <input type='text' value={searchText} onChange={onSearchTextChange}/>
                    <input type='button' value='Search' onClick={onSearch}/>
                </div>
            </header>
            <div className="AddVehicle">
                <div>
                    Enter Registration No:
                    <input type='text' onChange={(e) => onChangeVehicleData(e, 'registrationNo')}/>
                </div>
                <div>
                    Vehicle Color:
                    <input type='text' onChange={(e) => onChangeVehicleData(e, 'color')}/>
                </div>
                <input type='button' value='ADD' onClick={onAddVehicle} />
            </div>
            <section className="ContentBox">
                {
                    showData.map((park, idx) => <ParkingSlot key={idx} data={park} onExit={onExitVehicle}/>)
                }
            </section>
        </div>
    )
}

export default MainContainer
