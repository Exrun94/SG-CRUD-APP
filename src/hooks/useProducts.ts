import { useContext } from "react";
import { db } from "../firebase";
import {
  updateDoc,
  doc,
  deleteDoc,
  collection,
  addDoc,
} from "firebase/firestore";
import { ProductContext } from "../context/ProductContext";
import { FrameMotionContext } from "../context/FrameMotionContext";
import IProduct from "../interfaces/Product";

const useProducts = () => {
  const { onProductChange, setOnProductChange } = useContext(ProductContext);
  const { setIsUpdate, setUpdateData } = useContext(FrameMotionContext);
  const productsCollectionRef = collection(db, "Products");

  const saveProduct = async (data: IProduct, img: string) => {
    data.imgSrc = img;
    data.productName =
      data.productName.charAt(0).toUpperCase() + data.productName.slice(1);
    await addDoc(productsCollectionRef, data);
    setOnProductChange(!onProductChange);
  };

  const onUpdateData = async (
    id: string,
    productName: string,
    price: number,
    currency: string
  ) => {
    try {
      const productDoc = doc(db, "Products", id);
      const updatedData = { productName, price, currency };
      await updateDoc(productDoc, updatedData);
      setOnProductChange(!onProductChange);
    } catch (err) {
      console.log(err);
    }
  };

  const onUpdate = (
    id: string,
    productName: string,
    price: number,
    currency: string
  ) => {
    setIsUpdate(true);
    setUpdateData({ id, productName, price, currency });
  };

  const onDelete = async (id: string) => {
    try {
      const productDoc = doc(db, "Products", id);
      await deleteDoc(productDoc);
      setOnProductChange(!onProductChange);
    } catch (err) {
      console.log(err);
    }
  };

  const onFavorite = async (id: string, state: boolean) => {
    try {
      const productDoc = doc(db, "Products", id);
      await updateDoc(productDoc, { favorite: !state });
      setOnProductChange(!onProductChange);
    } catch (err) {
      console.log(err);
    }
  };

  return { onDelete, onUpdate, onUpdateData, onFavorite, saveProduct };
};

export default useProducts;
