import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    },
    icon: {
        marginRight: '20px',
    },
    buttonsGrid: {
        marginTop: '40px',
        marginBottom: '20px',
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardGrid: {
        padding: '20px 200px 10px 200px ',
        [theme.breakpoints.down('lg')]: {
            padding: '16px',
        },
    },
    cardMedia: {
        paddingTop: '56.25%' // ratio 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: '50px 0',
    }
}));

export default useStyles;