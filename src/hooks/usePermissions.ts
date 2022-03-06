import { useContext } from 'react';
import { db } from '../firebase';
import { updateDoc, doc, getDoc, } from 'firebase/firestore';
import { PermissionsContext } from '../context/PermissionsContext';
import IPermissions from '../interfaces/Permissions'

const usePermissions = () => {
    const {setOnCreatePermission, setOnReadPermission, setOnUpdatePermission, setOnDeletePermission} = useContext(PermissionsContext)

    const getPermissions = async () => {
        try {
            const docRef = doc(db, 'Permissions', 'CRUD')
            const permissionsDoc = await getDoc(docRef)
            const permissions = permissionsDoc.data() as IPermissions;
            return permissions
            
        }catch(err) {
            console.log(err)
        }
    }

    const createPermission = async (onCreatePermission: boolean) => {
        try {
            const permissionDoc = doc(db, 'Permissions', 'CRUD')
            await updateDoc(permissionDoc, {onCreate: onCreatePermission})
        } catch(err) {
            console.log(err)
        } finally {
            setOnCreatePermission(onCreatePermission)
        }
    }

    const readPermission = async (onReadPermission: boolean) => {
        try {
            const permissionDoc = doc(db, 'Permissions', 'CRUD')
            await updateDoc(permissionDoc, {onRead: onReadPermission})
        } catch(err) {
            console.log(err)
        } finally {
            setOnReadPermission(onReadPermission)
        }
    }

    const updatePermission = async (onUpdatePermission: boolean) => {
        try {
            const permissionDoc = doc(db, 'Permissions', 'CRUD')
            await updateDoc(permissionDoc, {onUpdate: onUpdatePermission})
        } catch(err) {
            console.log(err)
        } finally {
            setOnUpdatePermission(onUpdatePermission)
        }
    }

    const deletePermission = async (onDeletePermission: boolean) => {
        try {
            const permissionDoc = doc(db, 'Permissions', 'CRUD')
            await updateDoc(permissionDoc, {onDelete: onDeletePermission})
        }catch(err) {
            console.log(err)
        } finally {
            setOnDeletePermission(onDeletePermission)
        }
    }
    
    return { 
        getPermissions, 
        createPermission, 
        readPermission, 
        updatePermission, 
        deletePermission,
    }
}

export default usePermissions;