import React from 'react'
import Category from './Category'

const Categories = ({categories}) => {    
    let category_index = 1
    return (
        <div>
            <section className="category" id="category">
                <h1 className="heading">shop by <span>category</span></h1>
                <div id="category-container" className="box-container">
                    {
                        categories.map((category) => (
                            <Category key= {category.categoryId} category = {category}/>
                            
                        ))
                    }                
                </div>
            </section>
        </div>
    )
}

export default Categories