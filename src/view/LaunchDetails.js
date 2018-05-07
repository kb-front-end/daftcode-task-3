import React from 'react';
import '../styles/launch.sass';
import Subhead from './Subhead';
import launch from '../assets/launch.json';
import launch_site from '../assets/launch_site.json';
import rocket from '../assets/rocket.json';
import {format, differenceInMinutes} from 'date-fns';

class LaunchDetails extends React.Component {
    
  render() {
    let now = new Date();
    let launch_date_utc = format(launch.launch_date_utc, 'DD MMMM YYYY');
    let minutes = (differenceInMinutes(launch.launch_date_utc, now)) % 60;
    let hours = Math.floor((differenceInMinutes(launch.launch_date_utc, now)) / 60);
    let days = Math.floor(hours / 24);
    let resthours = Math.floor(hours % 24);

    return (
        <div className='insider'>
        <div className='leftcont'>
        <h3 className='leftcont__header--first'>{launch_date_utc}</h3>
        <h1 className='leftcont__header--second'>{launch.rocket.rocket_name} launch</h1>
        <h3 className='leftcont__header--third'>{days} days {resthours} hours and {minutes} minutes</h3>
        </div>
        
        <div className='rightcont'>
        <Subhead subheadText="details" />
        <p className='rightcont__para'>{launch.details}</p>
        <Subhead subheadText="rocket" />
        <div className='jsontable'>
        <ul className='jsontable__colone'>
       <li className='jsontable__item'>flight number:  <span className='jsontable__data'>{launch.flight_number}</span></li>
       <li className='jsontable__item'>rocket type:  <span className='jsontable__data'>{launch.rocket.rocket_type}</span></li>
       <li className='jsontable__item'>fuel amount:  <span className='jsontable__data'>{rocket.first_stage.fuel_amount_tons}tons</span></li>
       <li className='jsontable__item'>thrust vacuum:  <span className='jsontable__data'>{rocket.first_stage.thrust_vacuum.kN}kN</span></li>
       <li className='jsontable__item'>height:  <span className='jsontable__data'>{rocket.height.meters}m</span></li>
       </ul>
       <ul className='jsontable__coltwo'>
       <li className='jsontable__item'>country of origin:  <span className='jsontable__data'>{rocket.country}</span></li>
       <li className='jsontable__item'>fuel amount:  <span className='jsontable__data'>{rocket.second_stage.fuel_amount_tons}t</span></li>
       <li className='jsontable__item'>Fuel burning time:  <span className='jsontable__data'>{rocket.first_stage.burn_time_sec}</span></li>
       <li className='jsontable__item'>number of engines:  <span className='jsontable__data'>{rocket.second_stage.engines}</span></li>
        <li className='jsontable__item'>success rate:  <span className='jsontable__data'>{rocket.success_rate_pct}%</span></li>
       </ul>
        </div>
        <p className='rightcont__para'>{rocket.description}</p>
        <Subhead subheadText="launch pad" />
        <div className='jsontable'>
        <ul className='jsontable__colone'>
        <li className='jsontable__item'>name:  <span className='jsontable__data'>{launch.launch_site.site_name}</span></li>
        </ul>
        <ul className='jsontable__coltwo'>
        <li className='jsontable__item'>full name:  <span className='jsontable__data'>{launch.launch_site.site_name_long}</span></li>
        </ul>
        </div>
        <p className='rightcont__para'>{launch_site.details}</p>
        </div>
        </div>
    );
  }
}

export default LaunchDetails;
