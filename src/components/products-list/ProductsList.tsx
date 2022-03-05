import React, { useContext, useEffect } from 'react'
import useProducts from '../../hooks/useProducts';
import IProduct from '../../interfaces/Product'
import { db } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { ProductContext } from '../../context/ProductContext';
import { FrameMotionContext } from '../../context/FrameMotionContext';
import { Container, Card, Image, ImgContainer, MainInfo, ProductName, ProductPrice, DescriptionContainer, Description, IconsWrapper, IconFavorite, IconEdit, IconDelete  } from './ProductsList.styles'

const ProductsList = () => {
    const { onProductChange, productsList, setProductsList, onSearch } = useContext(ProductContext);
    const { setIsUpdate } = useContext(FrameMotionContext)
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
                        <IconFavorite />
                        <IconEdit onClick={() => onUpdate(product.id, product.productName, product.price, product.currency)} />
                        <IconDelete onClick={() => onDelete(product.id)}/>
                    </IconsWrapper>

                </DescriptionContainer>
   
            </Card>
        )})}    
        </Container>
    </>
  )
}

export default ProductsList