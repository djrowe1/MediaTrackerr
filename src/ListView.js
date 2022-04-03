import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Book Title: add item   Author Name: add item ${index + 1}`} onClick={() => {
    alert('go to media info page');}}/>
      </ListItemButton>
    </ListItem>
  );
}

export default function List() {

  return (
    <Box
      sx={{ width: '100%', height: 400, maxWidth: 600, bgcolor: 'background.paper' }}
    >
      <FixedSizeList
        height={400}
        width={600}
        itemSize={46}
        itemCount={200}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}
