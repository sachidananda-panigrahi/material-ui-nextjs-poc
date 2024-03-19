require('dotenv').config()

import * as React from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '@/theme'
import { AppLayout } from '@/components/app-layouts'
import Loading from './loading'

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <AppLayout>
              <React.Suspense fallback={<Loading />}>
                {props.children}
              </React.Suspense>
            </AppLayout>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
