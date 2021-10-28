import React, { useEffect, useState } from 'react'

import {
    useParams
} from "react-router-dom";

const Print = () => {
    const [prindata, setprindata] = useState([]);
    let { id } = useParams();
    useEffect(() => {
        let getMybooking = async () => {
           // alert(id)
            const response = await fetch( process.env.REACT_APP_ANServer + "printbooking/" + id, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                },
            });
            const json = await response.json()
            console.log(json)
            setprindata(json);
        }
        getMybooking();
    }, [id])




    return (
        <div className="container my-2">
            <h1>Ticket Book With TraWander</h1>
            {prindata ?
                prindata.map((d) => {
                    return (
                        <>
                            <div class="list-group my-2">
                                <span href="/" className="list-group-item list-group-item-action flex-column align-items-start">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">
                                            {d.sfrom} to  {d.dto}   </h5>
                                        <small>{d.date}</small>

                                    </div>

                                    <p class="mb-1"><b>Customer Name: </b><i>{d.Customer_Name}</i> Happy Jouney :)</p>
                                    <p class="mb-1"><b>Customer Address: </b><i>{d.Customer_Address}</i></p>
                                    <p class="mb-1"><b>Customer Mobile no: </b><i>{d.Customer_Mobile}</i></p>
                                     <small> <b>Journey name: </b>{d.TypeName}</small><br/>
                                    <small> <b>Journey type: </b>{d.Type}</small><br />
                                    <small> <b>Class: </b>{d.cclass}</small><br />
                                    <small> <b>No of customer: </b>{d.Quantity}</small><br />
                                    <small> <b>date: </b>{d.date}</small><br />
                                    <b>Price: </b>{d.price}
                                </span>
                                <button type="button" className="btn btn-success f-right" onClick={() => window.print()}>Print</button>
                            </div>
                            <h4>office agent will collect the booking payment via the call</h4>
                        </>
                    )
                }) : "<h1>No Bookings are available</h1>"}


        </div>
    )
}

export default Print;