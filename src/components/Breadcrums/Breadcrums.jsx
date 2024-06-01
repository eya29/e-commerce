import React from 'react'
import './Breadcrums.css';
import arrow_icon from '../../assets/right-arrow.png'

const Breadcrums = (props) => {
    const {product} = props;
    console.log('Product:', props.product);
    console.log('Category:', props.product.category);
    console.log('Name:', props.product.name);
  return (
    <div className='breadcrum'>
        HOME <img src={arrow_icon} alt=''/> SHOP <img src={arrow_icon}/> {product.category} <img src={arrow_icon}/> {product.name} <img src={arrow_icon}/> 

    </div>
  )
}

export default Breadcrums