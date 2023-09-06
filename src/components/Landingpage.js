import React from 'react'

const carddata=[
    {
        
        c_head:1,
        c_title:'Total Visitors',
        c_text:'Current Day'
    },
    {
        c_head:2,
        c_title:'Month Visitors',
        c_text:'Current Month'
    },
    {
        c_head:3,
        c_title:'Total Visitors',
        c_text:'Current Year'
    },
    {
        c_head:4,
        c_title:'Total Visitors',
        c_text:''
    },
    
]
console.log(carddata);

const tabledata=[
    {
        sid:1,
        first:'kumar',
        last:'singh',
        email:'kumar@gmail.com',
        phone:'54785478'

    },
    {
        sid:2,
        first:'kumar',
        last:'singh',
        email:'kumar@gmail.com',
        phone:'54785478'
    },
    {
        sid:3,
        first:'kumar',
        last:'singh',
        email:'kumar@gmail.com',
        phone:'54785478'
    },
    {
        sid:4,
        first:'kumar',
        last:'singh',
        email:'kumar@gmail.com',
        phone:'54785478'
    },
    {
        sid:5,
        first:'kumar',
        last:'singh',
        email:'kumar@gmail.com',
        phone:'54785478'
    },
    {
        sid:6,
        first:'kumar',
        last:'singh',
        email:'kumar@gmail.com',
        phone:'54785478'
    },
    {
        sid:7,
        first:'kumar',
        last:'singh',
        email:'kumar@gmail.com',
        phone:'54785478'
    },
    {
        sid:8,
        first:'kumar',
        last:'singh',
        email:'kumar@gmail.com',
        phone:'54785478'
    },
    {
        sid:9,
        first:'kumar',
        last:'singh',
        email:'kumar@gmail.com',
        phone:'54785478'
    },
    {
        sid:10,
        first:'kumar',
        last:'singh',
        email:'kumar@gmail.com',
        phone:'54785478'
    },
    {
        sid:11,
        first:'kumar',
        last:'singh',
        email:'kumar@gmail.com',
        phone:'54785478'
    }
]

export default function Landingpage() {
  return (
    <>
    <div className='container-fluid'>
        <div className="row mt-3">
            
                
                    {carddata.map((c)=>{
                        return(
                            <>
                            <div className="col-md-3">
                                <div className="card shadow text-bg-success mb-3">
                                    <div className="card-header p-3 fs-3">
                                        {c.c_head}.
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title fs-3">{c.c_title}</h5>
                                        <p className="card-text fs-5">{c.c_text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </>

                        )
                    })}     
            
        </div>

        {/* Table start */}
        <div className="row ">
            <div className="col-12">
                <div className="table-responsive">
                <table className="table  text-center ">
                    <thead className='table-dark'>
                        <tr>
                            <th scope='col'>SNO</th>
                            <th scope = "col">First</th>
                            <th scope = "col">Last</th>
                            <th scope = "col">Email id</th>
                            <th scope = "col">Phone No</th>
                            <th scope = "col">Actions</th>

                        </tr>
                    </thead>
                    {/* Dynamic Data Using Data Binding Through Maping */}

                    {tabledata.map((t)=>{
                        return(
                            <tbody className=' table-light'>  
                            <tr>
                            <th scope='row'>{t.sid}</th>
                            <td>{t.first}</td>
                            <td>{t.last}</td>
                            <td>{t.email}</td>
                            <td>{t.phone}</td>
                            <td>
                               <button className='btn btn-danger btn-sm me-2'>Del</button>
                               <button className='btn btn-success btn-sm me-2'>Edit</button>
                               <button className='btn btn-warning btn-sm'>View</button>
                            </td>
                            </tr>
                            </tbody>

                        )
                    })}

                </table>
                </div>
            </div>
        </div>
      
    </div>
    

   
    </>
  )
}
