import React from 'react';
import { useCategories } from '../hooks/useCategories';
import { useProducts } from '../hooks/useProducts';
import "./Styles.css";

import { useState } from 'react';
//import styled from "styled-components";



export default function Categories() {


  const [selectedcategory, setTitle] = useState("all");

  const obj = useCategories();
  const oneProduct = useProducts();

  const CategoryName = (props) => {
    return <button className="category-btn" onClick={() => { setTitle(props.name) }}>{props.name}</button>
  }
  const Title = () => {
    return <div>{selectedcategory}</div>
  }
  const ProductsList = (props) => {
    return <div>
      <h2>{props.name}</h2>
    </div>
  }

  if (obj.loading) return <div>spinner...</div>;
  if (obj.error) return <div>something went wrong</div>;
  console.log(obj.error, obj.loading, obj.data);
  //console.log(oneProduct.error, oneProduct.loading, oneProduct.data);
  if (oneProduct.loading) return <div>spinner...</div>;
  if (oneProduct.error) return <div>something went wrong</div>;
  return (
    <section>
      <div className="Category"> {obj.data.categories.map(category => {
        return <CategoryName name={category.name} />
      })}
        <Title />
      </div>
      <div>{oneProduct.data.categories.products.map(product => {
        return <ProductsList name={product.name} />
      })}</div>
    </section>
  )
}


