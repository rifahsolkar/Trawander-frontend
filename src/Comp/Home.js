import React, { useState } from 'react'
import Flight from './Flight';
import Hotels from './Hotels';
import Cab from './Cab';
import Train from './Train';
import Bus from './Bus';

export default function Home() {

  const [bookingscreens, setbookingscreen] = useState("flight");

  function bookingscreen(s) {
    setbookingscreen(s)

  }

  const [fdata, setfdata] = useState("");
 const [hdata, sethdata] = useState("");
  const [tdata, settdata] = useState("");
  const [cdata, setcdata] = useState("");
  const [bdata, setbdata] = useState("");



  function searchflight() {
    var from = document.getElementById('select11').value;
    var to = document.getElementById('select12').value;
    var date = document.getElementById('select13').value;
    var cclass = document.getElementById('select14').value;
    var totalcustomer = document.getElementById('select15').value;
    setfdata({ from, to, date, cclass, totalcustomer })

    //disable other prvious search
    settdata("");
    sethdata("");
    setcdata("");
    setbdata("");

    console.log(fdata);
  }

  function searchhotels() {
    var location = document.getElementById('select32').value;
    var date = document.getElementById('select33').value;
    var cclass = document.getElementById('select34').value;
    var totalcustomer = document.getElementById('select35').value;
    sethdata({ location, date, cclass, totalcustomer })

       //disable other prvious search
       setfdata("");
       settdata("");
       setcdata("");
       setbdata("");
    console.log(hdata);
  }


  function searchtrain() {
    var from = document.getElementById('select21').value;
    var to = document.getElementById('select22').value;
    var date = document.getElementById('select23').value;
    var cclass = document.getElementById('select24').value;
    var totalcustomer = document.getElementById('select25').value;
    settdata({ from, to, date, cclass, totalcustomer })

         //disable other prvious search
         setfdata("");
         sethdata("");
         setcdata("");
         setbdata("");
    console.log(tdata);
  }

  function searchcab() {
    var from = document.getElementById('select41').value;
    var to = document.getElementById('select42').value;
    var date = document.getElementById('select43').value;
    var cclass = document.getElementById('select44').value;
    var totalcustomer = document.getElementById('select45').value;
    setcdata({ from, to, date, cclass, totalcustomer })

         //disable other prvious search
         setfdata("");
         settdata("");
         sethdata("");
         setbdata("");
    console.log(cdata);
  }

  function searchbus() {

    var from = document.getElementById('select51').value;
    var to = document.getElementById('select52').value;
    var date = document.getElementById('select53').value;
    var cclass = document.getElementById('select54').value;
    var totalcustomer = document.getElementById('select55').value;
    setbdata({ from, to, date, cclass, totalcustomer })

         //disable other prvious search
         setfdata("");
         settdata("");
         sethdata("");
         setcdata("");
    console.log(bdata);
  }


  return (
    <div className="container my-2">

      <div id="carouselExampleIndicators" className="carousel slide"  data-ride="carousel">
        <ol className="carousel-indicators ">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="./images/1.jpg" alt="First slide" />
            <div className="carousel-caption d-none d-md-block">
            <h5>Book your Trains </h5>
            <p className="bg-secondary p-4 fs-2">Explore you wanderlust heart with TraWander</p>

            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="./images/2.jpg" alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Book your hotels </h5>

              <p className="bg-secondary p-4 fs-2">Explore you wanderlust heart with TraWander</p>
         
            </div>
          </div>
          

          <div className="carousel-item">
            <img className="d-block w-100" src="./images/3.jpg" alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">
            <h5>Book your Flights </h5>
            <p className="bg-secondary p-4 fs-2">Explore you wanderlust heart with TraWander</p>

            </div>

            
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>


      {/* get icons from here https://fontawesome.com/v4.7/icons/ */}
      <div className="card my-2 shadow mb-5 bg-white rounded">
        <div className="card-body">
          <p className="card-title text-center shadow mb-5 rounded">Book your ticket with TraWander</p>
          <div className="icons text-center">
            <i className="fa fa-plane fa-2x cursor-pointer" aria-hidden="true" onClick={() => bookingscreen('flight')}></i>
            <i className="fa fa-bed fa-2x cursor-pointer" aria-hidden="true" onClick={() => bookingscreen('hotel')}></i>
            <i className="fa fa-train fa-2x cursor-pointer" aria-hidden="true" onClick={() => bookingscreen('train')}></i>
            <i className="fa fa-taxi fa-2x cursor-pointer" aria-hidden="true" onClick={() => bookingscreen('cab')}></i>
            <i className="fa fa-bus fa-2x cursor-pointer" aria-hidden="true" onClick={() => bookingscreen('bus')}></i> </div>
          <hr />


          {bookingscreens === 'flight' ? (
            <>
              <p className="searchText"><strong>Search For Cheap Flight with TraWander</strong></p>
              <div className="row">
                <div className="col-sm-6"> <select className="browser-default custom-select mb-4" id="select11">
                  <option value="not selected" disabled="" selected>From City/Flight</option>
                  <option value="New Delhi">New Delhi</option>
                  <option value="Mumabi-Chhatrapati Shivaji International Airport">Mumabi-Chhatrapati Shivaji International Airport</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Ratnagiri">Ratnagiri</option>
                </select> </div>
                <div className="col-sm-6"> <select className="browser-default custom-select mb-4" id="select12">
                  <option value="not selected" disabled="" selected>To City/Flight</option>
                  <option value="New Delhi">New Delhi</option>
                  <option value="Mumabi-Chhatrapati Shivaji International Airport">Mumabi-Chhatrapati Shivaji International Airport</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Ratnagiri">Ratnagiri</option>
                </select> </div>
              </div>
              <div className="row mt-4">
                <div className="col-sm-6"> <input type="date" className="browser-default custom-select mb-4" id="select13" /></div>
              </div>

              <div className="row">

                <div className="col-sm-4">Class:<select className="browser-default custom-select mb-4" id="select14">
                  <option value="Economy/Premium Economy" selected>Economy/Premium Economy</option>
                  <option value="Premium Economy">Premium Economy</option>
                  <option value="Business">Business</option>
                </select> </div>

                <div className="col-sm-4">Total customer:<select className="browser-default custom-select mb-4" id="select15">
                  <option value="1" selected>1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select> </div>
              </div> <label htmlFor="searchlist"><button className="btn btn-primary float-right mt-5" onClick={searchflight}>Find Flight</button></label>
            </>
          ) : null}


          {bookingscreens === 'hotel' ? (
            <>
            <p className="searchText"><strong>Search For Cheap Hotels with TraWander</strong></p>
            <div className="row">
            <label> location: <input placeholder="Enter location" type="text" id="select32"/></label>
            </div>
            <div className="row mt-4">
              <div className="col-sm-6"> <input type="date" className="browser-default custom-select mb-4" id="select33" /></div>
            </div>

            <div className="row">

              <div className="col-sm-4">Class:<select className="browser-default custom-select mb-4" id="select34">
                <option value="AC" selected>Non AC</option>
                <option value="AC">AC</option>
              </select> </div>

              <div className="col-sm-4">Total customer:<select className="browser-default custom-select mb-4" id="select35">
                <option value="1" selected>1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select> </div>
            </div> <label htmlFor="searchlist"><button className="btn btn-primary float-right mt-5" onClick={searchhotels}>Find hotels</button></label>
          </>
          ) : null}

          {bookingscreens === 'train' ? (
            <>
              <p className="searchText"><strong>Search For Cheap Trains with TraWander</strong></p>
              <div className="row">
                <div className="col-sm-6"> <select className="browser-default custom-select mb-4" id="select21">
                  <option value="not selected" disabled="" selected>From City/Train</option>
                  <option value="New Delhi">New Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Ratnagiri">Ratnagiri</option>
                </select> </div>
                <div className="col-sm-6"> <select className="browser-default custom-select mb-4" id="select22">
                  <option value="not selected" disabled="" selected>To City/Train</option>
                  <option value="New Delhi">New Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Ratnagiri">Ratnagiri</option>
                </select> </div>
              </div>
              <div className="row mt-4">
                <div className="col-sm-6"> <input type="date" className="browser-default custom-select mb-4" id="select23" /></div>
              </div>

              <div className="row">

                <div className="col-sm-4">Class:<select className="browser-default custom-select mb-4" id="select24">
                  <option value="Seater" selected>Seater</option>
                  <option value="sleeper">sleeper</option>
                  <option value="AC2 tier">AC2 Tier</option>
                  <option value="AC3 Tier">AC3 Tier</option>
                </select> </div>

                <div className="col-sm-4">Total customer:<select className="browser-default custom-select mb-4" id="select25">
                  <option value="1" selected>1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select> </div>
              </div> <label htmlFor="searchlist"><button className="btn btn-primary float-right mt-5" onClick={searchtrain}>Find Train</button></label>
            </>
          ) : null}


{bookingscreens === 'cab' ? (
            <>
              <p className="searchText"><strong>Search For Cheap Cabs with TraWander</strong></p>
              <div className="row">
                <div className="col-sm-6"> <select className="browser-default custom-select mb-4" id="select41">
                  <option value="not selected" disabled="" selected>From City</option>
                  <option value="New Delhi">New Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Ratnagiri">Ratnagiri</option>
                </select> </div>
                <div className="col-sm-6"> <select className="browser-default custom-select mb-4" id="select42">
                  <option value="not selected" disabled="" selected>To City</option>
                  <option value="New Delhi">New Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Ratnagiri">Ratnagiri</option>
                </select> </div>
              </div>
              <div className="row mt-4">
                <div className="col-sm-6"> <input type="date" className="browser-default custom-select mb-4" id="select43" /></div>
              </div>

              <div className="row">

                <div className="col-sm-4">Class:<select className="browser-default custom-select mb-4" id="select44">
                <option value="Seater" selected>Seater</option>
                  <option value="sleeper">sleeper</option>
                  <option value="AC2 tier">AC2 Tier</option>
                  <option value="AC3 Tier">AC3 Tier</option>
                </select> </div>

                <div className="col-sm-4">Total customer:<select className="browser-default custom-select mb-4" id="select45">
                  <option value="1" selected>1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select> </div>
              </div> <label htmlFor="searchlist"><button className="btn btn-primary float-right mt-5" onClick={searchcab}>Find Cab</button></label>
            </>
          ) : null}

{bookingscreens === "bus" ? (
            <>
              <p className="searchText"><strong>Search For Cheap BUS with TraWander</strong></p>
              <div className="row">
                <div className="col-sm-6"> <select className="browser-default custom-select mb-4" id="select51">
                  <option value="not selected" disabled="" selected>From City</option>
                  <option value="New Delhi">New Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Ratnagiri">Ratnagiri</option>
                </select> </div>
                <div className="col-sm-6"> <select className="browser-default custom-select mb-4" id="select52">
                  <option value="not selected" disabled="" selected>To City</option>
                  <option value="New Delhi">New Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Ratnagiri">Ratnagiri</option>
                </select> </div>
              </div>
              <div className="row mt-4">
                <div className="col-sm-6"> <input type="date" className="browser-default custom-select mb-4" id="select53" /></div>
              </div>

              <div className="row">

                <div className="col-sm-4">Class:<select className="browser-default custom-select mb-4" id="select54">
                <option value="Seater" selected>Seater</option>
                  <option value="sleeper">sleeper</option>
                  <option value="AC2 tier">AC2 Tier</option>
                  <option value="AC3 Tier">AC3 Tier</option>
                </select> </div>

                <div className="col-sm-4">Total customer:<select className="browser-default custom-select mb-4" id="select55">
                  <option value="1" selected>1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select> </div>
              </div> <label htmlFor="searchlist"><button className="btn btn-primary float-right mt-5" onClick={searchbus}>Find Bus</button></label>
            </>
          ) : null}
        </div>
      </div>
      <div id="searchlist">

      {fdata !== '' ? (<>
          <Flight from={fdata.from} to={fdata.to} date={fdata.date} cclass={fdata.cclass} totalcustomer={fdata.totalcustomer} />
        </>) : null}

        {hdata !== '' ? (<>
       <h2 className="text-center"> This tab is under maintenance will work on it</h2>
          <Hotels location={hdata.location} date={hdata.date} cclass={hdata.cclass} totalcustomer={hdata.totalcustomer} />
        </>) : null}

        {tdata !== '' ? (<>
          <Train from={tdata.from} to={tdata.to} date={tdata.date} cclass={tdata.cclass} totalcustomer={tdata.totalcustomer} />
        </>) : null}

        {cdata !== '' ? (<>
          <Cab from={cdata.from} to={cdata.to} date={cdata.date} cclass={cdata.cclass} totalcustomer={cdata.totalcustomer} />
        </>) : null}

        
        {bdata !== '' ? (<>
          <Bus from={bdata.from} to={bdata.to} date={bdata.date} cclass={bdata.cclass} totalcustomer={bdata.totalcustomer} />
        </>) : null}

      </div>
     

    </div>
  )
}
