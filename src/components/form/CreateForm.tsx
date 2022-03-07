import React, { FormEvent, useContext, useEffect, useState } from "react";
import IProduct from "../../interfaces/Product";
import formValidationSchema from "../../utils/formValidationSchema";
import formInitialValues from "../../utils/formInitialValues";
import unsplash from "../../utils/unsplash";
import { FrameMotionContext } from "../../context/FrameMotionContext";
import { Formik, FormikHelpers, FormikProps } from "formik";
import useProducts from "../../hooks/useProducts";
import LoadingSpinner from "../loading-spinner/LoadingSpinner";
import {
  StyledField,
  Unsplash,
  Img,
  StyledForm,
  StyledLabel,
  ButtonWrapper,
  Button,
  InputWrapper,
  Error,
} from "./Form.styles";

const AddForm = () => {
  const [images, setImages] = useState<string[]>([]);
  const [chosenImage, setChosenImage] = useState("https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930");
  const [input, setInput] = useState("");
  const [imgIndex, setImgIndex] = useState<null | number>(null);
  const [loading, setLoading] = useState(false);

  const { setIsCreate } = useContext(FrameMotionContext);
  const { saveProduct } = useProducts();

  // Fetches the images from the Unsplash API based on the productName input
  useEffect(() => {
    const fetchImages = async () => {
      const result = await unsplash(input);
      setImages(result.map((img: any) => img.urls.regular));
    };
    fetchImages();
  }, [input]);

  // Listens for the current ProductName input to be used in the unsplash fetch
  const handleOnChange = (event: FormEvent) => {
    const target = event.target as HTMLInputElement;
    setLoading(true)
    if (target.className.includes("target")) {
      setTimeout(() => {
        setInput(target.value);
        setLoading(false);
      }, 2000);
    }
  };

  // Finds current selected image in the Form to add styling and sets the URL in the useState hook
  const handleImage = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>,
    i: number
  ) => {
    const target = event.target as HTMLImageElement;
    target.classList.toggle("active");
    setChosenImage(target.src);
    setImgIndex(i);
  };

  return (
    <>
      <Formik
        initialValues={formInitialValues}
        validationSchema={formValidationSchema}
        onSubmit={(
          values: IProduct,
          { setSubmitting }: FormikHelpers<IProduct>
        ) => {
          setTimeout(() => {
            saveProduct(values, chosenImage);
            setSubmitting(false);
            setIsCreate(false);
          }, 400);
        }}
      >
        {({ isSubmitting, errors, touched }: FormikProps<IProduct>) => (
          <StyledForm onChange={handleOnChange}>
            <InputWrapper>
              <StyledLabel htmlFor="productName"></StyledLabel>
              <StyledField
                name="productName"
                type="text"
                required
                placeholder="Enter Product"
                className="target"
              />
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
                placeholder="Enter Price"
              />
              {errors.price && touched.price ? (
                <Error visible={true}>*{errors.price}</Error>
              ) : (
                <Error visible={false} />
              )}
            </InputWrapper>

            <InputWrapper>
              <StyledLabel htmlFor="currency"></StyledLabel>
              <StyledField
                name="currency"
                type="text"
                placeholder="Example: 'USD'"
                required
              />
              {errors.currency && touched.currency ? (
                <Error visible={true}>*{errors.currency}</Error>
              ) : (
                <Error visible={false} />
              )}
            </InputWrapper>

            {loading ? <LoadingSpinner/> : 
            <Unsplash>
              {images.map((img: string, i: number) => (
                <Img
                  key={img}
                  src={img}
                  className={imgIndex === i ? "active" : ""}
                  onClick={(e) => {
                    handleImage(e, i);
                  }}
                />
              ))}
            </Unsplash>}

            <ButtonWrapper>
              <Button fill="#10B981" type="submit" disabled={isSubmitting}>
                Create
              </Button>

              <Button
                fill="#F44444"
                type="submit"
                disabled={isSubmitting}
                onClick={() => setIsCreate(false)}
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

export default AddForm;
