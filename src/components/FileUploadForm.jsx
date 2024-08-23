import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

function FileUploadForm({ addEmployees }) {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [uploading, setUploading] = useState(false);

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!file) {
      setError('No file uploaded. Please upload an Excel file.');
      return;
    }

    setUploading(true);
    setError('');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:4000/employees', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('File upload failed');
      }

      const result = await response.json();
      addEmployees(result?.employees);
      console.log('Upload successful:', result?.employees);
    } catch (error) {
      setError('Error uploading file: ' + error.message);
    } finally {
      setUploading(false);
    }
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

      <Button type="submit" variant="contained" color="primary" disabled={uploading} sx={{ position: 'relative' }}>
        {uploading && (
          <CircularProgress
            size={24}
            sx={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              marginLeft: '-12px',
              marginTop: '-12px',
              color: 'white',
            }}
          />
        )}
         Submit
      </Button>
    </Box>
  );
}

export default FileUploadForm;
