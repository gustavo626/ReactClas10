import React, { useContext } from 'react' 
import { FaCartPlus } from 'react-icons/fa'
import { CartContext } from '../../context/CartContex'


export const CartWidget = () => {
    const {totalCantidad} = useContext(CartContext)

    return (
        <div>
            <FaCartPlus classname="cartwidget"/>
            <span>{totalCantidad()}</span>
        </div>
    )
}