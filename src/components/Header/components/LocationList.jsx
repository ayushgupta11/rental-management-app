import React, { useState, useRef, useEffect } from 'react'
import BranchList from './BranchList'

export default function LocationList({
    locations,
    activeLocation,
    activeBranch,
    setLocation,
    setBranch
}) {
    const [showMenu, setShowMenu] = useState(false)
    const wrapperRef = useRef(null)
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [0])
    const handleClickOutside = (event) => {
        if (wrapperRef && !wrapperRef.current.contains(event.target)) {
            setShowMenu(false)
        }
    }
    return (
        <div className="dropdown" ref={wrapperRef}>
            <button onClick={() => setShowMenu(!showMenu)} className="dropbtn">
                <span className="dropbtn-text">
                    <span className="material-icons" style={{ marginRight: '4px' }}>
                        location_on
                        </span>
                        {
                            activeLocation || activeBranch ?
                            `${activeLocation.label} ${activeBranch ? `/ ${activeBranch.label}` : ''}`
                            : 'Select Location' 
                        }
                    <span className="material-icons dropbtn-icon">
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