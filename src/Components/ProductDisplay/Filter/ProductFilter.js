import React from 'react'

const ProductFilter = () => {
    return (
        <div className="sidebar-white-container">
            <div className="border-end mt-5" id="sidebar-wrapper">              
                <div className="list-group list-group-flush">                    
                    <label className="checklist-header">Collection</label>
                    <div className="collection" id="checklist">                          
                            <input className="list-group-item" id="01" type="checkbox" name="r" value="1" checked/>
                            <label for="01">Bannana</label>
                            <input id="02" type="checkbox" name="r" value="2"/>
                            <label for="02">Tomatoes</label>
                            <input id="03" type="checkbox" name="r" value="3"/>
                            <label for="03">Vegetables</label>
                    </div>                     
                    <label className="mt-5 mb-5 checklist-header">Price Range</label>
                    <div id="slider-range"></div>
                    <p>
                        <input className="mt-5 price-range" type="text" id="amount" readonly style="border:0;  color:#f6931f;font-weight:bold;"/>
                    </p>                     
                    <label className="mt-5 mb-5 checklist-header">All Categories</label>                      
                    <div className="hov cartegories">All Categories
                        <ul className="main">
                            <li>Item1</li>
                            <li>Item2</li>
                            <li>Item3</li>
                            <li>Item4</li>
                        </ul>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default ProductFilter
