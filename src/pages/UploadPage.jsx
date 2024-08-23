import { Box, Grid } from '@mui/material'
import React from 'react'
import CommanTable from '../components/CommanTable'
import FileUploadForm from '../components/FileUploadForm'

export default function UploadPage() {
  return (
    <Box mx={6} my={2}>
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <FileUploadForm />
      </Grid>
      <Grid item xs={12} md={8}>
        <CommanTable />
      </Grid>
    </Grid>
  </Box>
  )
}
