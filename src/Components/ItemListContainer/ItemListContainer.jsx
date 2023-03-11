import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const { categoryId } = useParams();

  const [items, setItems] = useState([]);

  const filterProducts = products.filter(
    (element) => element.category === categoryId
  );

  useEffect(() => {
    const productList = new Promise((resolve, reject) => {
      resolve(categoryId ? filterProducts : products);
    });

    productList
      .then((res) => {
        setItems(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryId]);

  console.log(items);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;