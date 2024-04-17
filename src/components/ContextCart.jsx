
import React, { useContext, useState } from 'react'
import { IoCartSharp } from "react-icons/io5";
import Items from './Items';
import './style.css'
import {CartContext} from './Cart'

const ContextCart = () => {
   
    const { item, clearCart, totalItem, totalAmount } = useContext(CartContext)
    
  return (
    <>

    <header className='cart' style={{backgroundColor:'lightsalmon'}}>
        <h3 style={{paddingLeft:'5em',color:'brown',}}>Home</h3>
        <div className='icon' ><IoCartSharp style={{fontSize:'30', cursor:'pointer',color:'brown'}}/><h4 style={{color:'black',fontSize:'1.5em'}}>{totalItem}</h4></div>
    </header>
          
      <section style={{backgroundColor:'#F6F5F8',padding:'1em'}}>
       
          <div style={{textAlign:'center',backgroundColor:'#F6F5F8'}}>
            <h2 style={{color:'brown'}}>Cart</h2>
            <h3>You Have <span>{totalItem}</span> Item In Cart</h3>
          </div>

          <hr />
         
          <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',flexDirection:'column ', backgroundColor:'#F6F5F8'}}>
            {
              item.map((currentItem)=>{
                return <Items key={currentItem.id} {...currentItem}/>
              })
            }
          </div>
        
          <hr />
            <div style={{textAlign:'center'}}>
                <button onClick={clearCart} style={{backgroundColor:'red',color:'white' }}>CLEAR CART</button>
            </div>
          <hr />

          <div style={{backgroundColor:'#F6F5F8'}}>
            <h3 style={{display:'flex',justifyContent:'space-around'}}>TOTAL: <span>${totalAmount}</span></h3>
            <h3 style={{display:'flex',justifyContent:'space-around'}}>SHIPPING: <span>FREE</span></h3>
          </div>
          <hr />

      </section>
    </>
  )
}

export default ContextCart