import React, { useContext, useEffect } from 'react'
import useProducts from '../../hooks/useProducts';
import IProduct from '../../interfaces/Product'
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { ProductContext } from '../../context/ProductContext';
import { Container, Card, Image, ImgContainer, MainInfo, ProductName, ProductPrice, DescriptionContainer, Description, IconsWrapper, IconFavorite, IconEdit, IconDelete  } from './ProductsList.styles'

const ProductsList = () => {
    const { onProductChange, productsList, setProductsList } = useContext(ProductContext);
    const {onDelete, onUpdate} = useProducts();

    const productsCollectionRef = collection(db, 'Products');

    useEffect(() => {

        const getProducts = async () => {
            const data = await getDocs(productsCollectionRef);
            const result: any = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
            const sorted = result.sort((a: IProduct, b: IProduct) => {
                return a.date - b.date
            })
            setProductsList(sorted)
        }

        getProducts();
    }, [onProductChange])

    

  return (
    <>
        <Container>
        {productsList.map((product) => {
                        return (
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
                        <IconFavorite />
                        <IconEdit onClick={() => onUpdate(product.id, product.price)}/>
                        <IconDelete onClick={() => onDelete(product.id)} />
                    </IconsWrapper>

                </DescriptionContainer>
   
            </Card>
        )})}    
        </Container>
    </>
  )
}

export default ProductsList