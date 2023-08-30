import { useState } from "react"
import AppointmentsForm from "../components/AppointmentsForm"
import AppointmentsList from "../components/AppointmentsList"

const Appointments = () => {
    const [appointments, setAppointments] = useState([])
    const [appointmentSelect, setAppointmentSelect] = useState({})

    const handleSaveAppointment = (form) => {
        setAppointments([...appointments, form])
    }

    const handleRemove = (id) => {
        const newAppointments = appointments.filter(appointment => appointment.id !== id)

        setAppointments(newAppointments)
    }
    
    const handleEdit = (appointment) => {
        setAppointmentSelect(appointment)
    }

    return (
        <>
            <AppointmentsForm
                appointment={appointmentSelect}
                onSaveAppointment={handleSaveAppointment}
            />
            <AppointmentsList 
            onRemove={handleRemove}
            appointments={appointments}
            onEdit={handleEdit} 
            />
        </>
    )
}

export default Appointments