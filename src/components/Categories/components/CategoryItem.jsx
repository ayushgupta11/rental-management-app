import React from 'react'

export default function CategoryItem({
    category,
    setSelectedCategory
}) {
    const images = (image) => {
        const imageFile = require.context('@static/media/category', true);
        try {
            return imageFile(`${image}`)
        }
        catch (e) {
            console.log(e)
            return imageFile(`./booms.png`)
        }
    }
    return (
        <div className="card">
            <img src={images(`./${category.image}`)} alt="Avatar" />
                <div className="container" onClick={() => setSelectedCategory(category.name)}>
                    <h4><b>{category.name}</b></h4>
                </div>
        </div>
    )
}