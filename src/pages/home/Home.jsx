import { useEffect, useState } from "react";
import { instance } from "../../api/api";
import { Container, Banner, Intro, List, Logo } from "./styles";
import Items from "../shop/items/Items";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await instance.request("/products", {
          method: "get",
          headers: {
            masterKey: true,
          },
        });
        if (res.status === 200) {
          setProducts(res.data);
          console.log(res);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Banner>
        <Logo>Vin-co</Logo>
      </Banner>
      <div>
        <Intro>Vin-co를 방문해주셔서 감사합니다.</Intro>
        <Intro>당신이 찾는 골동품 모두 여기에!</Intro>
      </div>
      <List>
        {products.map((product) => (
          <Items key={product.id} props={product} />
        ))}
      </List>
    </Container>
  );
};
export default Home;
