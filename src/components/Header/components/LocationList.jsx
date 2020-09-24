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
            <button onClick={() => setShowMenu(!showMenu)} className="dropbtn">
                <span className="dropbtn-text">
                    Select Location
                    <span class="material-icons dropbtn-icon">
                        expand_more
                    </span>
                </span>
            </button>
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