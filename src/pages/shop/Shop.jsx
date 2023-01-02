import { useEffect, useState } from "react";
import { instance } from "../../api/api";
import { Container, List, Category } from "./styles";
import Items from "./items/Items";

const Tag = ({ value, onClick }) => {
  return (
    <div
      className="box"
      value={value}
      role="presentation"
      onClick={onClick}
      onKeyUp={() => {}}
    >
      {value}
    </div>
  );
};

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [tags, setTags] = useState("");
  const fetchData = async () => {
    try {
      const res = await instance.request("/products/search", {
        method: "post",
        data: {
          // searchText: "Vintage Mini Television sale icon",
          searchTags: [tags],
        },
      });
      if (res.status === 200) {
        console.log(res.data);
        setProducts(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const tagsClick = (event) => {
    if (event.target.getAttribute("value") === "All") {
      setTags("");
    } else {
      setTags(event.target.getAttribute("value"));
    }
  };

  useEffect(() => {
    fetchData();
  }, [tags]);

  return (
    <Container>
      <Category>
        <Tag value="All" onClick={tagsClick} />
        <Tag value="Home" onClick={tagsClick} />
        <Tag value="Office" onClick={tagsClick} />
        <Tag value="Outdoor" onClick={tagsClick} />
      </Category>
      <List>
        {products.map((product) => (
          <Items key={product.id} props={product} />
        ))}
      </List>
    </Container>
  );
};

export default Shop;
