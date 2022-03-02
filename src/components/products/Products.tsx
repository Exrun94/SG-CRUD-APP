import React, {useState} from 'react'
import { IconsWrapper, IconFavorite, IconEdit, IconDelete, ProductsWrapper, Table, Thead, Tbody, Tr, Td} from './Products.styles'

const mockData = [
    {
        id: 1,
        name: 'ProductProductProductProductProductProduct 1',
        price: '$100',
        currency: 'USD',
        date: '01/01/2020'
    },
    {
        id: 2,
        name: 'Product 2',
        price: '$2002423424234242342342424242424',
        currency: 'USD',
        date: '01/01/2020'
    },
    {
        id: 3,
        name: 'Product 3',
        price: '$300',
        currency: 'USD',
        date: '01/01/2020'
    },
    {
        id: 4,
        name: 'Product 4',
        price: '$400',
        currency: 'USD',
        date: '01/01/2020'
    },
]


const Products = () => {
    const [delay, useDelay] = useState(0)
  return (
    <>
        <ProductsWrapper>
            <Table>
                <Thead>
                    <Tr>
                        <Td className="id">#</Td>
                        <Td>Name</Td>
                        <Td>Price</Td>
                        <Td>Currency</Td>
                        <Td>Date</Td>
                        <Td>Actions</Td>
                    </Tr>
                </Thead>
                <Tbody>
                    {mockData.map((product) => {
                        return (
                            <Tr key={product.id} className="row">
                                <Td className="id">{product.id}.</Td>
                                <Td>{product.name}</Td>
                                <Td>{product.price}</Td>
                                <Td>{product.currency}</Td>
                                <Td>{product.date}</Td>
                                <Td>
                                    <IconsWrapper>
                                        <IconFavorite />
                                        <IconEdit />
                                        <IconDelete />
                                    </IconsWrapper>
                                </Td>
                            </Tr>
                        )
                    })}
                </Tbody>
            </Table>
        </ProductsWrapper>
    </>
  )
}

export default Products