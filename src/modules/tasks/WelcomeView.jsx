import React /* {useState, useEffect} */ from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {ComponentDrawer} from '../shared/components/Drawer';
const useStyles = makeStyles((theme) =>
({
    root: 
    {
        display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    content:
    {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));
export const WelcomeView = () =>
{
    const classes = useStyles();
    return(
        <>
        <>
        <div className={classes.root}>
        <ComponentDrawer />
        <main className={classes.content}>
        <div className={classes.toolbar} />
            <h1>Welcome!</h1>
        </main>
        </div>
        </>
        </>
    )
}