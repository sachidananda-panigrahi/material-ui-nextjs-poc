import * as React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import NextLink from 'next/link'

import { AppTreeView } from '@/components/app-tree-view'
import TaskList from '@/features/task-list'

async function getDSL() {
  const myHeaders = new Headers()
  myHeaders.append('Cookie', `SESSION=${process.env.SESSION}`)

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  }

  const res = await fetch(
    `${process.env.BASE_API_URL}/ux/uber/dsl?sysname=Close_Listing_Page_V2`,
    requestOptions
  ).catch(error => console.error(error))

  return res.json()
}

async function getTreeData() {
  const myHeaders = new Headers()
  myHeaders.append('Cookie', `SESSION=${process.env.SESSION}`)

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  }

  const res = await fetch(
    `${process.env.BASE_API_URL}/pms/project/tree/close`,
    requestOptions
  ).catch(error => console.error(error))

  return res.json()
}

function generateColumns({ dsl }) {
  const columns = dsl.map(field => {
    return {
      field: field?.valueField,
      headerName: field?.displayName,
      id: field?.fieldId,
      fieldType: field?.fieldType,
      description: field?.description,
    }
  })

  return columns
}

export default async function FinancialCloseManagement() {
  const dsl = await getDSL()
  const columns = generateColumns({
    dsl: dsl?.page?.sections[0]?.components[0]?.fieldLayout[0],
  })

  const treeData = await getTreeData()
  return (
    <Container maxWidth={false}>
      <Grid container spacing={2}>
        <Grid item xs={3} md={2.5} lg={2} xl={1.5}>
          <AppTreeView treeData={treeData} />
        </Grid>
        <Grid item xs={9} md={9.5} lg={10} xl={10.5}>
          <TaskList columns={columns} />
        </Grid>
      </Grid>
    </Container>
  )
}
