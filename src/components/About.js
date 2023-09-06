import React, { Fragment, useState } from 'react';

function Myaboutpage() {
const [statevariable, statefunction] = useState('kumarpppppppppppp');
const [a,b]=useState(20);

const abc = ()=>{

  statefunction("this is change value of state");
}


const mychange = (c)=>{
  b(c.target.value);
  console.log(c);
}

  return (
    <Fragment>
    <div>Myaboutpage {statevariable}</div>
    <button type='buttton' className='btn btn-outline-danger m-5' onClick={abc}>click to run function</button>
    <button type='buttton' className='btn btn-outline-danger m-5' >click to run function</button>
    <input type='text' value={a} onInput={mychange}/>

    </Fragment>
  )
}

export default Myaboutpage