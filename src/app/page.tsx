'use client'
import Product from './frontend/product/page'
import Header from './frontend/Header/page'
import React, { useEffect, useState } from "react";
import axios from "axios";




export default function Home() {
  const [users, setUsers] = useState([]);
  

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(response => {
        setUsers(response.data.products);
      })
      .catch(error => {
        console.error("Error fetching users:", error);
      });
  }, []);
  
  const categories =new Set(users.map((a:any) =>a.category));
  

 
  return (
    <>
  <Header />
    <div className=''>

    {Array.from(categories).map((category:any) => 
    <div>
      <p className='text-center text-lg font-bold mt-2 border border-red-400 bg-orange-600 p-2 uppercase'>{category}</p>
      <div className='grid  
      sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-flow-row gap-1 p-1'>
    {users.map((user:any) => (
      // console.log(user)
      (user.category === category) &&
      <div className='h-60 mb-2  border rounded-lg bg-white ' >
      <Product key={user.id} props={user} />
      </div>
      ))}
      </div>
      </div>
    )}
      </div>
      </>

  
  )
}
