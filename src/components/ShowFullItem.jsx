import React, { Component } from 'react'

export class ShowFullItem extends Component {
  render() {
    return (
      <div className='fullItem'>
        <div>
            <img src={'./img/' + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} />
            <h2>{this.props.item.tittle}</h2>
            <p>{this.props.item.desc}</p>
            <b>{this.props.item.price}$</b>
            <div className='addToCart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
        </div>
      </div>
    )
  }
}

export default ShowFullItem