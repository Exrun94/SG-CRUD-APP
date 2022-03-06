import React, { useContext } from 'react'
import { FrameMotionContext } from '../../context/FrameMotionContext';
import { Formik, FormikHelpers, FormikProps } from 'formik';
import { StyledField, StyledForm, StyledLabel, ButtonWrapper, Button, InputWrapper, Error } from './Form.styles'
import * as Yup from 'yup';
import {db} from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ProductContext } from '../../context/ProductContext';
import IProduct from '../../interfaces/Product';
import { createApi } from "unsplash-js";

const api = createApi({ accessKey: 'viKl522r1TKUcjWViY0-y6Sp0788bYjYAIHkvJgnVxs' });

const AddForm = () => {
    const { setIsCreate } = useContext(FrameMotionContext)
    const { onProductChange, setOnProductChange } = useContext(ProductContext)
    const productsCollectionRef = collection(db, 'Products');

    const initialValues: IProduct = {
        id: '',
        productName: '',
        price: 0,
        currency: '',
        date: Date.now(),
        favorite: false,
        imgSrc: '',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dignissimos voluptates laudantium exercitationem voluptatem debitis delectus corporis beatae ut'
    };

    const saveProduct = async (data: IProduct) => {
        data.imgSrc = await useUnsplash(data.productName);
        await addDoc(productsCollectionRef, data);
        setOnProductChange(!onProductChange);
    }

    const useUnsplash = async (imgSrc: string): Promise<any> => {
        const result = await api.search.getPhotos({query: imgSrc, orientation: 'landscape'})
        return result?.response?.results[0].urls.regular
    }
    
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
                        saveProduct(values)
                        setSubmitting(false)
                        setIsCreate(false);
                    }, 400)
            }}
        >

            {({ isSubmitting, errors, touched }: FormikProps<IProduct>) => (
                <StyledForm>
                    <InputWrapper>
                        <StyledLabel htmlFor="productName"></StyledLabel>
                        <StyledField name="productName" type="text" required placeholder="Enter Product"/>
                        {errors.productName && touched.productName ? ( <Error visible={true}>*{errors.productName}</Error>) : <Error visible={false}/>}
                    </InputWrapper>

                    <InputWrapper>
                        <StyledLabel htmlFor="price"></StyledLabel>
                        <StyledField name="price" type="number" required min="0.1" step=".01" placeholder="Enter Price"/>
                        {errors.price && touched.price ? ( <Error visible={true}>*{errors.price}</Error>) : <Error visible={false}/>}
                    </InputWrapper>

                    <InputWrapper>
                        <StyledLabel htmlFor="currency"></StyledLabel>
                        <StyledField name="currency" type="text" placeholder="Example: 'USD'" required />
                        {errors.currency && touched.currency ? ( <Error visible={true}>*{errors.currency}</Error>) : <Error visible={false}/>}
                    </InputWrapper>

                    <ButtonWrapper>
                        <Button 
                        fill="#10B981" 
                        type="submit" 
                        disabled={isSubmitting}
                        >Create
                        </Button>

                        <Button
                        fill="#F44444" 
                        type="submit" 
                        disabled={isSubmitting} 
                        onClick={() => setIsCreate(false)}
                        >Cancel
                        </Button>
                    </ButtonWrapper>

                </StyledForm>
            )}
        </Formik>
    </>
  )
}

export default AddForm