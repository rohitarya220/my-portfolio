import React from "react";
import { motion, AnimatePresence, warning } from "framer-motion";
import { Leaf1, Leaf2 } from "../assets";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase.config";
import Alert from "./Alert";



const Contact = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })

  const [alert, setAlert] = useState({
    isAlert : false,
    message: '',
    status: null
  })

  const handleTextChange =(e) =>{
    const {name, value} = e.target ;
    // update the state for the correspondin
    setData((prevalue) => ({...prevalue, [name]: value}))
  }

  const sendMessage = async () =>{
    if(data.email === '' || data.email === null){
      // throw and alert
       setAlert({
        isAlert: true,
        message: 'Required field can not be empty',
        status: 'warning'
       })

       setInterval(() => {
        setAlert({
        isAlert: false,
        message: '',
        status: 'null'
       })
       }, 4000);
    }else{
      await addDoc(collection(db, 'messages'), {...data})
      .then(() => {
        setData({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        })
        // throw that alert message
        setAlert({
        isAlert: true,
        message: 'Thanks for contacting me...',
        status: 'success'
       })
       setInterval(() => {
        setAlert({
        isAlert: false,
        message: '',
        status: 'null'
       })
       }, 3000);
      })

      .catch((err) => {
        // throw that alert
        setAlert({
        isAlert: true,
        message: ` Error: ${err.message}`,
        status: 'danger'
       })
       setInterval(() => {
        setAlert({
        isAlert: false,
        message: '',
        status: 'null'
       })
       }, 3000);
      })
    }

  }


  return(
    <section id="contact" className=" flex items-center justify-center flex-col gap-7 ">
      {/* toast alert message */}
        <AnimatePresence>
          {alert.isAlert && (
            <Alert status={alert.status} message={alert.message}/>

          )}
        </AnimatePresence>
       {/* title */}
      <div className="w-full flex items-center justify-center py-24">
        <motion.div 
          className=" flex items-center justify-around w-52"
          initial={{ opacity: 0, width: 0}}
          animate={{ opacity: 1, width: 200}}
          exit={{ opacity: 0, width: 0}}
          transition={{ delay: 0.4}}
        >
          <img src={Leaf1} className=" w-6 h-auto object-contain" />
             <p className=" text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Contact Me</p>
          <img src={Leaf2} className=" w-6 h-auto object-contain" />

        </motion.div>
      </div>


      {/* main content */}
      <div className="w-80 flex flex-col items-center justify-start gap-4">
        <div className="w-full md:w-[600px] p-2 flex flex-col items-center justify-start gap-4 ">
          {/* input field */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
             type="text" 
             name="firstName" 
             placeholder="First Name" 
             className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none"
             value={data.firstName}
             onChange={handleTextChange}
            />
            <input 
              type="text" 
              name="lastName" 
              placeholder="First Name" 
              className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none"
              value={data.lastName}
              onChange={handleTextChange}
            />

          </div>
          {/* email filed */}
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none"
            value={data.email}
            onChange={handleTextChange}
            
          />

          {/* textarea */}
          <textarea 
            name="message" 
            id="" cols='' 
            rows='10' 
            placeholder="Message here..." 
            className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent focus:border-primary outline-none" 
            value={data.message}
            onChange={handleTextChange}
          />

          {/* button */}
          <div className="w-full flex items-center justify-center md:justify-end">
            <button onClick={sendMessage} className=" px-12 py-3 bg-gradient-to-br from-primary to-secondary rounded-md w-full md:w-auto hover:bg-gradient-to-br hover:from-black hover:to-black hover:border hover:border-primary hover:text-primary">Send</button>
          </div>
        </div>
      </div>
      
    </section>
  )
};

export default Contact;
