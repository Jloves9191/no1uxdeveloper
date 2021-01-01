import React from 'react';
import TextBtn from './components/TextBtn';
import Background from '../../../images/bg.png';
import Typical from 'react-typical';

const PcWelcome = () => {
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
                height: '20%',
                position: 'absolute',
                top: '10%',
                right: '10%',
                textAlign:'left',
                fontFamily: "NanumSquareRoundR",
                fontWeight: 'bold',
                fontSize: '400%',
                color: '#4770B3'
            }}>
                <p>Jay Kwon</p>
            </div>
            <div style={{
                width: '40%',
                height: '20%',
                position: 'absolute',
                top: '20%',
                right: '10%',
                textAlign:'right',
                fontFamily: "NanumSquareRoundR",
                fontSize: '250%',
                color: '##FFC300'
            }}>
                <Typical
                    steps={['Welcome to ', 1000, 'My Webpage', 1000]}
                    loop={Infinity}
                    wrapper="p"
                />
            </div>
            <div style={{
                width: '50%',
                height: '30%',
                position: 'absolute',
                top: '40%',
                right: '10%'
            }}>
                <TextBtn></TextBtn>

            </div>
        </div>
    );
};

export default PcWelcome;
