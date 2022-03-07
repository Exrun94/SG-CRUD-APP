import React, { useContext } from "react";
import { FrameMotionContext } from "../../context/FrameMotionContext";
import { Formik, FormikHelpers, FormikProps } from "formik";
import * as Yup from "yup";
import IProduct from "../../interfaces/Product";
import useProducts from "../../hooks/useProducts";
import formValidationSchema from "../../utils/formValidationSchema";
import {
  StyledField,
  StyledForm,
  StyledLabel,
  ButtonWrapper,
  Button,
  InputWrapper,
  Error,
} from "./Form.styles";

const UpdateForm = () => {
  const { setIsUpdate, updateData } = useContext(FrameMotionContext);
  const { onUpdateData } = useProducts();

  const initialValues: IProduct = {
    id: updateData.id,
    productName: updateData.productName,
    price: updateData.price,
    currency: updateData.currency,
    date: Date.now(),
    imgSrc: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dignissimos voluptates laudantium exercitationem voluptatem debitis delectus corporis beatae ut",
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={formValidationSchema}
        onSubmit={(
          values: IProduct,
          { setSubmitting }: FormikHelpers<IProduct>
        ) => {
          setTimeout(() => {
            onUpdateData(
              values.id,
              values.productName,
              values.price,
              values.currency
            );
            setSubmitting(false);
            setIsUpdate(false);
          }, 400);
        }}
      >
        {({ isSubmitting, errors, touched }: FormikProps<IProduct>) => (
          <StyledForm>
            <InputWrapper>
              <StyledLabel htmlFor="productName"></StyledLabel>
              <StyledField name="productName" type="text" required />
              {errors.productName && touched.productName ? (
                <Error visible={true}>*{errors.productName}</Error>
              ) : (
                <Error visible={false} />
              )}
            </InputWrapper>

            <InputWrapper>
              <StyledLabel htmlFor="price"></StyledLabel>
              <StyledField
                name="price"
                type="number"
                required
                min="0.1"
                step=".01"
              />
              {errors.price && touched.price ? (
                <Error visible={true}>*{errors.price}</Error>
              ) : (
                <Error visible={false} />
              )}
            </InputWrapper>

            <InputWrapper>
              <StyledLabel htmlFor="currency"></StyledLabel>
              <StyledField name="currency" type="text" required />
              {errors.currency && touched.currency ? (
                <Error visible={true}>*{errors.currency}</Error>
              ) : (
                <Error visible={false} />
              )}
            </InputWrapper>

            <ButtonWrapper>
              <Button fill="#10B981" type="submit" disabled={isSubmitting}>
                Update
              </Button>

              <Button
                fill="#F44444"
                type="submit"
                disabled={isSubmitting}
                onClick={() => setIsUpdate(false)}
              >
                Cancel
              </Button>
            </ButtonWrapper>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};

export default UpdateForm;
