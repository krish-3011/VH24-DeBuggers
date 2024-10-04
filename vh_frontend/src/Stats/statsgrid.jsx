import LineGraph from './linegrph';
import './statsgrid.css'

const StatsGrid = () =>
    {
        return(
            <div className="container">
            <div className='graphfeed'>
            <div className='graphss'>
            <div className="stats1 ">rating line graph</div>
            <div className="stats1">profit made line graph</div>
            <div className="stats1">efficiency</div>
            </div>
            
            <textarea rows={13} cols={150} className='feedback'>feedback</textarea>
            </div>
            
            </div>
            
               )
    }
    
    export default StatsGrid;
    