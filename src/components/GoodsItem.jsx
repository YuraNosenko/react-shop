import React, { useContext } from 'react';
import { ShopContext } from '../context';

const GoodsItem = (props) => {
    const { id, name, description, price, full_background } = props;

    const { addOrderToCart } = useContext(ShopContext);

    return (
        <div className='card' id={id}>
            <div className='card-image'>
                {full_background === 'N/A' ? (
                    <img
                        src={`https://via.placeholder.com/300x400?text=${name}`}
                        alt={name}
                    />
                ) : (
                    <img src={full_background} alt={name} />
                )}
            </div>
            <div className='card-content'>
                <span className='card-title'>{name}</span>
                <p>{description}</p>
            </div>
            <div className='card-action'>
                <button
                    className='btn'
                    onClick={() => addOrderToCart({ id, name, price })}
                >
                    Buy
                </button>
                <span className='rigth price' style={{ fontSize: '1.8rem' }}>
                    {price}
                </span>
            </div>
        </div>
    );
};

export default GoodsItem;
