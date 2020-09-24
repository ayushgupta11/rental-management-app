import React from 'react'

export default function Pagination({
    selectedCategory,
    setSelectedCategory,
    location,
    branch
}) {
    return (
        <div className="pagination-container">
            <div className="pagination">
                <span onClick={() => setSelectedCategory(null)}>Equipment Catalog</span> {selectedCategory ? <>/  <span>{selectedCategory}</span></> : ''}
            </div>
            <div className="filters">
                <span className="title item">Filters</span>
            {
                location ?
                    <span className="item">
                        <span className="title">Location</span>: {location}
                    </span>
                    : null
            }
            {
                branch ?
                    <span className="item">
                        <span className="title">Branch</span>: {branch}
                    </span>
                    : null
            }
            </div>
        </div>
    )
}
