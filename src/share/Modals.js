import React from 'react'
import { useForm } from "react-hook-form";



export function LoginModal()
{
    return(
        <div className="modal fade" id="LoginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">User Login Page</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-2">
                        <label  class="form-label">Email address</label>
                        <input type="email" class="form-control"/>
                    </div>
                    <div className="col-12 mt-2">
                        <label  class="form-label">Password</label>
                        <input type="password" class="form-control"/>
                    </div>
                    
                </div>
            </div>


            </div>
            <div className="modal-footer justify-content-center">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancle</button>
              <button type="button" className="btn btn-success">Login</button>
            </div>
          </div>
        </div>
      </div>
    )
}











export function RegisterModal()
{
  const { register, handleSubmit } = useForm();
  const mysubmit = data => console.log(data);

    return(
      <form onSubmit={handleSubmit(mysubmit)}>
        <div className="modal fade " id="registerModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">User Registor Page</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-md-6 mt-2">
                          <label  class="form-label">Full Name</label>
                          <input type="text" class="form-control" {...register("FullName")}/>
                      </div>
                      <div className="col-md-6 mt-2">
                          <label  class="form-label">Email id</label>
                          <input type="email" class="form-control"{...register("Email")} />
                      </div>
                      <div className="col-md-6 mt-2">
                          <label  class="form-label">Phone No</label>
                          <input type="text" class="form-control" {...register("Phone No.")}/>
                      </div>
                      <div className="col-md-6 mt-2">
                        <p> <label  class="form-label">Gender</label></p>
                          <div class="form-check form-check-inline">
                              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" {...register("Female")}/>
                              <label class="form-check-label" for="inlineRadio1">Female</label>
                              </div>
                              <div class="form-check form-check-inline">
                              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" {...register("Male")}/>
                              <label class="form-check-label" for="inlineRadio2">Male</label>
                              </div>
                      </div>
                      <div className="col-md-12 mt-2">
                          <label  class="form-label">Address</label>
                        <textarea className="form-control" {...register("Address")}> type comment here...</textarea>
                      </div>
                      <div className="col-md-6 mt-2">
                          <label  class="form-label">UserName</label>
                          <input type="text" class="form-control" {...register("Username")}/>
                      </div>
                      <div className="col-md-6 mt-2">
                          <label  class="form-label">Password</label>
                          <input type="password" class="form-control"{...register("Password")}/>
                      </div>
                      
                  </div>
              </div>


              </div>
              <div className="modal-footer justify-content-center">
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancle</button>
                <button type="submit" className="btn btn-success">Register</button>
              </div>
            </div>
          </div>
        </div>

      </form>
    )
}
