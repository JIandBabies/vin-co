import { useState, useEffect } from "react";
import Container from "./styles";
import { instance } from "../../../api/api";
import BankList from "./BankList";

const Bank = () => {
  const [bankLists, setBankLists] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const token = localStorage.getItem("token");

      try {
        const res = await instance.request("/account", {
          method: "get",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.status === 200) {
          setBankLists(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  if (bankLists.accounts === undefined) {
    return <div> Loading...</div>;
  }
  return (
    <Container>
      <div className="content">
        <div className="title">나의 계좌 관리</div>
      </div>
      {!bankLists ? (
        <div>등록된 계좌가 없습니다.</div>
      ) : (
        bankLists.accounts.map((list) => <BankList key={list.id} list={list} />)
      )}
      <button type="button" className="bank-add">
        계좌 추가
      </button>
    </Container>
  );
};

export default Bank;
