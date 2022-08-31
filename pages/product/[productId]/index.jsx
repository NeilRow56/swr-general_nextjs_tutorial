import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const ProductItem = () => {

  const router = useRouter()
  const { productId } = router.query

  return (
    <div>
      <h1> Details about Product {productId} </h1>
      <Link href='/'>
        <a> Home</a>
        
        </Link>
    </div>
  )
}

export default ProductItem