import React from 'react'
import moment from 'moment';
import { Link } from 'react-router-dom';

const Slide = props  => {
    // const styles = {
    //   backgroundImage: `url(${image})`,
    //   backgroundSize: 'cover',
    //   backgroundRepeat: 'no-repeat',
    //   backgroundPosition: '50% 60%'
    // }
    return <div className="slide" >
            <Link  to={'/league/' + props.league + '/' + props.title}>
                <div className="slide-ticket">
                    <div className="slide-title">
                        {props.title}
                    </div>
                    <div className="slide-date">
                        {moment(props.date).format('DD/MM/YYYY H:mm')} 
                    </div>
                </div>
            </Link>  

    </div>
}  

export default Slide;
