import React, { Component } from 'react'

export class Category extends Component {
    constructor (props){
        super(props)
        this.state ={
            categoty: [
                {
                    key: 'all',
                    name: 'Все товары'
                },
                {
                    key: 'protein',
                    name: 'Протеины'
                },
                {
                    key: 'gei',
                    name: 'Сила-Масса'
                },
                {
                    key: 'amin',
                    name: 'Аминокислоты'
                }
            ]
        }
    }

  render() {
    return (
      <div className='category'>
        {this.state.categoty.map(el => (
            <div key={el.key} onClick={() => this.props.choCat(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Category