import React, { useState } from 'react';


function Contact() {
  const [data,setData]= useState({
    name:'',
    phone:"",
    pass:"",
    email:"",
    msg: ""
  });
 
  const InputEvent = (event)=>{
    const {name,value} = event.target;

    setData((preVal)=>{
      return{
        ...preVal,
        [name]:value,
      }
    })

    }

  

  const formSubmit = (e)=>{
    e.preventDefault();
    alert(`my name is ${data.name}. my mobile number is ${data.phone}. my Email is ${data.email}`);

  };

  return (
    <>
    <div className='my-5'>
    <h1 className='text-center'>Contact Us</h1>

    </div>
    <div className='container contact-div'>
     <div className='row'>
     <div className='col-md-6 col-10 mx-auto'>
     <form onSubmit={formSubmit}>
     <div class="form-floating mb-3">
  <input type="text" className="form-control"  placeholder="name@example.com"
    name="name"
    value={data.name}
    onChange={InputEvent}
  />
  <label for="floatingInput">Full Name:</label>
</div>
     <div class="form-floating mb-3">
  <input type="number" className="form-control"  placeholder="name@example.com"
    name="phone"
    value={data.phone}
    onChange={InputEvent}
  />
  <label for="floatingInput">Mobile Number:</label>
</div>
     <div class="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
    name="email"
    value={data.email}
    onChange={InputEvent}
  />
  <label for="floatingInput">Email address</label>
</div>
<div className="form-floating">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
    name="pass"
    value={data.pass}
    onChange={InputEvent}
  />
  <label for="floatingPassword">Password</label>
</div><br/>
<div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" 
  name="msg"
  value={data.msg}
  onChange={InputEvent}></textarea>
  <label for="floatingTextarea2">Message</label>
</div><br/>
 <div class="col-auto">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
     </form>

     </div>

     </div>

    </div>
      
    </>

  )
}

export default Contact;