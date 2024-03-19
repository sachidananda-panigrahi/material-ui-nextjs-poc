'use client'
import * as React from 'react'
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import { useRouter } from 'next/navigation'

function DataGridDemo(props) {
  const {
    rows,
    columns,
    basePath,
    enableNavigation,
    paginationMode,
    rowCount,
    onPaginationModelChange,
    loading,
  } = props
  const router = useRouter()
  return (
    <Box sx={{ width: '100%', height: 'calc(100vh - 120px)', maxHeight: 830 }}>
      <DataGrid
        loading={loading}
        density="compact"
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 20,
            },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
        checkboxSelection
        disableRowSelectionOnClick
        onRowClick={row => {
          enableNavigation && router.push(`${basePath}/${row.id}`)
        }}
        paginationMode={paginationMode}
        rowCount={rowCount}
        onPaginationModelChange={onPaginationModelChange}
      />
    </Box>
  )
}

const MemoDataGridDemo = React.memo(DataGridDemo)

export { MemoDataGridDemo, DataGridDemo }
