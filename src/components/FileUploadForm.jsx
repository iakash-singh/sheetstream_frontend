import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function FileUploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    
    if (selectedFile && (selectedFile.name.endsWith('.xlsx') || selectedFile.name.endsWith('.xls'))) {
      setFile(selectedFile);
      setError('');
    } else {
      setFile(null);
      setError('Please upload an Excel file (.xlsx or .xls)');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!file) {
      setError('No file uploaded. Please upload an Excel file.');
      return;
    }

    // Handle the file upload logic here
    console.log('File uploaded:', file);
  };

  return (
    <Box 
      component="form" 
      onSubmit={handleSubmit} 
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 300, margin: 'auto', mt: 5 }}
    >
      <Typography variant="h6" gutterBottom>
        Upload Excel File
      </Typography>

      <Button
        variant="contained"
        component="label"
      >
        Choose File
        <input
          type="file"
          accept=".xlsx,.xls"
          hidden
          onChange={handleFileChange}
        />
      </Button>

      {file && (
        <Typography variant="body2">
          Selected File: {file.name}
        </Typography>
      )}

      {error && (
        <Typography color="error" variant="body2">
          {error}
        </Typography>
      )}

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
}

export default FileUploadForm;
