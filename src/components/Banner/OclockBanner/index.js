import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Oclock from '../../Oclock'
const OclockBanner = () => {
    
    const oclockList = [
        {nameCity: 'San Fransico', timezone: -7},
        {nameCity: 'New York', timezone: -4},
        {nameCity: 'LonDon', timezone: 1},
        {nameCity : 'Ho Chi Minh City', timezone: 7},

    ]
    return (
        <>
            { <div className='container-fluid'>
                <div className='row'>
                    {
                          oclockList.map((oclockItem,index) =>{
                            return(
                               
                                        <div className="col-lg-3" key={index}>
                                            <Oclock utcOffset={oclockItem.timezone} />
                                            <h4 style={{textAlign: "center"}}>{oclockItem.nameCity}</h4>
                                        </div>
                                   
                            )  
                        })
                    }
                 </div>
            </div>
            }
        </>
    )
}

export default OclockBanner;