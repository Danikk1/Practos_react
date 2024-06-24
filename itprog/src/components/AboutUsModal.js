import React from 'react';

export default function AboutUsModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <h2>Про нас</h2>
                <p>Наша компания уже много лет занимается продажей спортивного питания. Мы предлагаем нашим клиентам только самые качественные и проверенные продукты, которые помогут вам достичь ваших спортивных целей. Наш ассортимент включает протеины, аминокислоты, витамины и многие другие добавки от ведущих мировых производителей.</p>
                <button onClick={onClose}>Закрыть</button>
            </div>
        </div>
    );
}
