import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-around',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 1,
  },
  asideAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  asideSection: {
    marginTop: theme.spacing(3),
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {},
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  showcase: {
    position: 'relative',
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    backgroundImage:
      'url(https://www.transparenttextures.com/patterns/subtle-carbon.pn)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  showcaseContent: {
    position: 'relative',
    padding: theme.spacing(0),
    // [theme.breakpoints.up('xl')]: {
    //   padding: theme.spacing(2),
    //   paddingRight: 0,
    // },
  },
  icon: {
    marginRight: theme.spacing(2),
  },
}));

export default useStyles;
