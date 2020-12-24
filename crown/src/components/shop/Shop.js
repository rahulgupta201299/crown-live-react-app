import React, { Component } from 'react'
import Shop_Data from './Shop_data'

import Shop_data from './Shop_data'
import Collection from '../preview_collection/Preview_collection'
export class Shop extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             collections: Shop_Data
        }
    }
    
    render() {
        const {collections}=this.state
        return (
            <div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionProps})=>(
                        <Collection key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Shop
