import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Order = () => {
    //Task:Je user logged in asey shudu tar order history dekhano lagbey
    //jei user logged in asey tar information pawar way
    const [user, loading, error] = useAuthState(auth);

    const [orders,setOrders]=useState([])
    useEffect(()=>{
        const email=user.email;
        //console.log(email)

        //axios async-await use kora hocchey inplace of fetch (fetch use korelo kaj hobey)
        const getOrders=async()=>{
            const url=`http://localhost:5000/order?email=${email}`         //http://localhost:5000/order?email=shahrukhamin27@gmail.com ai api tey click korley 'shahrukhamin27@gmail.com' user a order data peye jabo
            const {data}=await axios.get(url)
            setOrders(data)
        }
        getOrders();  //function k call na korley kinto kaj korbey na

    },[])
    
    return (
        <div>
            <p>YOUR ORDERS:{orders.length}</p>
        </div>
    );
};

export default Order;