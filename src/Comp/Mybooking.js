import React,{useEffect,useState} from 'react'

import {
  Link
  } from "react-router-dom";

const Mybooking = (props) => {
const [allbooking,setallbooking]=useState([]);
useEffect(() => {
let getMybooking = async() => {
    const response = await fetch( process.env.REACT_APP_ANServer + "fetchbooking", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth-token':localStorage.getItem('token')
        },
    });
    const json = await response.json()
    setallbooking(json);
}
getMybooking();
    }, [])


    async function handlecancel(id)
    {
      
        const response = await fetch( process.env.REACT_APP_ANServer + "cancelbooking/"+id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token':localStorage.getItem('token')
            },
        });
        const json = await response.json()
        if(json.msg)
        {
            alert(json.msg);
            window.open("/Mybooking","_self");
        }
        else{
            alert(json.error);
            
        }

    }
 
    return (
        <div className="container my-2">
            <h1>Your Bookings</h1>
           {allbooking?
           allbooking.map((d)=>{
                return (
   <>
<div class="list-group my-2">
  <span  href="/" className="list-group-item list-group-item-action flex-column align-items-start">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">
      {d.sfrom} to  {d.dto}   </h5>
      <small>{d.date}</small>
      <button type="button" className="btn btn-danger f-right" onClick={()=>handlecancel(d.id)}>Cancel</button>
 <Link to={`/print/${d.id}`} target="_blank" type="button" className="btn btn-success f-right">Print</Link>
 

    </div>
    <p class="mb-1"><b>Customer Name: </b><i>{d.Customer_Name}</i> Happy Journey :)</p>
    <p class="mb-1"><b>Customer Address: </b><i>{d.Customer_Address}</i></p>
    <p class="mb-1"><b>Customer Mobile no: </b><i>{d.Customer_Mobile}</i></p>
    <small> <b>Journey name: </b>{d.TypeName}</small><br/>
    <small> <b>Journey type: </b>{d.Type}</small><br/>
    <small> <b>Class: </b>{d.cclass}</small><br/>
    <small> <b>No of customer: </b>{d.Quantity}</small><br/>
    <small> <b>date: </b>{d.date}</small><br/>
    <b>Price: </b>{d.price}
  </span>
</div>
    </>
           )}):"<h1>No Bookings are available</h1>"}


        </div>
    )
}

export default Mybooking;