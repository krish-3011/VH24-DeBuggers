import LineGraph from './linegrph';
import './statsgrid.css'
import BarGraph from './bar';
import PieChart from './piechart';

const StatsGrid = () =>
    {
        return(
            <div className="container">
            <div className='graphfeed'>
            <div className='graphss'>
            <div className="stats1 "><LineGraph className="lineargraph"/></div>
            <div className="stats1"><BarGraph/></div>
            <div className="stats1"><PieChart/></div>
            </div>
            
          {/*  <textarea rows={13} cols={150} className='feedback'>feedback</textarea>*/}
            </div>
            
            </div>
            
               )
    }
    
    export default StatsGrid;
    