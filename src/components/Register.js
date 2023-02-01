import React, { useState } from "react"
import UserApi from '../API/UserApi'
import { toast } from 'react-toastify'

function Register(props) {
    const [user,setUser] = useState({
        name :'',
        email:"",
        mobile:"",
        country:"",
        state:"",
        password:""
    })

    const submitHandler = (e) => {
        try {
         e.preventDefault();
         console.log("user =", user);
            UserApi.create(user).then(res => {
                toast.success("user registered successfully and data stored in json format at http://localhost:5600");
               // window.location.href = "/home";
            }).catch(err => toast.error(err.message))
        } catch(err) {
            toast.error(err.meesage)
        }
    }

    const readValue = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const resetHandler = (e) => {
        e.preventDefault();
        setUser({
                name :'',
                email:"",
                mobile:"",
                country:"",
                state:"",
                password:""
        })
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3">Register</h3>
                </div>
            </div>
            
            <div className="row">
                <div className="col-md-6 offset-md-3">
                   <div className="card">
                       <div className="card-body">
                            <form onSubmit={submitHandler} onReset={resetHandler}>
                        <div className="form-group mt-2 mb-3">
                            <label htmlFor="Name">Name</label>
                            <input type="text" name="name" value={user.name} onChange={readValue}  className="form-control" required placeholder="Enter Name" />
                        </div>
                        
                        <div className="form-group mt-2 mb-2">
                            <label htmlFor="Email">Email</label>
                            <input type="email" name="email" id="email" value={user.email} onChange={readValue}  className="form-control" placeholder="Enter Email" required />
                        </div>

                        <div className="form-group mt-2 mb-2">
                            <label htmlFor="mobile">Mobile</label>
                            <input type="number" name="mobile" id="mobile"  value={user.mobile} onChange={readValue}  className="form-control" placeholder="Enter Mobile Number" required />
                        </div>

                        <div className="form-group mt-2 mb-2">
                            <label htmlFor="Country">Country</label>
                            <input type="text" name="country" id="country"  value={user.country} onChange={readValue}  className="form-control" placeholder="Enter Your Country" required />
                        </div>

                        <div className="form-group mt-2 mb-2">
                            <label htmlFor="State">State</label>
                            <input type="text" name="state" id="state"  value={user.state} onChange={readValue}  className="form-control" placeholder="Enter Your State" required />
                        </div>
                        <div className="form-group mt-2 mb-2">
                            <label htmlFor="Password">Password</label>
                            <input type="password" name="password" id="password"  value={user.password} onChange={readValue} className="form-control" placeholder="Enter Password" required />
                        </div>
                        
                        <div className="form-group mt-2 mb-2">
                             <input type="submit" value="Register" className="btn btn-success" />
                             <input type="reset" value="Clear" className="btn btn-warning float-end" />
                        </div>
                       
                    </form>
                </div>
            </div>  
        </div>
                
    </div>
</div>
    )
}

export default Register