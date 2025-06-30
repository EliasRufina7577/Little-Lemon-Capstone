import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function BookingForm() {
  const formik = useFormik({
    initialValues: {
      name: '',
      date: '',
      time: '',
      guests: 1,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      date: Yup.string().required('Date is required'),
      time: Yup.string().required('Time is required'),
      guests: Yup.number().min(1, 'At least 1 guest').max(10, 'Max 10 guests').required('Guest number is required'),
    }),
    onSubmit: (values) => {
      alert("Booking submitted: " + JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} aria-label="Booking Form">
      <h2>Table Booking Form</h2>

      <label htmlFor="name">Name:</label>
      <input id="name" name="name" type="text" onChange={formik.handleChange} value={formik.values.name} />
      {formik.errors.name && <div>{formik.errors.name}</div>}

      <label htmlFor="date">Date:</label>
      <input id="date" name="date" type="date" onChange={formik.handleChange} value={formik.values.date} />
      {formik.errors.date && <div>{formik.errors.date}</div>}

      <label htmlFor="time">Time:</label>
      <input id="time" name="time" type="time" onChange={formik.handleChange} value={formik.values.time} />
      {formik.errors.time && <div>{formik.errors.time}</div>}

      <label htmlFor="guests">Number of Guests:</label>
      <input id="guests" name="guests" type="number" min="1" max="10" onChange={formik.handleChange} value={formik.values.guests} />
      {formik.errors.guests && <div>{formik.errors.guests}</div>}

      <button type="submit">Submit Booking</button>
    </form>
  );
}

export default BookingForm;
