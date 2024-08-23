import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import CommanTable from '../components/CommanTable'
import FileUploadForm from '../components/FileUploadForm'

export default function UploadPage() {
  const [employees,setEmployees] = useState([]);

  const addEmployees = (emp)=>{
    console.log({emp})
    setEmployees([...emp]);
  }
  return (
    <Box mx={6} my={2}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FileUploadForm addEmployees={addEmployees}/>
      </Grid>
      <Grid item xs={12}>
        <CommanTable employees={employees}/>
      </Grid>
    </Grid>
  </Box>
  )
}
