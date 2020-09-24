import React from 'react'
import LocationList from './components/LocationList'

export default function Header({
    catalog,
    setLocation,
    setBranch,
    location
}) {
    return (
        <div className="header-section">
            <div className="header-title" onClick={() => { setLocation(null);setBranch(null) }}>Rental Management System</div>
            <LocationList 
                locations={catalog.locations} 
                setLocation={setLocation} 
                setBranch={setBranch}
                activeLocation={location}
            />
        </div>
    )
}
