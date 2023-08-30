import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const AppointmentsForm = ({onSaveAppointment, appointment}) => {

    const INTIAL_FORM_STATE = {
        id: '',
        petName: '',
        petAge: '',
        ownerName: '',
        appointmentDate: '',
        appointmentTime: '',
        symptoms: '',
    }

    
    const [form, setForm] = useState(INTIAL_FORM_STATE)
    
    useEffect(() => {
        if (Object.keys(appointment).length > 0) {
            setForm(appointment)
        }
    }, [appointment])

    const handleChange = (event) => {
        const {name, value} = event.target

        setForm({...form, [name]: value})
    }

    const handleSaveAppointments = (e) => {
        e.preventDefault()

        const newAppointment = {
            ...form,
            id: appointment.id || crypto.randomUUID()
        }

        onSaveAppointment(newAppointment)

        setForm(INTIAL_FORM_STATE)
    }

  return (
    <>
        <section className="w-96 bg-slate-200 p-4 rounded-lg ml-5">
            <h2 
            className="text-2xl text-center mb-4"
            >Nuevo paciente</h2>

            <form className="flex flex-col gap-3"
            onSubmit={handleSaveAppointments}>
                <input 
                    type="text"
                    name="petName"
                    className="border p-2 shadow-md rounded-md" placeholder="nombre de la mascota" 
                    value={form.petName}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="petAge"
                    min="0"
                    max="50" 
                    className="border p-2 shadow-md rounded-md"
                    placeholder="edad de la mascota"
                    value={form.petAge}
                    onChange={handleChange}
                />
                <input
                    type="text" 
                    name="ownerName"
                    className="border p-2 shadow-md rounded-md"
                    placeholder="dueño de la mascota"
                    value={form.ownerName}
                    onChange={handleChange}
                />
                <input 
                    type="date"
                    name="appointmentDate"
                    className="border p-2 shadow-md"
                    placeholder="fecha de la cita"
                    value={form.appointmentDate}
                    onChange={handleChange}
                />
                <input 
                    type="time"
                    name="appointmentTime"
                    className="border p-2 shadow-md rounded-md"
                    placeholder="hora de la cita"
                    value={form.appointmentTime}
                    onChange={handleChange}
                />
                <textarea
                    className="border p-2 shadow-md rounded-md"
                    placeholder="sintomas"
                    name="symptoms"
                    rows={3}
                    value={form.symptoms}
                    onChange={handleChange}
                />
                <input 
                    className="border p-2 bg-amber-600 text-white rounded-md cursor-pointer"
                    type="submit" 
                    value="guardar"
                        
                />
            </form>

            <pre>{JSON.stringify(form, null, 2)}</pre>
        </section>
    </>
  )
}

export default AppointmentsForm