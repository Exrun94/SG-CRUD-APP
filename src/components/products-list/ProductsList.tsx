import React, { useContext, useEffect } from 'react'
import useProducts from '../../hooks/useProducts';
import IProduct from '../../interfaces/Product'
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { ProductContext } from '../../context/ProductContext';
import { Container, Card, Image, ImgContainer, MainInfo, ProductName, ProductPrice, DescriptionContainer, Description, IconsWrapper, IconEdit, IconDelete  } from './ProductsList.styles'
import { PermissionsContext } from '../../context/PermissionsContext';


const ProductsList = () => {
    const { onProductChange, productsList, onSearch, setProductsList } = useContext(ProductContext);
    const { onUpdatePermission, onDeletePermission } = useContext(PermissionsContext);
    const {onDelete, onUpdate, onFavorite} = useProducts();
    const productsCollectionRef = collection(db, 'Products');

    useEffect(() => {
        const getProducts = async () => {
            const data = await getDocs(productsCollectionRef);
            const result = data.docs.map((doc) => ({...doc.data(), id: doc.id}) as IProduct);
            const sorted = result.sort((a, b) => {
                return a.date - b.date
            })
            setProductsList(sorted);
        }
        getProducts();
    }, [onProductChange])

    

  return (
    <>
        <Container>
        {productsList
            .filter((product) => {return product.productName.toLocaleLowerCase().includes(onSearch.toLocaleLowerCase())})
            .map((product) => { return (
            <Card key={product.id}>
                <ImgContainer>
                    <Image src={product.imgSrc} />
                </ImgContainer>
                    <DescriptionContainer>
                    <ProductName>{product.productName}</ProductName>
                    <Description>{product.description}</Description>
                    <MainInfo>
                        <ProductPrice>{product.price.toFixed(2)} <sup>{product.currency.toUpperCase()}</sup></ProductPrice>
                    </MainInfo>

                    <IconsWrapper>
                        {onUpdatePermission && <IconEdit onClick={() => onUpdate(product.id, product.productName, product.price, product.currency)} />}
                        {onDeletePermission && <IconDelete onClick={() => onDelete(product.id)}/>}
                    </IconsWrapper>

                </DescriptionContainer>
   
            </Card>
        )})}    
        </Container>
    </>
  )
}

export default ProductsList