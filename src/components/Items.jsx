import React, { useContext } from 'react'
import { HiChevronDown } from "react-icons/hi";
import { HiChevronUp } from "react-icons/hi";
import {CartContext} from './Cart'

const Items = ({id,title,price,images,description,quantity}) => {

  const {removeItem,increment,decrement} = useContext(CartContext)

  return (
    <div style={{display:'flex',width:'100%',alignItems:'center',justifyContent:'space-between',padding:'1em',backgroundColor:'lightskyblue',marginBottom:'1em'}}>
            <div style={{display:'flex',width:'70%',paddingLeft:'1em',flexWrap:'wrap'}}>
            <div>
              <img src={images} style={{width:'10em',height:'10em',paddingRight:'1em'}} alt="img" />
            </div>

            <div>
              <h3>{title}</h3>
              <h4>{description}</h4>
            </div>
            </div>

            <div style={{display:'flex',justifyContent:'space-evenly',width:'30%'}}>
            
            <div style={{display:'flex',flexDirection:'row',alignItems:'start',justifyContent:'center'}}>
              
              <input type='text' placeholder={quantity} style={{width:'1.5em',height:'4em',}}/>
               
                <span style={{display:'flex',flexDirection:'column'}}>
                  <HiChevronUp onClick={() => increment(id)} style={{fontSize:'30',cursor:'pointer'}} />
                  <HiChevronDown onClick={() => decrement(id)} style={{fontSize:'30',cursor:'pointer'}} />
                </span>

            </div>

            <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
              
              <h3>${price}</h3>
              <h3 onClick={() => removeItem(id)} style={{color:'red',cursor:'pointer'}}>REMOVE</h3>
            </div>
            </div>
    </div>
    
  )
}

export default Items