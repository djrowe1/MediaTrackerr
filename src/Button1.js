//Button on main library view page
import * as React from 'react';
import {Link} from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
    return (
      <Stack spacing={2} direction="row">
          <Link to="/AddMedia">
          <Button 
            style={{
              backgroundColor: "#4D1137",
            }}
            variant="contained" onClick={() => {
              

          }} 
         >Add/Search New Media</Button>
          </Link>
          
          
      </Stack>
    );
  }