import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_bg6b82q', 'template_6vk41r8', e.target, '8Bm9LLOauc_yVprSD')
            .then((result) => {
                console.log('Email successfully sent!');
            }, (error) => {
                console.log('Failed to send email:', error.text);
            });
        setFormData({ name: '', email: '', message: '' });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlayo" onClick={onClose}>
            <div className="modal-contento" onClick={e => e.stopPropagation()}>
                <button onClick={onClose} className="close-buttono">Закрыть</button>
                <h2>Контакты</h2>
                <p>Наш номер телефона: +7 988 944 9875</p>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div>
                        <label htmlFor="name">Имя:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Электронная почта:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Сообщение:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-buttono">Отправить</button>
                </form>
                
            </div>
        </div>
    );
}
