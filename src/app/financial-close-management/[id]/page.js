import * as React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import NextLink from 'next/link'
import ProTip from '@/components/ProTip'
import Copyright from '@/components/Copyright'

export default function FCMDetails({ params }) {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Financial Close Management Details Page
        </Typography>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          ID: {params.id}
        </Typography>
        <Box sx={{ maxWidth: 'sm' }}>
          <Button
            variant="contained"
            component={NextLink}
            href="/financial-close-management"
          >
            Go to the Financial Close Management page
          </Button>
        </Box>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  )
}
