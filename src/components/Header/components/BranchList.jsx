import React, { useState, useEffect } from 'react'

export default function BranchList({
    location,
    closeMenu,
    setBranch,
    setLocation,
    activeLocation
}) {
    const [showMenu, setShowMenu] = useState(false)
    useEffect(() => {
        if(activeLocation){
            if(activeLocation.value !== location.dealers_id){
                setShowMenu(false)
            }
        }
    }, [activeLocation])
    const handleLocationClick = (id) => {
        setLocation({value: id, label: location.name })
        setBranch(null)
        setShowMenu(!showMenu)
    }
    const handleBranchClick = (event, id, name) => {
        event.stopPropagation()
        setLocation({value: location.dealers_id, label: location.name })
        setBranch({value: id, label: name })
        closeMenu()
    }
    return (
        <span className="dropdown" onClick={() => handleLocationClick(location.dealers_id)}>
            <span>{location.name.toLowerCase() }</span>
            <div className={`branch-dropdown dropdown-content ${showMenu ? 'show' : ''}`}>
                {
                    location.branches.map((branch) => {
                        return (
                            <span key={branch.branch_id} onClick={(event) => handleBranchClick(event, branch.branch_id, branch.name)}>{branch.name}</span>
                        )
                    })
                }
            </div>
        </span>
    )
}