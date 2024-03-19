import React, { lazy } from 'react'

const BasicTable = lazy(() => import('./data-table'))
const DataGridDemo = lazy(() =>
  import('./muix-datagrid-table').then(module => ({
    default: module.DataGridDemo,
  }))
)
const MemoDataGridDemo = lazy(() =>
  import('./muix-datagrid-table').then(module => ({
    default: module.MemoDataGridDemo,
  }))
)

export { BasicTable, DataGridDemo, MemoDataGridDemo }
