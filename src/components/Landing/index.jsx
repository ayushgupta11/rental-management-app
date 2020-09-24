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
                        <p>Please select location</p>
                    </div>
            }
        </div>
    )
}
