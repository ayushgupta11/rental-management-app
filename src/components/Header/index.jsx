import React from 'react'
import Location from './components/LocationList'

export default function Header({
    catalog,
    setLocation,
    setBranch,
    location
}) {
    return (
        <div className="header-section">
            <div className="header-title">Rental Management System</div>
            <Location 
                locations={catalog.locations} 
                setLocation={setLocation} 
                setBranch={setBranch}
                activeLocation={location}
            />
        </div>
    )
}
