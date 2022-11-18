import React ,{ Component }from "react";
import { FiCast , FiLayers , FiSmartphone , FiMonitor } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiMonitor />,
        title: 'Website Development',
        description: ''
    },
    { 
        icon: <FiSmartphone />,
        title: 'Mobile App Development',
        description: ''
    },
    // {
    //     icon: <FiCast />,
    //     title: 'Business Stratagy',
    //     description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    // },
    
    // {
    //     icon: <FiUsers />,
    //     title: 'Marketing & Reporting',
    //     description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    // },
   
    
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row service-main-wrapper">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href="/service-details">
                                <div className="service service__style--2 text-left bg-gray">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
