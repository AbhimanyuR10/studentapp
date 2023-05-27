import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
const Add = (props) => {

  var[datas,setDatas] = useState(props.data);

  const inputHandler = (e) =>

  {
    const{name,value} = e.target
    setDatas((datas)=>({...datas,[name]:value}))

    console.log(datas)
  }

  const addValues = () =>{
    console.log("Clicked",datas)
    if(props.method === "post"){
    axios.post("http://localhost:8080/create",datas)
    .then((response)=>{

      console.log("data",response.data)
      alert("Successfully added data!")
    })
    .catch(err=>console.log(err))}
      
    if(props.method === "put"){
      axios.put("http://localhost:8080/edit/"+datas._id,datas)
    .then((response)=>{

      console.log(" put data",response.data)
      alert("Successfully added data!")
      window.location.reload(false)
    })
    .catch((err)=>{
      console.log(err)
    });
  }
}


  return (
    <div>
      <br></br><br></br><br></br><br></br>
      <h1>Name:<TextField id="filled-basic" name='sname' value={datas.sname} label="Enter Name" variant="filled" onChange={inputHandler}/></h1> <br />
      <h1>Grade:<TextField id="filled-basic" name='sgrade' value={datas.sgrade} label="Enter Grade" variant="filled" onChange={inputHandler} /></h1> <br />
      <Button variant="contained" color="success" onClick={addValues} >Submit</Button>
      
    </div>
  )
}

export default Add