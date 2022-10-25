import React from 'react'
import Box from '@material-ui/core/Box';

export default function ColorBox({ color }) {

  return (
    <Box sx={{
      width: 300,
      height: 300,
      backgroundColor: color,
    }}/>
  )
}
