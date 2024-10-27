import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { ContactData } from '../Redux/Actions/ContactActions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Form() {
   let [data, setdata] = useState({})
   let [error, seterror] = useState({})
   let navigate = useNavigate()
   let dispatch = useDispatch()
   let setinput = (e) => {
      let { name, value } = e.target
      setdata({ ...data, [name]: value })
   }
   let validation = () => {
      let err = {};
      if (!data.name) {
         err.name = "Enter Name"
      }
      if (!data.email) {
         err.email = "Enter Email"
      }
      return err
   }
   let submit = (e) => {
      e.preventDefault()
      
      let validate = validation()
      if (Object.keys(validate).length>0) {
         seterror(validate)
      }
      else {
         toast.success("Data Entered Successfully")
         setTimeout(() => {
            navigate('/showcontact')
         }, 2000);
        
         setdata({})
         seterror({})
      }

   }
   return (
      <>
         <div style={{ textAlign: "center" }}>
            <Link to={"/showcontact"} style={{ backgroundColor: "blue", color: "white", textDecoration: "none", padding: "5px 10px", borderRadius: "5px" }}>Show Contact</Link>
            <h1>Contact Form</h1>
            <form action="" style={{ textAlign: "center", padding: "10px", backgroundColor: "black", color: "white", width: "300px", borderRadius: "10px", margin: "0 auto", border: "1px solid black", fontWeight: "700" }} onSubmit={(e) => { submit(e) }} >
               <div style={{ margin: "10px" }}>
                  <span style={{ margin: "10px" }}>Name</span>
                  <input type="text" name="name" id="" placeholder='name' value={data.name ? data.name : ""} onChange={(e) => { setinput(e) }} />
                  <p style={{ color: "red" }}>{error.name}</p>
               </div>
               <div style={{ margin: "10px" }}>
                  <span style={{ margin: "10px" }}>Email</span>
                  <input type="email" name="email" placeholder='email' id="" value={data.email ? data.email : ""} onChange={(e) => { setinput(e) }} />
                  <p style={{ color: "red" }}>{error.email}</p>
               </div>
               <div>
                  <input type="submit" name="" id="" />
               </div>
            </form>
         </div>
         <ToastContainer />
      </>
   )
}

export default Form