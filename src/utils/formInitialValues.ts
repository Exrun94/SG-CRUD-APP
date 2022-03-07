import IProduct from "../interfaces/Product";

const formInitialValues: IProduct = {
  id: "",
  productName: "",
  price: 0,
  currency: "",
  date: Date.now(),
  imgSrc: "",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dignissimos voluptates laudantium exercitationem voluptatem debitis delectus corporis beatae ut",
};

export default formInitialValues;
