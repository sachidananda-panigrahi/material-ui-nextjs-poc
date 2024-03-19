import * as React from 'react'
import { AppDrawer } from '../app-drawer'

function Layout({ children }) {
  return <AppDrawer>{children}</AppDrawer>
}

const AppLayout = React.memo(Layout)
export default AppLayout
