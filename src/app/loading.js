import * as React from 'react'
import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <Box width={1}>
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
    </Box>
  )
}
