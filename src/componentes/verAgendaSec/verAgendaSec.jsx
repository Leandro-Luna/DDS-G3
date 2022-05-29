
import React from 'react'
import { Link } from 'react-router-dom'
import { CalendarComponent } from '@syncfusion/ej2-react-calendars'
import './verAgendaSec.css'
import TimelineGrouping from './timeLine.jsx'
const VerAgendaSec = () => {
    return (
      <div className='login_container-agenda-sec'>
          <TimelineGrouping />
          <div>
              <Link to='/menuSecretaria'><button className='btn-volverSecre'> Volver al menú </button></Link>
          </div>
      </div>
    )
  }
  export default VerAgendaSec