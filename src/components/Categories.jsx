import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'All'
                },
                {
                    key: 'Chairs',
                    name: 'chairs'
                },
                {
                    key: 'Tables',
                    name: 'tables'
                },
                {
                    key: 'Sofa',
                    name: 'sofa'
                },
                {
                    key: 'Lamp',
                    name: 'lamps'
                },

            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories