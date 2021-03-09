import React from 'react';
import TextBtn from './components/TextBtn';
import Background from '../../../images/bg_Blue.png';
import Typical from 'react-typical';
import Button from '@material-ui/core/Button';
import history from '../../../history';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            fontFamily: 'NanumPen',
            fontSize: '150%',asdf
        },
    },
}));

//Test

const PcWelcome = () => {
  const classes = useStyles();
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
            <div style={{
                width: '40%',
                height: '5%',
                position: 'absolute',
                right: '20%',
                textAlign:'right',
                fontFamily: "NanumPen",
                fontWeight: 'bold',
                fontSize: '400%',
                color: '#3f50b5'
            }}>
                <p>Jay Kwon</p>
            </div>
            <div style={{
                width: '40%',
                height: '10%',
                position: 'absolute',
                top: '16%',
                right: '20%',
                textAlign:'right',
                fontFamily: "NanumPen",
                fontSize: '220%',
                color: '##FFFFFF'
            }}>
                <Typical
                    steps={['Welcome to ', 500, "Welcome to Jay Kwon's Webpage!", 2000]}
                    loop={Infinity}
                    wrapper="p"
                />
            </div>
            <div className={classes.root} style={{
                width: '10%',
                height: '10%',
                position: 'absolute',
                top: '10%',
                right: '9%',
                float: 'right'
            }}>
                <Button variant="outlined" color="primary"onClick={() => history.push('/Profile')}>Profile</Button>
            </div>
            <div className={classes.root} style={{
                width: '10%',
                height: '10%',
                position: 'absolute',
                top: '20%',
                right: '8%',
                float: 'right'
            }}>
                <Button variant="contained" color="primary" onClick={() => history.push('/Portfolio')} endIcon={<KeyboardArrowRightIcon />}>Portfolio</Button>
            </div>

        </div>
    );
};

export default PcWelcome;
