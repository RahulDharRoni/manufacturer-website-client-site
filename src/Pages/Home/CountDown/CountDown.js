import React from 'react';
import CountUp from 'react-countup';

const CountDown = () => {
    return (
        <div>
            <h1 className='font-3xl uppercase text-red-500 text-center'>Our Business Portfolio</h1>
            <h5>JOIN WITH US! NOW</h5>
            <div class="divider">OR</div>
            <CountUp
                start={-875.039}
                end={160527.012}
                duration={2.75}
                separator=" "
                decimals={4}
                decimal=","
                prefix="EUR "
                suffix=" left"
                onEnd={() => console.log('Ended! 👏')}
                onStart={() => console.log('Started! 💨')}
            >
                {({ countUpRef, start }) => (
                    <div>
                        <span ref={countUpRef} />
                        <button onClick={start}>Start</button>
                    </div>
                )}
            </CountUp>
        </div>
    );
};

export default CountDown;