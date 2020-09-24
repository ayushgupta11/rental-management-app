import React, { useState } from 'react'
import BranchList from './BranchList'

export default function LocationList({
    locations,
    activeLocation,
    setLocation,
    setBranch
}) {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div className="dropdown">
            <button onClick={() => setShowMenu(!showMenu)} className="dropbtn">Select Location</button>
            <div className={`dropdown-content ${showMenu ? 'show' : ''}`}>
                {
                    locations.map((location) => {
                        return (
                            <BranchList
                                key={location.dealers_id}
                                location={location}
                                setBranch={setBranch}
                                closeMenu={() => setShowMenu(false)}
                                activeLocation={activeLocation}
                                setLocation={setLocation}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}