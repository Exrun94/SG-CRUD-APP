import { useContext } from 'react'
import { db } from '../firebase';
import { updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { ProductContext } from '../context/ProductContext';
import { FrameMotionContext } from '../context/FrameMotionContext';

const useProducts = () => {
    const { onProductChange, setOnProductChange, } = useContext(ProductContext);
    const { setIsUpdate, setUpdateData } = useContext(FrameMotionContext);

    const onUpdateData = async (id: string, productName: string, price: number, currency: string) => {
        try {
            const productDoc = doc(db, 'Products', id)
            const updatedData = {productName, price, currency}
            await updateDoc(productDoc, updatedData);
            setOnProductChange(!onProductChange);
        } catch (err) {
            console.log(err)
        }
    }

    const onUpdate = (id: string, productName: string, price: number, currency: string) => {
        setIsUpdate(true)
        setUpdateData({id, productName, price, currency})
    }

    const onDelete = async (id: string) => {
        try {
            const productDoc = doc(db, 'Products', id)
            await deleteDoc(productDoc);
            setOnProductChange(!onProductChange);
        } catch(err) {
            console.log(err)
        }
    }

    const onFavorite = async (id: string, state: boolean) => {
        try {
            const productDoc = doc(db, 'Products', id,)
            await updateDoc(productDoc, {favorite: !state})
            setOnProductChange(!onProductChange);
        }catch(err) {
            console.log(err)
        }
    }

    return {onDelete, onUpdate, onUpdateData, onFavorite}
}

export default useProducts;