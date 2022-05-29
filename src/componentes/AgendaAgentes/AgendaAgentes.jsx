
import React from 'react'
import { Link } from 'react-router-dom'
import { CalendarComponent } from '@syncfusion/ej2-react-calendars'
import './AgendaAgentes.css'
import MonthAgendaView from './monthAgendaView'

const AgendaAgentes = () => {
  return (
    <div className='login_container-agenda'>
        <MonthAgendaView />
{/*         <div className='sec-calendario-cuadro'>
          <div className='sec-calendario-titulo'>Calendario de citas</div>
          <div className='sec-calendario-datos'><CalendarComponent className='jefecomer-calendario'></CalendarComponent></div>
        </div> */}
        <div className='btn-volver3'>
            <Link to='/MenuAgentes'><button>Volver al menú</button></Link>
        </div>
    </div>
  )
}
  export default AgendaAgentes

