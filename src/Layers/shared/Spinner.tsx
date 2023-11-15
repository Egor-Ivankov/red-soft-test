import { PulseThree } from 'react-svg-spinners';
import './spinner.css';
const Spinner = () => {
    return (
        <div className='spinner'>
            <PulseThree width={100} height={100} color='#7777FF'/>
        </div>
    )
}

export default Spinner;