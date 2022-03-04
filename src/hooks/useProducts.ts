import { useContext } from 'react'
import { db } from '../firebase';
import { updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { ProductContext } from '../context/ProductContext';

const useProducts = () => {
    const { onProductChange, setOnProductChange } = useContext(ProductContext);

    const onUpdate = async (id: string, price: number) => {
        try {
            const productDoc = doc(db, 'Products', id)
            const updatedData = {price: price + 1}
            await updateDoc(productDoc, updatedData);
            setOnProductChange(!onProductChange);
        } catch (err) {
            console.log(err)
        }
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

    return {onDelete, onUpdate}
}

export default useProducts;