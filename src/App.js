import React from 'react';
import './App.css';
import Card from './card';
import {useState } from 'react'

function App() {

  let products = [
    { 
      id: 1,
      name: "Product1",
      price: 24,
      description: "lorem ipsum doloor sit amet shop cart home page",
      rating: "3"
    },
    {
      id: 2,
      name: "Product2",
      price: 245,
      description: "lorem ipsum doloor sit amet shop cart home page",
      rating: "3"
    },
    {
      id: 3,
      name: "Product3",
      price: 924,
      description: "lorem ipsum doloor sit amet shop cart home page",
      rating: "3"
    },
    {
      id: 4,
      name: "Product4",
      price: 345,
      description: "lorem ipsum doloor sit amet shop cart home page",
      rating: "3"
    },
    {
      id:5,
      name: "Product5",
      price: 500,
      description: "lorem ipsum doloor sit amet shop cart home page",
      rating: "3"
    },
    {
      id:6,
      name: "Product6",
      price: 124,
      description: "lorem ipsum doloor sit amet shop cart home page",
      rating: "3"
    },

  ]
const [cart, setCart] = useState([])
const [total, setTotal] = useState(0)


let addToCart = (product) => {
   setCart([...cart, product])
   setTotal(total + product.price)
}

let removeCart = (id) => {
   setCart(cart.filter(obj => obj.id !==id ))
}
  return (
  <> 
   <div className="container">

   <div className="row">

   <div className="col-lg-3">
  <h1 class="my-4">Shop Name</h1>
              <div class="list-group">
               {
                 cart.map((item) => {
                   return <div class="list-group-item">
                     {item.name} - ${item.price}
                     <span>
                       <button className="btn btn-sm btn-danger"
                        onclick={ () => {removeCart(item.id) }}>x</button>
                     </span>
                      </div>                     
                 })
               }              
              </div>
              <h3>Total - {total}</h3>
  </div>

  <div className="col-lg-9">
    <div class="row">
    {
      products.map((product) => {
         return <Card productData={product} handleCart={addToCart}></Card>
      })
    }     
     </div>

     
                        
   </div>

   </div>
   </div>
   </>
      
  );
}

export default App;
