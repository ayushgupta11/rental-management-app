import React from 'react'

export default function SubCategory({
    categories,
    selectedCategory
}) {
    const images = (image) => {
        const imageFile = require.context('@static/media/category/subcategory', true);
        try {
            return imageFile(`${image}`)
        }
        catch (e) {
            console.log(e)
            return imageFile(`./booms_straight.png`)
        }
    }
    const currentCategory = categories.filter((item) => item.name === selectedCategory)[0]
    return (
        <div className="cards-container">
            {
                currentCategory.subcategories.map((item, index) => {
                    return (
                        <div className="card" key={index}>
                            <img src={images(`./${item.image}`)} alt="Avatar" />
                            <div className="container">
                                <div><b>{item.name}</b></div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}