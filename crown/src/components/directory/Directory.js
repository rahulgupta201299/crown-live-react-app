import React, { Component } from 'react'
import './directory.scss'
import MenuItem from '../menu-item/Menu-item'
export class Directory extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             sections: [{
                 title: 'hats',
                 imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                 id: 1,
                 linkUrl: 'shop'
             },
             {
                 title: 'jackets',
                 imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                 id: 2,
                 linkUrl: 'shop'
             },
            {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkUrl: 'shop'
            },
        {
            title: 'women',
            imageUrl: 'https://i.ibb.co/GCCdy8t/women.png',
            id: 4,
            size: 'large',
            linkUrl: 'shop'
        },
    {
        title: 'men',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        id: 5,
        size: 'large',
        linkUrl: 'shop'
    }]
        }
    }
    
    render() {
        return (
                <div className="directory-menu">
                    {
                        this.state.sections.map(({id,...otherSectionProps})=>{
                            return(
                                <MenuItem key={id} {...otherSectionProps} />
                            )
                        })
                    }

                </div>
        )
    }
}

export default Directory
