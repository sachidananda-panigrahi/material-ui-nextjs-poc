'use client'
import * as React from 'react'
import Box from '@mui/material/Box'
import { useSpring, animated } from '@react-spring/web'

import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import FolderOpenIcon from '@mui/icons-material/FolderOpen'
import RequestQuoteIcon from '@mui/icons-material/RequestQuote'

import Collapse from '@mui/material/Collapse'
import { alpha, styled } from '@mui/material/styles'
import { TreeView } from '@mui/x-tree-view/TreeView'
import { TreeItem, treeItemClasses } from '@mui/x-tree-view/TreeItem'

function TransitionComponent(props) {
  const style = useSpring({
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
    },
  })

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  )
}

const CustomTreeItem = React.forwardRef(function CustomTreeItem(props, ref) {
  return (
    <TreeItem {...props} TransitionComponent={TransitionComponent} ref={ref} />
  )
})

CustomTreeItem.displayName = 'CustomTreeItem'

const StyledTreeItem = styled(CustomTreeItem)(({ theme }) => ({
  [`& .${treeItemClasses.iconContainer}`]: {
    '& .close': {
      opacity: 0.3,
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
  },
}))

function renderTree(nodes, depth = 0) {
  let icon
  switch (depth) {
    case 0:
      icon = <AccountBalanceIcon />
      break
    case 1:
      icon = <AccountBalanceWalletIcon />
      break
    case 2:
      icon = <FolderOpenIcon />
      break
    // Add more cases as needed
    default:
      icon = <RequestQuoteIcon />
  }

  return (
    <StyledTreeItem nodeId={nodes.menuId} label={nodes.name} icon={icon}>
      {Array.isArray(nodes.children)
        ? nodes.children.map(node => renderTree(node, depth + 1))
        : null}
    </StyledTreeItem>
  )
}

function CustomizedTreeView(props) {
  const { treeData } = props
  return (
    <TreeView
      aria-label="customized"
      defaultExpanded={['1']}
      sx={{ overflowX: 'hidden' }}
    >
      {treeData?.ArrayList && Array.isArray(treeData?.ArrayList)
        ? treeData?.ArrayList.map(node => renderTree(node))
        : null}
    </TreeView>
  )
}

const AppTreeView = React.memo(CustomizedTreeView)

export default AppTreeView
