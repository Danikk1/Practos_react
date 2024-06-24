import React, { useState } from 'react';
import { FaShoppingBasket } from "react-icons/fa";
import Order from './Order';
import AboutUsModal from './AboutUsModal';
import ContactModal from './ContactModal';

const showOrders = (props) => {
    let summ = 0;
    props.orders.forEach(el => summ += Number.parseFloat(el.price));
    return (
        <div>
            {props.orders.map(el => (
                <Order onDelete={props.onDelete} key={el.id} item={el} />
            ))}
            <p className='summ'>Итого: {new Intl.NumberFormat().format(summ)}$</p>
        </div>
    );
}

const showNothing = () => {
    return (
        <div className='empty'>
            <h2>Товаров нет</h2>
        </div>
    );
}

export default function Header(props) {
    const [cartOpen, setCartOpen] = useState(false);
    const [aboutUsOpen, setAboutUsOpen] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);

    return (
        <header>
            <div>
                <span className='logo'>Bodybuilding Shop</span>
                <ul className='nav'>
                    <li onClick={() => setAboutUsOpen(true)}>Про нас</li>
                    <li onClick={() => setContactOpen(true)}>Контакты</li>
                </ul>
                <FaShoppingBasket onClick={() => setCartOpen(!cartOpen)} className={`shop-card ${cartOpen && 'active'}`} />

                {cartOpen && (
                    <div className='shopcart'>
                        {props.orders.length > 0 ?
                            showOrders(props) : showNothing()}
                    </div>
                )}
            </div>
            <div className='presentation'></div>
            <AboutUsModal isOpen={aboutUsOpen} onClose={() => setAboutUsOpen(false)} />
            <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
        </header>
    );
}
