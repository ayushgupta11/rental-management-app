import React, { useState, useEffect } from 'react'
import CategoryItem from './components/CategoryItem'
import Pagination from './components/Pagination'
import SubCategory from './components/SubCategory'

export default function Categories({
    catalog,
    location,
    branch
}) {
    const [categoryList, setCategoryList] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null)
    const fetchCategories = () => {
        if (location) {
            let currLoc = catalog.locations.filter((item) => item.dealers_id === location.value)[0]
            if (branch) {
                let currBranch = currLoc.branches.filter((item) => item.branch_id === branch.value)[0]
                setCategoryList(currBranch.categories || [])
            }
            else {
                let allCategories = []
                currLoc.branches.forEach((item) => {
                    allCategories = allCategories.concat(item.categories)
                })
                setCategoryList(allCategories || [])
            }
        }
    }
    useEffect(() => {
        if (location || branch) {
            setSelectedCategory(null)
            fetchCategories()
        }
    }, [location, branch])
    return (
        <div className="categories-container">
            <Pagination 
                selectedCategory={selectedCategory} 
                setSelectedCategory={setSelectedCategory}
                location={location}
                branch={branch}
            />
            {
                selectedCategory ?
                    <SubCategory selectedCategory={selectedCategory} categories={categoryList} />
                    : <div className="cards-container">
                        {
                            categoryList.map((category, index) => {
                                return (
                                    <CategoryItem
                                        category={category}
                                        setSelectedCategory={setSelectedCategory}
                                        key={index}
                                    />
                                )
                            })
                        }
                    </div>
            }
        </div>
    )
}
