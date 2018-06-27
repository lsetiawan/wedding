import React from 'react'
import Link from 'gatsby-link'
import moment from 'moment-timezone'


const DATE = '2018-07-07'
const tableheaders = ['Time', 'Event']
const tablebody = [
  { time: '07:30', event: 'Start making breakfast' }, 
  { time: '08:00', event: 'Bridesmaids Start getting ready' },
  { time: '09:00', event: 'Darian\'s Hair Appt, Bridal Party Breakfast'},
  { time: '10:00', event: 'Groomsmen Prepare Decorations/Party Supplies to be loaded'},
  { time: '11:00', event: 'Load decorations/party supplies to truck'},
  { time: '12:00', event: 'Lunch'},
  { time: '12:30', event: 'Videographer and Photographer Arrive'},
  { time: '13:00', event: 'Take decorations to venue'},
  { time: '13:30', event: 'Start decorating'},
  { time: '14:00', event: 'Bridal party leave to park (Bride & Groom separate)'},
  { time: '14:30', event: 'First look, bridal party pictures, immediate family pictures'},
  { time: '16:45', event: 'Back to venue'},
  { time: '17:00', event: 'Ceremony starts'},
  { time: '17:30', event: 'Cocktail hour'},
  { time: '17:45', event: 'Open up guest for pictures with Bride and Groom'},
  { time: '18:30', event: 'Dinner'},
  { time: '19:10', event: 'Best man and Maid of honor speeches, other speeches'},
  { time: '19:30', event: 'Cutting of the cake'},
  { time: '19:50', event: 'First Dance Bride and Groom'},
  { time: '', event: 'Clay Disrud and Darian Setiawan Dance'},
  { time: '', event: 'Jim Robinson and Darian Setiawan Dance'},
  { time: '', event: 'Janet Juntunen and Don Setiawan Dance'},
  { time: '', event: 'Anniversary Dance'},
  { time: '20:15', event: 'Shoe game'},
  { time: '20:20', event: 'Bouquet toss'},
  { time: '20:25', event: 'Garter toss'},
  { time: '20:30', event: 'Wedding party dance'},
  { time: '20:35', event: 'Everyone dances'},
  { time: '22:20', event: 'Last dance'},
  { time: '22:25', event: 'Send off'},
  { time: '22:30', event: 'Clean up'},
  { time: '23:30', event: 'Out of the venue!!'}, 
]

class DaySchedule extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentTime: moment.tz('America/Los_Angeles').format('MMMM Do YYYY, h:mm:ss a')
    }
  }
  updateClock() {
    this.setState({ 
      currentTime: moment.tz('America/Los_Angeles').format('MMMM Do YYYY, h:mm:ss a')
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
    <h1>Wedding Day Schedule</h1>
    <h3>Current Time: {this.state.currentTime}</h3>
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
    <Link to="/day-schedule/">Scroll to top</Link>
  </div>
)}}

export default DaySchedule
