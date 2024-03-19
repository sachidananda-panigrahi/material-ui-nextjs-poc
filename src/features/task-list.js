'use client'

import * as React from 'react'
import useSWR from 'swr'

import { MemoDataGridDemo } from '@/components/app-table'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function TaskList(props) {
  const { columns } = props

  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 25,
  })

  const { data, error, isLoading } = useSWR(
    `/api/task-list?page=${paginationModel.page}`,
    fetcher
  )

  const [rowCountState, setRowCountState] = React.useState(
    data?.data?.count || 0
  )

  const handlePaginationModelChange = React.useCallback(newPaginationModel => {
    setPaginationModel(newPaginationModel)
  }, [])

  React.useEffect(() => {
    setRowCountState(prevRowCountState =>
      data?.data?.count !== undefined ? data?.data?.count : prevRowCountState
    )
  }, [setRowCountState, data?.data?.count])

  return (
    <MemoDataGridDemo
      loading={isLoading}
      columns={columns}
      rows={data?.data?.results || []}
      basePath={`/financial-close-management`}
      enableNavigation
      paginationMode="server"
      rowCount={rowCountState}
      onPaginationModelChange={handlePaginationModelChange}
    />
  )
}
