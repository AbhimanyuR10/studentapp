import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Add from './Add';
const Tabl2 = () => {
    var[students,setStudents]=useState([]);
    var[update,setUpdate] = useState(false);
    var[singleValue,setSingleeValue]=useState([]);

    useEffect(() =>{
        axios.get("http://localhost:8080/see")
        .then((response)=>{
            setStudents(response.data);
            console.log(response.data)
        })
        .catch()
    },[])

    const theChange = (id)=>{
        axios.delete("http://localhost:8080/del/"+id)
        .then((response)=>{
            console.log(response)
            alert("Deleted")
            window.location.reload(false)
        })
        .catch(err=>console.log(err))
    }
   const updateValue = (val)=>{
    console.log("clicked update button",val)
    setSingleeValue(val)
    setUpdate(true);
    
   }
   var finalJSX = <div style={{paddingTop:'50px'}}>
   <TableContainer>
       <Table>
           <TableHead>
               <TableRow>
         
                   <TableCell>Name</TableCell>
                   <TableCell>Grade</TableCell>
               </TableRow>
           </TableHead>
           <TableBody>
               {students.map((value,index)=>{
                   return(
                       <TableRow key={index}>
                           <TableCell>{value.sname}</TableCell>
                           <TableCell>{value.sgrade}</TableCell>
                           {console.log(value._id)}
                           <TableCell><Button onClick={()=>theChange(value._id)}>Delete</Button></TableCell>
                           <TableCell><Button onClick={()=>updateValue(value)}>Update</Button></TableCell>
                       </TableRow>
                   )
               })
               }

           </TableBody>
       </Table>
   </TableContainer>
</div>
if(update)
finalJSX = <Add data={singleValue} method ="put"/>
  return (
   finalJSX
  )
}
export default Tabl2
