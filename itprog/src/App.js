import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items"
import Category from "./components/Category"
import ShowFullItem from "./components/ShowFullItem"

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Протеин',
          img: 'prot.png',
          desc: 'Самый лучший протеин. Натуральный белок из молока альпийских коров. Не одна бурёнка не простродала!!! ',
          category:'protein',
          price: '47.99'

        },
        {
          id: 2,
          title: 'Протеиновый батончик',
          img: 'protbar.jpg',
          desc: 'Самый лучший протеиновый батончик. Из того же молока альпийских коров.',
          category:'protein',
          price: '17.99'

        },
        {
          id: 3,
          title: 'Протеиновый шейк',
          img: 'prot_coc.jpg',
          desc: 'Самый лучший протеиновый шейк. Удобный и быстрый способ добрать необходимое кол-во белков!!!',
          category:'protein',
          price: '27.99'

        },
        {
          id: 4,
          title: 'Креатин',
          img: 'creatin.jpg',
          desc: 'Самый лучший Креатин. Креатин - это лучшая спортивная добавка для спортсмена! ',
          category:'gei',
          price: '38.99'

        },
        {
          id: 5,
          title: 'Изотоник',
          img: 'izo.jpg',
          desc: 'Самый лучший Изотоник. Необходим при длительных тренировках.',
          category:'amin',
          price: '11.99'

        },
        {
          id: 6,
          title: 'Витамины мужские',
          img: 'vitamin.jpg',
          desc: 'Самый лучшие Мужские витамины, чтобы ч**н ст**л и деньги были, но у меня ваши:)',
          category:'amin',
          price: '70.99'

        },
        {
          id: 7,
          title: 'Омега 3',
          img: 'omega.jpeg',
          desc: 'Самый лучший Омега. Жирр',
          category:'amin',
          price: '40.99'

        },
        {
          id: 8,
          title: 'Гейнер',
          img: 'geiner.jpg',
          desc: 'Самый лучший гейнер. Если вы маленький мальчик и хотите стать большим дядей, то вам поможет только тренболон. А гейнер нужен для добора калорий!!',
          category:'gei',
          price: '50.99'

        },
        {
          id: 9,
          title: 'Аминокислоты',
          img: 'amino.jpg',
          desc: 'Самая лучшая Аминокислота. Для восполнения нехватающих веществ в организме',
          category:'amin',
          price: '20.99'

        },
        {
          id: 10,
          title: 'L-Carnitine',
          img: 'lcar.jpg',
          desc: 'Самая лучшая Жиросжигатель. Он не сжигает жир просто так, для этого нужно тренироваться. ',
          category:'amin',
          price: '10.99'

        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.choCat = this.choCat.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }

  onShowItem(item) {
    this.setState({
      fullItem: item,
      showFullItem: !this.state.showFullItem
    })
  }

  choCat(category) {
    if (category === 'all') {
      this.setState({currentItems: this.state.items})
    } else {
      this.setState({
        currentItems: this.state.items.filter(el => el.category === category)
      })
    }
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    if (!this.state.orders.some(el => el.id === item.id)) {
      this.setState({orders: [...this.state.orders, item]})
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Category choCat={this.choCat} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>
    )
  }
}

export default App;
