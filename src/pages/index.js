import React from 'react';
import Link from 'gatsby-link';
import moment from 'moment-timezone';
import { toHHMMSS, DATE, UNIX_TIME } from '../utils/helpers';

const tableheaders = ['Time', 'Event']
const tablebody = [
  { time: '17:30', event: 'Cocktail Hour' },
  { time: '18:30', event: 'Welcome Bride & Groom' },
  { time: '', event: 'Dinner' },
  { time: '19:10', event: 'Toast & Speeches' },
  { time: '19:30', event: 'Cutting of the Cake' },
  { time: '19:50', event: 'First Dance' },
  { time: '', event: 'Parent Dance' },
  { time: '', event: 'Anniversary Dance' },
  { time: '20:15', event: 'Wedding Games' },
  { time: '20:30', event: 'Wedding Party Dance' },
  { time: '20:35', event: 'Everybody Dance!' },
  { time: '22:20', event: 'Last Dance' },
  { time: '22:25', event: 'Send Off' },
  { time: '22:30', event: 'Clean Up' },
  { time: '23:30', event: 'Out of the venue!' }
];

class IndexPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      timeRemaining: UNIX_TIME - moment().unix()
    }
  }

  updateClock() {
    this.setState({
      timeRemaining: UNIX_TIME - moment().unix()
    })
  }

  componentDidMount() {
    this.clockID = setInterval(() => this.updateClock(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockID)
  }

  render() {
    return (
  <div>
    <h1 id="details">
      When: July 7, 2018 @ 5:00 PM<br />
      Where: Renton Community Center<br />
      Dress Code: Semi-Formal
    </h1>
    <h2>{
      (() => {
        if (this.state.timeRemaining === 0) {
          return 'It\'s time!';
        } else {
          return <div>Countdown Until Wedding:<br />{toHHMMSS(this.state.timeRemaining)}</div>;
        }
      })()
    }</h2>
    <h2>
      <Link to='/social-feed/'>Social Feed</Link>
    </h2>
    <h3 id="reception-schedule">Reception Schedule</h3>
    <table>
      <thead>
        <tr>
          {tableheaders.map((val, idx) => <th key={idx}>{val}</th>)}
        </tr>
      </thead>
      <tbody>
        {tablebody.map((val, idx) =>
          <tr key={idx}>
            <td>{val.time !== '' ? moment.tz(`${DATE} ${val.time}`, 'America/Los_Angeles').format('h:mm a') : val.time}</td>
            <td>{val.event}</td>
          </tr>
        )}
      </tbody>
    </table>
    <Link to="#">Scroll to top</Link>
  </div>
)}}

export default IndexPage
