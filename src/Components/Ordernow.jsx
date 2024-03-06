import React from 'react'


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';




export default function Ordernow() {

    // const [id, setId] = React.useState()

    const [getdata, setgetData] = React.useState([])
    const navigate = useNavigate()

    function getloaddata() {
        axios.get('https://65b7d5fa46324d531d559dd7.mockapi.io/oradernow')
            .then((res) => {
                setgetData(res.data)
                console.log(res.data)

            })
    }
    React.useEffect(() => {
        getloaddata();
    }, [])

    function handleremove(e,id) {
        e.preventDefault();
        axios.delete('https://65b7d5fa46324d531d559dd7.mockapi.io/oradernow/' + id)
        .then((res)=>{
          console.log(res.data);
          getloaddata()
        })
       }   
 
    return (





        <TableContainer component={Paper} className='mt-5'>
            <h3><b>Order table:</b></h3>

            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow className='bg-info'>
                        <TableCell><b>sr-no</b></TableCell>
                        <TableCell><b>Images</b></TableCell>
                        <TableCell><b>Title</b></TableCell>
                        <TableCell><b>quentity</b></TableCell>
                        <TableCell><b>Price</b></TableCell>
                        <TableCell ><b>Action</b></TableCell>


                    </TableRow>
                </TableHead>
                <TableBody>
                    {

                        getdata.map((eachdata, i) => {
                            return (
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={i}
                                >


                                    <TableCell component="th" scope="row">{i + 1}</TableCell>

                                    <TableCell ><img src={eachdata.images} alt="" className='w-25' /></TableCell>

                                    <TableCell >{eachdata.name}</TableCell>
                                    <TableCell >{eachdata.quantity}</TableCell>
                                    <TableCell >{eachdata.subtotal}</TableCell>


                                    <TableCell>

                                        <button className='btn btn-danger' onClick={((e) => handleremove(e, eachdata.id))}>Delete</button>

                                    </TableCell>




                                </TableRow>
                            )

                        })
                    }
                    <br />
                    <br />

                         <Link to={"/ordernow/bill"}>
                        <button style={{marginLeft:""}} className='btn btn-danger mt-5 ms-5'>Bill</button>
                        </Link>
                      

                </TableBody>
               
            </Table>
            <hr />
        </TableContainer>
    );
}
