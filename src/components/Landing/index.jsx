import React from 'react'
import Categories from '@components/Categories'

export default function Landing({
    location,
    branch,
    catalog
}) {
    return (
        <div className="landing-container">
            {
                location || branch ?
                    <Categories 
                        catalog={catalog} 
                        location={location}
                        branch={branch}
                    />
                    :
                    <div className="welcome-container">
                        <h2>
                            Welcome to <br />
                            Rental Management System
                        </h2>
                        <p style={{ display: 'flex', alignItems: 'center' }}>
                            Please select location
                        <span className="material-icons" style={{ marginLeft: '4px', color: '#d2d420' }}>
                            location_on
                        </span>
                        </p>
                    </div>
            }
        </div>
    )
}
