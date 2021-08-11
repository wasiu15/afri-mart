import React, { Fragment } from 'react'

const Category = ({category}) => {
    
    
    return (
        <Fragment>             
            {categoryBox(category)}
        </Fragment>
          )
}

function categoryBox(category){
    return  <div className="box">
                <h3>{category.categoryName}</h3>
                <p>upto {category.categoryDiscount} off</p>
                <img src={category.categoryImage} />
                <a href="#" className="btn">shop now</a>
            </div>        
}
export default Category
