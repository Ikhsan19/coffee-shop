import React from 'react'

type Props = {
    description: string;
}

const ProductDetails = ({ description }: Props) => {
    return (
        <div>
            <p>{description}</p>
        </div>
    )
}

export default ProductDetails