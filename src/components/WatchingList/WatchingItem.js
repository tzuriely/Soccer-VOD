import React from 'react';
import moment from 'moment';


const WatchingItem = (props) => (
    <div className="watchingItem">
        <div className="watchItem-channel">{props.channel}</div>
        <div className="watchItem-game">{props.eventName}</div>
        <div className="watchItem-time">{moment(props.startTime).format('H:mm')}</div>
    </div>
)
export default WatchingItem;