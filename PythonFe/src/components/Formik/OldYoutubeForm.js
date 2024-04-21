import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const initialValues = {
    name: "",
    email: "",
    channel: "",
}

const onSubmit = (values) => {

}

const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().required('Required!'),
    channel: Yup.string().required('Required!'),
})

const YoutubeForm = () => {


    const formik = useFormik({
        initialValues,
        onsubmit,
        // validate,
        validationSchema,
    });
    
    console.log("visited fields==", formik.touched);

    return (
        <form onSubmit={formik.hanldeSubmit}>
            <div className='form-control'>
                <label htmlFor='name'>Name</label>
                <input
                    type='text'
                    id="name"
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name && <div className='error'>{formik.errors.name}</div>}
            </div>
            <div className='form-control'>
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && <div className='error'>{formik.errors.email}</div>}
            </div>
            <div className='form-control'>
                <label htmlFor='channel'>Channel</label>
                <input
                    type='text'
                    id="channel"
                    name="channel"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.channel}
                />
                {formik.touched.channel && formik.errors.channel && <div className='error'>{formik.errors.channel}</div>}
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default YoutubeForm;