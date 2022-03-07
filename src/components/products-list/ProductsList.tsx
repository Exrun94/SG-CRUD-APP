import React, { useContext, useEffect } from "react";
import useProducts from "../../hooks/useProducts";
import IProduct from "../../interfaces/Product";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { ProductContext } from "../../context/ProductContext";
import {
  Container,
  Card,
  Image,
  ImgContainer,
  MainInfo,
  ProductName,
  ProductPrice,
  DescriptionContainer,
  Description,
  IconsWrapper,
  IconEdit,
  IconDelete,
  MainData,
  DescriptionHeader,
  DateAdded,
} from "./ProductsList.styles";
import { PermissionsContext } from "../../context/PermissionsContext";
import { SortContext } from "../../context/SortContext";
import moment from "moment";

const ProductsList = () => {
  const {
    onProductChange,
    productsList,
    onSearch,
    setProductsList,
  } = useContext(ProductContext);
  const { sortBy } = useContext(SortContext);
  const { onUpdatePermission, onDeletePermission } = useContext(
    PermissionsContext
  );
  const { onDelete, onUpdate } = useProducts();
  const productsCollectionRef = collection(db, "Products");

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      const result = data.docs.map(
        (doc) => ({ ...doc.data(), id: doc.id } as IProduct)
      );

      if (sortBy === "name") {
        const sorted = result.sort((a, b) => {
          return a.productName.localeCompare(b.productName);
        });
        setProductsList(sorted);
      } else if (sortBy === "price") {
        const sorted = result.sort((a, b) => {
          return a.price - b.price;
        });
        setProductsList(sorted);
      } else if (sortBy === "date") {
        const sorted = result.sort((a, b) => {
          return a.date - b.date;
        });
        setProductsList(sorted);
      }
    };
    getProducts();
  }, [onProductChange]);

  return (
    <>
      <Container>
        {productsList
          .filter((product) => {
            return product.productName
              .toLocaleLowerCase()
              .includes(onSearch.toLocaleLowerCase());
          })
          .map((product) => {
            return (
              <Card key={product.id}>
                <ImgContainer>
                  <Image src={product.imgSrc} />
                </ImgContainer>
                <MainData>
                  <ProductName>{product.productName}</ProductName>
                  <MainInfo>
                    <ProductPrice>
                      {product.price.toFixed(2)}{" "}
                      <sup>{product.currency.toUpperCase()}</sup>
                    </ProductPrice>
                  </MainInfo>
                </MainData>
                <DescriptionContainer>
                  <DescriptionHeader>Description</DescriptionHeader>
                  <DateAdded>
                    Date:{" "}
                    <span>
                      {moment(product.date).format("DD/MM/YYYY HH:mm")}
                    </span>
                  </DateAdded>
                  <Description>{product.description}</Description>
                  <IconsWrapper>
                    {onUpdatePermission && (
                      <IconEdit
                        onClick={() =>
                          onUpdate(
                            product.id,
                            product.productName,
                            product.price,
                            product.currency
                          )
                        }
                      />
                    )}
                    {onDeletePermission && (
                      <IconDelete onClick={() => onDelete(product.id)} />
                    )}
                  </IconsWrapper>
                </DescriptionContainer>
              </Card>
            );
          })}
      </Container>
    </>
  );
};

export default ProductsList;
