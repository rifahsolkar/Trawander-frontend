import React, { useState } from 'react'

export default function Hotels(props) {
    let { location, date,cclass,totalcustomer } = props;
 let from=location;
 let to=location;


    let [cinfo,setcinfo]=useState([]);
    let data =[
        { token: localStorage.getItem("token"), from, to, price: '400'*totalcustomer,date,type:"Hotel",images:"./images/kok2.jpg",typename:'HOTEL VIHAR DELUXE Opens in new window',location:'kolkata', totalcustomer},
        { token: localStorage.getItem("token"), from, to, price: '700'*totalcustomer,date,type:"Hotel",images : "./images/kok3.jpg" ,typename:'SEA WINDS',location:'kolkata',totalcustomer},
        { token: localStorage.getItem("token"), from, to, price: '600'*totalcustomer,date,type:"Hotel",images : "./images/kok4.jpg",typename:'Hotel Shanti Sea View',location:'kolkata',totalcustomer},
        { token: localStorage.getItem("token"), from, to, price: '3478'*totalcustomer,date,type:"Hotel",images : "./images/kok5.jpg",typename:'Kohinoor Samudra Beach Resort',location:'kolkata',totalcustomer},
        { token: localStorage.getItem("token"), from, to, price: '3008'*totalcustomer,date,type:"Hotel",images : "./images/chen1.jpg",typename:'The Leela Palace Chennai - Seaside Modern Palace Hotel',location:'chennai',totalcustomer},
        { token: localStorage.getItem("token"), from, to, price: '4078'*totalcustomer,date,type:"Hotel",images : "./images/chen2.jpg",typename:'The Park Chennai',location:'chennai',totalcustomer},
        { token: localStorage.getItem("token"), from, to, price: '3000'*totalcustomer,date,type:"Hotel",images : "./images/chen3.jpg",typename:'Hilton Chennai',location:'chennai',totalcustomer},
        { token: localStorage.getItem("token"), from, to, price: '4000'*totalcustomer,date,type:"Hotel",images : "./images/chen4.jpg",typename:'Hotel Pearl International',location:'chennai',totalcustomer},
        { token: localStorage.getItem("token"), from, to, price: '3400'*totalcustomer,date,type:"Hotel",images : "./images/chen5.jpg",typename:'Lemon Tree Hotel, Shimona, Chennai',location:'chennai',totalcustomer},
        { token: localStorage.getItem("token"), from, to, price: '2500'*totalcustomer,date,type:"Hotel",images : "./images/delhi1.jpg",typename:'Taj Palace, New Delhi',location:'delhi',totalcustomer},
        { token: localStorage.getItem("token"), from, to, price: '3050'*totalcustomer,date,type:"Hotel",images : "./images/delhi2.jpg",typename:'Radisson Blu Plaza Delhi Airport',location:'delhi',totalcustomer},
        { token: localStorage.getItem("token"), from, to, price: '3200'*totalcustomer,date,type:"Hotel",images : "./images/delhi3.jpg",typename:'Ajanta Hotel',location:'delhi',totalcustomer},
        { token: localStorage.getItem("token"), from, to, price: '2300'*totalcustomer,date,type:"Hotel",images : "./images/delhi4.jpg",typename:'City Park Resort',location:'delhi',totalcustomer},
        { token: localStorage.getItem("token"), from, to, price: '2000'*totalcustomer,date,type:"Hotel",images : "./images/delhi5.jpg",typename:'De Pavilion Hotel, Delhi',location:'delhi',totalcustomer},
        { token: localStorage.getItem("token"), from, to, price: '3500'*totalcustomer,date,type:"Hotel",images : "./images/pune1.jpg",typename:'Royal Orchid Golden Suites',location:'pune',totalcustomer},
        { token: localStorage.getItem("token"), from, to, price: '3200'*totalcustomer,date,type:"Hotel",images : "./images/pune2.jpg",typename:'Lemon Tree Premier Pune',location:'pune',totalcustomer},
        { token: localStorage.getItem("token"), from, to, price: '3100'*totalcustomer,date,type:"Hotel",images : "./images/pune3.jpg",typename:'The Central Park Hotel, Pune',location:'pune',totalcustomer},
        { token: localStorage.getItem("token"), from, to, price: '2800'*totalcustomer,date,type:"Hotel",images : "./images/pune4.jpg",typename:'JW Marriott Hotel Pune',location:'pune',totalcustomer},
        { token: localStorage.getItem("token"), from, to, price: '2540'*totalcustomer,date,type:"Hotel",images : "./images/pune5.jpg",typename:'Novotel Pune Nagar Road',location:'pune',totalcustomer},
        { token: localStorage.getItem("token"), from, to, price: '3150'*totalcustomer,date,type:"Hotel",images : "./images/guj1.jpg",typename:'Novotel Ahmedabad',location:'gujarat',totalcustomer},
        { token: localStorage.getItem("token"), from, to, price: '3700'*totalcustomer,date,type:"Hotel",images : "./images/guj2.jpg",typename:'Vivanta Vadodara',location:'gujarat',totalcustomer},
        { token: localStorage.getItem("token"), from, to, price: '3200'*totalcustomer,date,type:"Hotel",images : "./images/guj3.jpg",typename:'Lemon Tree Hotel, Ahmedabad',location:'gujarat',totalcustomer},
        { token: localStorage.getItem("token"), from, to, price: '2900'*totalcustomer,date,type:"Hotel",images : "./images/guj4.jpg",typename:'Taj Skyline, Ahmedabad',location:'gujarat',totalcustomer},
        { token: localStorage.getItem("token"), from, to, price: '2999'*totalcustomer,date,type:"Hotel",images : "./images/guj5.jpg",typename:'Hotel Avista Vadodara',location:'gujarat',totalcustomer},
        { token: localStorage.getItem("token"), from, to, price: '3499'*totalcustomer,date,type:"Hotel",images : "./images/goa1.jpg",typename:'Sun City Resort',location:'goa',totalcustomer},
        { token: localStorage.getItem("token"), from, to, price: '2999'*totalcustomer,date,type:"Hotel",images : "./images/goa2.jpg",typename:'Hard Rock Hotel Goa',location:'goa',totalcustomer},
        { token: localStorage.getItem("token"), from, to, price: '2599'*totalcustomer,date,type:"Hotel",images : "./images/goa3.jpg",typename:'ITC Grand Goa, a Luxury Collection Resort & Spa, Goa',location:'goa',totalcustomer},
        { token: localStorage.getItem("token"), from, to, price: '3000'*totalcustomer,date,type:"Hotel",images : "./images/goa4.png",typename:'Riva Gold Coast',location:'goa',totalcustomer},
        { token: localStorage.getItem("token"), from, to, price: '3800'*totalcustomer,date,type:"Hotel",images : "./images/goa5.jpg",typename:'Lemon Tree Hotel Candolim, Goa',location:'goa',totalcustomer},
        { token: localStorage.getItem("token"), from, to, price: '3200'*totalcustomer,date,type:"Hotel",images : "./images/Mum1.jpg",typename:'Hotel Embassy Park, Mumbai',location:'mumbai',totalcustomer},
        { token: localStorage.getItem("token"), from, to, price: '2995'*totalcustomer,date,type:"Hotel",images : "./images/mum2.jpg",typename:'The Royal Orchid',location:'mumbai',totalcustomer},
        { token: localStorage.getItem("token"), from, to, price: '3199'*totalcustomer,date,type:"Hotel",images : "./images/mum3.jpg",typename:'The Taj Mahal Palace, Mumba',location:'mumbai',totalcustomer},
        { token: localStorage.getItem("token"), from, to, price: '2599'*totalcustomer,date,type:"Hotel",images : "./images/mum4.jpg",typename:'Novotel Mumbai Juhu Beach',location:'mumbai',totalcustomer},
        { token: localStorage.getItem("token"), from, to, price: '2190'*totalcustomer,date,type:"Hotel",images : "./images/mum5.png",typename:'ITC Maratha, a Luxury Collection Hotel, Mumbai',location:'mumbai',totalcustomer},
    ]

    let [searchdata,setsearchdata]=useState([]);


const handleSubmit = async (e) => {
 let searchcd=searchdata[0];

        // console.log(JSON.stringify([{sfrom:searchcd.from, dto: searchcd.to,Customer_Name:cinfo.Customer_Name,Customer_Address:cinfo.Customer_Address,Customer_Mobile:cinfo.Customer_Mobile,cclass:cclass,Type: searchcd.type,TypeName: searchcd.typename,Quantity: searchcd.totalcustomer, price: searchcd.price,date: searchcd.date}]));

        const response = await fetch(process.env.REACT_APP_ANServer + "booking", {
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
                    <mark>if more tha one Customer enter name like rifah,afiya</mark><br/><br/>
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
            <h2 className="text-center">Hotels founds for you</h2>
            {data ? data.map((d) => {
                return (
                    <>
                    {d.from===d.location?(
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title my-2"><b>Name:</b> {d.typename}</h5>
                                <img src={d.images} alt="something went wrong" className="w-100"/>
                                <h6 className="card-subtitle mb-2 text-muted"><b>path:</b> {d.from} </h6>
                                <p className="card-text"><b>Date</b>: {d.date} </p>
                                <p className="card-text"><b>Total customer</b>: {d.totalcustomer} </p>
                                <p className="card-text"><b>Price</b>: {d.price} </p>
                                <button className="btn btn-danger"  data-toggle="modal" data-target="#trainmodal" onClick={() => setsearchdata([{ token: d.token, from: d.from, to: d.to, date: d.date, totalcustomer: d.totalcustomer, price: d.price,type:d.type, typename: d.typename }])}>Next</button>
                            </div>
                        </div>):null }
                    </>
                )
            }) : null}

        </div>
    )
}
