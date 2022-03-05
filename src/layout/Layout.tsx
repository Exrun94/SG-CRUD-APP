import React, { useContext, useEffect } from "react";
import { GridContainer, UtilsContainer } from "./Layout.styles"
import { FrameMotionContext } from "../context/FrameMotionContext";
import { PermissionsContext } from '../context/PermissionsContext';
import HeaderComponent from "./HeaderComponent"
import SidebarComponent from "./SidebarComponent"
import ProductsComponent from "./ProductsComponent"
import Search  from '../components/search/Search';
import Button from "../components/buttons/Button";
import MotionFrame from "../components/form/MotionFrame";
import UpdateForm from "../components/form/UpdateForm";
import CreateForm from "../components/form/CreateForm";
import usePermissions from "../hooks/usePermissions";



const Layout = () => {
    const { isCreate, isUpdate } = useContext(FrameMotionContext)
    const { setOnCreatePermission, setOnReadPermission, setOnUpdatePermission, setOnDeletePermission, onReadPermission } = useContext(PermissionsContext);
    const { getPermissions } = usePermissions();

    useEffect(() => {
        const fetchPermissions = async () => {
            const permissions = await getPermissions();
            if(permissions) {
                setOnCreatePermission(permissions.onCreate)
                setOnReadPermission(permissions.onRead)
                setOnUpdatePermission(permissions.onUpdate)
                setOnDeletePermission(permissions.onDelete)
            }
        }
        fetchPermissions()
    }, [])


  return (
    <>
        <GridContainer>
            <HeaderComponent />
            <SidebarComponent />
            <UtilsContainer>
                <Search />
                <Button />
            </UtilsContainer>
            {isCreate && <MotionFrame children={<CreateForm />}/>}
            {isUpdate && <MotionFrame children={<UpdateForm />}/>}
            {onReadPermission && <ProductsComponent/>}
        </GridContainer>
    </>
  )
}

export default Layout