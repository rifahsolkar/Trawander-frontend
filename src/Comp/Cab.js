import React, { useState } from 'react'

export default function Cab(props) {
    let { from, to, date,cclass,totalcustomer } = props;
   

    let [cinfo,setcinfo]=useState([]);
    let data =[
        { token: localStorage.getItem("token"), from, to, price: '2000'*totalcustomer,date,type:"Cab",typename:'OLA',totalcustomer},
        { token: localStorage.getItem("token"), from, to, price: '400'*totalcustomer,date,type:"Cab",typename:'UBER',totalcustomer},
        { token: localStorage.getItem("token"), from, to, price: '700'*totalcustomer,date,type:"Cab",typename:'AN',totalcustomer},
        { token: localStorage.getItem("token"), from, to, price: '600'*totalcustomer,date,type:"Cab",typename:'Tutari Express',totalcustomer},

]

    let [searchdata,setsearchdata]=useState([]);


const handleSubmit = async (e) => {
 let searchcd=searchdata[0];

        // console.log(JSON.stringify([{sfrom:searchcd.from, dto: searchcd.to,Customer_Name:cinfo.Customer_Name,Customer_Address:cinfo.Customer_Address,Customer_Mobile:cinfo.Customer_Mobile,cclass:cclass,Type: searchcd.type,TypeName: searchcd.typename,Quantity: searchcd.totalcustomer, price: searchcd.price,date: searchcd.date}]));

        const response = await fetch( process.env.REACT_APP_ANServer + "booking", {
            method: 'POST',
            headers: {
                'auth-token': data[0].token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({sfrom:searchcd.from, dto: searchcd.to,Customer_Name:cinfo.Customer_Name,Customer_Address:cinfo.Customer_Address,Customer_Mobile:cinfo.Customer_Mobile,cclass:cclass,Type: searchcd.type,TypeName: searchcd.typename,Quantity: searchcd.totalcustomer, price: searchcd.price,date: searchcd.date})
        });
        const json = await response.json()
        console.log(json);

        if (json.msg) {
            alert(json.msg);
            window.open("/Mybooking","_self");

        }
        else {
            alert(json.error);
            window.open("/login","_self");
        }
    }
  
    const onChange = (e) => {
      setcinfo({...cinfo, [e.target.name]: e.target.value})
    }
 
    return (
        <div>



<div class="modal fade" id="trainmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Customer information</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
   
      <div class="modal-body">
                <div className="mb-3">
                    <mark>if more tha one Customer enter name like Rifah,Afiya</mark><br/><br/>
                    <label htmlFor="cname" className="form-label">Customer Name</label>
                    <input type="text" placeholder="Enter Customer Name here" className="form-control" onChange={onChange} name="Customer_Name" />
                </div>
                <div className="mb-3">
                <label htmlFor="cnamea" className="form-label">Customer Address</label>
                    <input type="text" placeholder="Enter Customer Address here" className="form-control" onChange={onChange} name="Customer_Address" />
                </div>
                <div className="mb-3">
                <label htmlFor="cnamem" className="form-label">Customer Mobile no</label>
                    <input type="text" placeholder="Enter Customer Mobile no here" className="form-control" onChange={onChange} name="Customer_Mobile" />
                </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" className="btn btn-primary" onClick={() => handleSubmit()}>Book now</button>
     
      </div>
     
    </div>
    
  </div>
</div>
            <h2 className="text-center">Cab founds for you</h2>
            {data ? data.map((d) => {
                return (
                    <>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title my-2"><b>Name:</b> {d.typename}</h5>
                                <h6 className="card-subtitle mb-2 text-muted"><b>path:</b> {d.from} to {d.to} </h6>
                                <p className="card-text"><b>Date</b>: {d.date} </p>
                                <p className="card-text"><b>Total customer</b>: {d.totalcustomer} </p>
                                <p className="card-text"><b>Price</b>: {d.price} </p>
                                <button className="btn btn-danger"  data-toggle="modal" data-target="#trainmodal" onClick={() => setsearchdata([{ token: d.token, from: d.from, to: d.to, date: d.date, totalcustomer: d.totalcustomer, price: d.price,type:d.type, typename: d.typename }])}>Next</button>
                            </div>
                        </div>
                    </>
                )
            }) : null}

        </div>
    )
}
