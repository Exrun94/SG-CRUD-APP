import React, { useContext, useEffect } from 'react'
import IProduct from '../../interfaces/Product'
import { db } from '../../firebase';
import { collection, getDocs, DocumentData, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { ProductContext } from '../../context/ProductContext';
import { Container, Card, Image, ImgContainer, MainInfo, ProductName, ProductPrice, DescriptionContainer, Description, IconsWrapper, IconFavorite, IconEdit, IconDelete  } from './ProductsList.styles'

const data = {
    productName: 'Test Product',
    price: 100,
    currency: 'USD',
    imgSrc: 'https://images.unsplash.com/photo-1619845146106-38abf07e9c99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDcxMzd8MHwxfHNlYXJjaHwxfHxUZXNsYXxlbnwwfDB8fHwxNjQ2Mzg0MTIx&ixlib=rb-1.2.1&q=80&w=1080',
    date: 1646392334780,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dignissimos voluptates laudantium exercitationem voluptatem debitis delectus corporis beatae ut'
}

const ProductsList = () => {
    const { onProductChange, setOnProductChange, productsList, setProductsList } = useContext(ProductContext);

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

    const onUpdate = async (id: string, price: number) => {
        console.time('Update');
        const productDoc = doc(db, 'Products', id)
        const updatedData = {price: price + 1}
        await updateDoc(productDoc, updatedData);
        setOnProductChange(!onProductChange);
        console.timeEnd('Update')
    }


    const onDelete = async (id: string) => {
        
        const productDoc = doc(db, 'Products', id)
        console.time('Delete');
        await deleteDoc(productDoc);
        setOnProductChange(!onProductChange);
        console.timeEnd('Delete')
    }
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