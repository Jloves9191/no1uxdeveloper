import React from 'react';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import history from '../../../../history';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            fontFamily: 'NanumPen',
            fontSize: '150%',
        },
    },
}));

export default function ContainedButtons() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button variant="outlined" color="primary" size="large" onClick={() => history.push('/Profile')}>Profile</Button>
            <Button variant="contained" color="primary" size="large" onClick={() => history.push('/Portfolio')} endIcon={<KeyboardArrowRightIcon />}>Portfolio</Button>
        </div>
    );
}
