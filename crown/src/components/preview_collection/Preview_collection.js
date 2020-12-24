import React from 'react'
import './Preview_collection.scss'
import Collection_Item from '../collection_item/Collection_Item'
function Preview_collection(props) {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{props.title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    props.items.filter((item,idx)=> idx<4).map((item)=>(
                        <Collection_Item key={item.id} item={item} />
                    ))
                }
            </div>
            
        </div>
    )
}

export default Preview_collection
