import React from 'react'
import { Formik, FormikHelpers, FormikProps, Form, Field, } from 'formik';
import * as Yup from 'yup';

interface FormValues {
    productName: string;
    price: number;
    currency: string;
}

const FormData = () => {
    const initialValues: FormValues = {
        productName: '',
        price: 0,
        currency: '',
    };

    const ValidationSchema = Yup.object().shape({
        productName: Yup.string()
            .max(25, 'Too Long!')
            .required('Product name is required'),
        price: Yup.number()
            .max(1000000, 'What are you Jeff Bezos??')
            .required('Price is required'),
        currency: Yup.string()
            .required('Currency is required'),
    })
  return (
    <>
        <Formik
            initialValues={initialValues}
            validationSchema={ValidationSchema}
            onSubmit={(values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 500);
            }}
        >

            {({ isSubmitting, errors, touched }: FormikProps<FormValues>) => (
                <Form>
                    <label htmlFor="productName">Product Name</label>
                    <Field name="productName" type="text" />
                    {errors.productName && touched.productName ? ( <div>{errors.productName}</div>) : null}
                    <label htmlFor="price">Price</label>
                    <Field name="price" type="number" />
                    {errors.price && touched.price ? ( <div>{errors.price}</div>) : null}
                    <label htmlFor="currency">Currency</label>
                    <Field name="currency" type="text" />
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    </>
  )
}

export default FormData