import React, { useContext } from 'react'
import { FrameMotionContext } from '../../context/FrameMotionContext';
import { Formik, FormikHelpers, FormikProps } from 'formik';
import { StyledField, StyledForm, StyledLabel, ButtonWrapper, Button, InputWrapper, Error } from './Form.styles'
import * as Yup from 'yup';
import IProduct from '../../interfaces/Product';
import { createApi } from "unsplash-js";
import useProducts from '../../hooks/useProducts';

const api = createApi({ accessKey: 'viKl522r1TKUcjWViY0-y6Sp0788bYjYAIHkvJgnVxs' });


const UpdateForm = () => {
    const { setIsUpdate, updateData } = useContext(FrameMotionContext)
    const { onUpdateData } = useProducts();

    const initialValues: IProduct = {
        id: updateData.id,
        productName: updateData.productName,
        price: updateData.price,
        currency: updateData.currency,
        date: Date.now(),
        favorite: false,
        imgSrc: '',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dignissimos voluptates laudantium exercitationem voluptatem debitis delectus corporis beatae ut'
        
    };


    const ValidationSchema = Yup.object().shape({
        productName: Yup.string()
            .max(25, 'Too Long!')
            .required('Product name is required'),
        price: Yup.number()
            .min(1, 'Price must be greater than 0')
            .max(1000000, 'What are you Jeff Bezos??')
            .required('Price is required'),
        currency: Yup.string()
            .max(3, 'Invalid currency, must be 3 characters')
            .required('Currency is required'),
    })
  return (
    <>
        <Formik
            initialValues={initialValues}
            validationSchema={ValidationSchema}
            onSubmit={(values: IProduct, { setSubmitting }: FormikHelpers<IProduct>) => {
                    setTimeout(() => {
                        onUpdateData(values.id ,values.productName, values.price, values.currency)
                        setSubmitting(false)
                        setIsUpdate(false);
                        
                    }, 400)

            }}
        >

            {({ isSubmitting, errors, touched }: FormikProps<IProduct>) => (
                <StyledForm>
                    <InputWrapper>
                        <StyledLabel htmlFor="productName"></StyledLabel>
                        <StyledField name="productName" type="text" required/>
                        {errors.productName && touched.productName ? ( <Error visible={true}>*{errors.productName}</Error>) : <Error visible={false}/>}
                    </InputWrapper>

                    <InputWrapper>
                        <StyledLabel htmlFor="price"></StyledLabel>
                        <StyledField name="price" type="number" required min="0.1" step=".01"/>
                        {errors.price && touched.price ? ( <Error visible={true}>*{errors.price}</Error>) : <Error visible={false}/>}
                    </InputWrapper>

                    <InputWrapper>
                        <StyledLabel htmlFor="currency"></StyledLabel>
                        <StyledField name="currency" type="text" required />
                        {errors.currency && touched.currency ? ( <Error visible={true}>*{errors.currency}</Error>) : <Error visible={false}/>}
                    </InputWrapper>

                    <ButtonWrapper>
                        <Button 
                        fill="#10B981" 
                        type="submit" 
                        disabled={isSubmitting}
                        >Update
                        </Button>

                        <Button
                        fill="#F44444" 
                        type="submit" 
                        disabled={isSubmitting} 
                        onClick={() => setIsUpdate(false)}
                        >Cancel
                        </Button>
                    </ButtonWrapper>

                </StyledForm>
            )}
        </Formik>
    </>
  )
}

export default UpdateForm