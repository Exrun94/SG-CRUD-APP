import React, { FormEvent, useContext, useEffect, useState } from "react";
import IProduct from "../../interfaces/Product";
import * as Yup from "yup";
import { FrameMotionContext } from "../../context/FrameMotionContext";
import { Formik, FormikHelpers, FormikProps } from "formik";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { ProductContext } from "../../context/ProductContext";
import { createApi } from "unsplash-js";
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

const api = createApi({
  accessKey: "viKl522r1TKUcjWViY0-y6Sp0788bYjYAIHkvJgnVxs",
});

const AddForm = () => {
  const [images, setImages] = useState<string[]>([]);
  const [chosenImage, setChosenImage] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"
  );
  const [input, setInput] = useState("");
  const [imgIndex, setImgIndex] = useState<null | number>(null);

  const { setIsCreate } = useContext(FrameMotionContext);
  const { onProductChange, setOnProductChange } = useContext(ProductContext);
  const productsCollectionRef = collection(db, "Products");

  const initialValues: IProduct = {
    id: "",
    productName: "",
    price: 0,
    currency: "",
    date: Date.now(),
    imgSrc: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dignissimos voluptates laudantium exercitationem voluptatem debitis delectus corporis beatae ut",
  };

  const saveProduct = async (data: IProduct) => {
    data.imgSrc = chosenImage;
    data.productName =
      data.productName.charAt(0).toUpperCase() + data.productName.slice(1);
    await addDoc(productsCollectionRef, data);
    setOnProductChange(!onProductChange);
  };

  const useUnsplash = async (imgSrc: string): Promise<any> => {
    const result = await api.search.getPhotos({
      query: imgSrc,
      orientation: "landscape",
    });
    return result?.response?.results;
  };

  useEffect(() => {
    const fetchImages = async () => {
      const unsplash = await useUnsplash(input);
      console.log(unsplash);
      setImages(unsplash.map((img: any) => img.urls.regular));
    };
    fetchImages();
  }, [input]);

  const handleOnChange = (event: FormEvent) => {
    const target = event.target as HTMLInputElement;
    if (target.className.includes("target")) {
      setTimeout(() => {
        setInput(target.value);
      }, 2000);
    }
  };

  const handleImage = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>,
    i: number
  ) => {
    const target = event.target as HTMLImageElement;
    target.classList.toggle("active");
    setChosenImage(target.src);
    setImgIndex(i);
  };

  const ValidationSchema = Yup.object().shape({
    productName: Yup.string()
      .max(25, "Too Long!")
      .required("Product name is required"),
    price: Yup.number()
      .min(1, "Price must be greater than 0")
      .max(1000000, "What are you Jeff Bezos??")
      .required("Price is required"),
    currency: Yup.string()
      .max(3, "Invalid currency, must be 3 characters")
      .required("Currency is required"),
  });
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={(
          values: IProduct,
          { setSubmitting }: FormikHelpers<IProduct>
        ) => {
          setTimeout(() => {
            saveProduct(values);
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
            </Unsplash>

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
