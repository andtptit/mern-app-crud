import React from "react";
import { Typography } from '@material-ui/core'
import useStyles from './styles'

export function Header() {
    const classes = useStyles(0)
    return(
        <Typography variant="h4" align="center" className={classes.container}>Blog</Typography>
    )
}