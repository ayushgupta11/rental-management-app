import React from 'react'

export default function Pagination({
    selectedCategory,
    setSelectedCategory
}) {
    return (
        <div className="pagination">
            <span onClick={() => setSelectedCategory(null)}>Equipment Catalog</span> { selectedCategory ? <>/  <span>{selectedCategory}</span></> : ''}
        </div>
    )
}
