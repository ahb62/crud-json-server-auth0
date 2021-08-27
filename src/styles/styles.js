import { makeStyles, } from '@material-ui/core/styles';
const drawerWidth = 200;
const useStyles = makeStyles((theme) =>
({
    /* styles for Drawer */
    /* styles for Tooltip */
    absolute: 
    {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(3),
    },
    appBar:
    {
        zIndex: theme.zIndex.drawer + 1,
        marginLeft: (drawerWidth * 2),
        backgroundColor: "#2d3c48",
        color: "white",
        display: "flex",
        alignItems: "flex-end"
    },
    appBarDropdown:
    {
        color: "white",
    },
    accountCircleIcon:
    {
        paddingRight: "5px",
    },
    content: 
    {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    drawer: 
    {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: 
    {
        width: drawerWidth,
    },
    drawerContainer: 
    {
        overflow: 'auto',
    },
    table: 
    {
        minWidth: 300,
    },
    MuiButton:
    {
        padding: '0px'
    },
    MenuButton:
    {
        marginRight: theme.spacing(2),
    },
    root: 
    {
        flexGrow: 1,
    },
    list: 
    {
        width: 250,
    },
    fullList: 
    {
        width: 'auto',
    },
    title: 
    {
        flexGrow: 1,
    },
}));
export default useStyles;