import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { instance } from "../../api/api";
import AddressModal from "./AddressModal";
import ModalPayment from "./ModalPayment";
import banks from "./Banks";

const InputForm = styled.div`
  margin: 10px;
  > div {
    padding: 5px 0;
    line-height: 20px;
    font-size: 12px;
  }
  > input {
    padding: 10px 0;
    &:invalid {
      border: none;
      outline: 1px solid red;
    }
    &:invalid + div {
      display: block;
      color: red;
    }
    &:valid {
      outline: none;
    }
    &:valid + div {
      display: none;
    }
  }
`;
const InputForm2 = styled.div`
  position: relative;
  margin: 10px;
  > div {
    padding: 5px 0;
    line-height: 20px;
    font-size: 12px;
  }
  > input {
    padding: 10px 0;
    width: 100%;
    &:invalid {
      border: none;
      outline: 1px solid red;
    }
    &:invalid + div {
      display: block;
      color: red;
    }
    &:valid {
      outline: none;
    }
    &:valid + div {
      display: none;
    }
  }
`;

const ItemPrice = ({ price }) => {
  const itemprice = price.toLocaleString();
  return <div style={{ fontWeight: "700" }}>{itemprice}원</div>;
};

const Payment = () => {
  const [userData, setUserData] = useState({});
  const [checkSame, setCheckSame] = useState(true);
  const [userDelivery, setUserDelivery] = useState({});
  const [visible, setVisible] = useState(false);
  const [writeInfo, setWriteInfo] = useState({});
  const [order, setOrder] = useState(false);
  const [modalPaymentId, setModalPaymentId] = useState("");
  const [account, setAccount] = useState({});
  const [accountLink, setAccountLink] = useState(false);
  const [accountInfo, setAccountInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [buyIt, setBuyIt] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (accountLink === false && loading === true) {
      const removeData = async () => {
        const token = localStorage.getItem("token");

        try {
          const res = await instance.request("/account", {
            method: "delete",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            data: {
              accountId: account.id,
              signature: true,
            },
          });
          if (res.status === 200) {
            console.log(res.data);
            setAccount("");
          }
        } catch (error) {
          console.log(error);
        }
      };
      removeData();
    }
  }, [accountLink]);

  const items2 = location.state.items;
  const delivery = items2.reduce(
    (acc, item) => acc + item.price * item.number,
    0,
  );
  const localeDelivery = delivery.toLocaleString();
  const localeDelivery2 = (delivery + 2500).toLocaleString();

  const onChangeName = (event) => {
    setUserData((prev) => {
      return {
        ...prev,
        displayName: event.target.value.replace(/[^ㄱ-ㅎ가-힣$]/g, ""),
      };
    });
  };

  const onChangeEmail = (event) => {
    setUserData((prev) => {
      return { ...prev, email: event.target.value };
    });
  };

  const onChangeTel = (event) => {
    const value = event.target.value.replace(/[^0-9$]/g, "");
    setUserData((prev) => {
      return { ...prev, tel: value };
    });
  };

  const shipToBill = (checked) => {
    if (checked) {
      setUserDelivery({ displayName: userData.displayName, tel: userData.tel });
    }
  };

  const onSame = (checked) => {
    if (checked) {
      setCheckSame(true);
      shipToBill(checked);
    } else {
      setCheckSame(false);
      setUserDelivery({});
    }
  };

  const deliveryName = (event) => {
    setUserDelivery({
      displayName: event.target.value.replace(/[^ㄱ-ㅎ가-힣$]/g, ""),
    });
  };

  const deliveryTel = (event) => {
    const value = event.target.value.replace(/[^0-9]/g, "");
    setUserDelivery((prev) => {
      return { ...prev, tel: value };
    });
  };

  const handleComplete = (data) => {
    const fullAddress = data.roadAddress;
    const zoneCode = data.zonecode;
    setWriteInfo({ ...writeInfo, address: fullAddress, code: zoneCode });
    setVisible(false);
  };

  const openModalPayment = (id) => {
    setModalPaymentId(id);
  };

  const closeModalPayment = () => {
    setModalPaymentId("");
  };

  const setClose = async () => {
    if (
      /^[가-힣]{2,4}$/.test(userData.displayName) &&
      /^[0-9]{11}$/.test(userData.tel) &&
      /^[a-z0-9.\-_]+@([a-z0-9-]+\.)+[a-z]{2,6}$/.test(userData.email) &&
      /^[가-힣]{2,4}$/.test(userDelivery.displayName) &&
      /^[0-9]{11}$/.test(userDelivery.tel) &&
      writeInfo.code !== undefined &&
      writeInfo.address !== undefined &&
      buyIt === true
    ) {
      return (
        await setAccountLink(false), setLoading(false)
        // window.location.replace("/")
      );
    }
    return alert("주문서 양식을 올바르게 입력해 주세요.");
  };

  return (
    <div style={{ backgroundColor: "lightgray" }}>
      <div
        style={{
          textAlign: "center",
          padding: "50px 0",
          fontSize: "25px",
        }}
      >
        결제하기
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ margin: "20px" }}>
          <div
            style={{
              backgroundColor: "white",
              padding: "50px",
            }}
          >
            <div
              style={{
                fontSize: "20px",
                fontWeight: "700",
                paddingBottom: "50px",
              }}
            >
              주문 상품 정보
            </div>
            <div style={{ border: "1px solid gray" }}>
              {items2.map((item) => (
                <div
                  key={item.id}
                  style={{ display: "flex", borderBottom: "1px solid gray" }}
                >
                  <img
                    src={item.photo}
                    alt={item.name}
                    style={{ width: "80px", height: "80px", padding: "10px" }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      lineHeight: "20px",
                    }}
                  >
                    <div>{item.name}</div>
                    <div style={{ color: "gray", fontSize: "14px" }}>
                      {item.number}개
                    </div>
                    <ItemPrice price={item.price} />
                  </div>
                </div>
              ))}
              <div
                style={{
                  display: "flex",
                  aliginItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  backgroundColor: "lightgray",
                }}
              >
                <div>배송비</div>
                {delivery < 50000 ? (
                  <div style={{ padding: "0 10px", fontWeight: "700" }}>
                    2,500
                  </div>
                ) : (
                  <div style={{ padding: "0 10px", fontWeight: "700" }}>
                    무료
                  </div>
                )}
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: "20px",
              backgroundColor: "white",
              padding: "20px",
            }}
          >
            <div
              style={{
                fontSize: "20px",
                fontWeight: "700",
                paddingBottom: "50px",
              }}
            >
              주문자 정보
            </div>
            <div>
              <div>
                <div style={{ display: "flex" }}>
                  <InputForm>
                    <input
                      type="text"
                      placeholder="이름"
                      value={userData.displayName || ""}
                      onChange={onChangeName}
                      id="txtName"
                      pattern="^[가-힣]{2,4}$"
                      required
                    />
                    <div>이름을 입력해주세요</div>
                  </InputForm>
                  <InputForm>
                    <input
                      type="tel"
                      placeholder="연락처"
                      value={userData.tel || ""}
                      onChange={onChangeTel}
                      id="txtTel"
                      pattern="^[0-9]{11}$"
                      maxLength="11"
                      required
                    />
                    <div>
                      전화번호를 올바르게 입력해주세요
                      <br />
                      (&quot;-&quot;는 입력하지 않습니다.)
                    </div>
                  </InputForm>
                </div>
                <InputForm>
                  <input
                    type="text"
                    placeholder="이메일"
                    value={userData.email || ""}
                    onChange={onChangeEmail}
                    pattern="^[0-9a-zA-Z]+@[0-9a-zA-Z]+\.[a-z]{2,4}$"
                    required
                  />
                  <div>이메일 주소를 올바르게 입력해주세요.</div>
                </InputForm>
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: "20px",
              backgroundColor: "white",
              padding: "20px",
            }}
          >
            <div
              style={{
                fontSize: "20px",
                fontWeight: "700",
                paddingBottom: "50px",
              }}
            >
              배송정보
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <input
                  type="checkbox"
                  id="same"
                  onChange={(e) => onSame(e.target.checked)}
                  style={{ width: "20px", height: "20px" }}
                />
                <label htmlFor="same">주문자 정보와 동일</label>
              </div>
              <div>
                <div style={{ display: "flex" }}>
                  <InputForm>
                    <input
                      type="text"
                      placeholder="수령인"
                      onChange={deliveryName}
                      value={userDelivery.displayName || ""}
                      pattern="^[가-힣]{2,4}$"
                      required
                    />
                    <div>수령인의 성함을 올바르게 입력해주세요.</div>
                  </InputForm>
                  <InputForm>
                    <input
                      type="tel"
                      placeholder="연락처"
                      onChange={deliveryTel}
                      value={userDelivery.tel || ""}
                      maxLength="11"
                      pattern="^[0-9]{11}$"
                      required
                    />
                    <div>
                      수령인의 전화번호를 올바르게 입력해주세요
                      <br />
                      (&quot;-&quot;는 입력하지 않습니다.)
                    </div>
                  </InputForm>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <InputForm>
                    <input
                      type="text"
                      placeholder="우편번호"
                      value={writeInfo.code}
                      onClick={() => setVisible(true)}
                      required
                    />
                    <div>배달주소를 올바르게 입력해주세요.</div>
                  </InputForm>
                  <button
                    type="button"
                    onClick={() => setVisible(true)}
                    style={{
                      border: "1px solid black",
                      padding: "10px",
                      backgroundColor: "lightgray",
                    }}
                  >
                    주소찾기
                  </button>
                </div>
                <InputForm2>
                  <input
                    type="text"
                    placeholder="주소"
                    value={writeInfo.address}
                    onClick={() => setVisible(true)}
                    required
                  />
                  <div>배달주소를 올바르게 입력해주세요.</div>
                </InputForm2>
                {visible && (
                  <AddressModal
                    setWriteInfo={setWriteInfo}
                    setVisible={setVisible}
                    handleComplete={handleComplete}
                  />
                )}
                <div style={{ margin: "10px" }}>
                  <input
                    type="text"
                    placeholder="상세주소"
                    style={{ width: "100%", padding: "10px 0" }}
                  />
                </div>
              </div>
              <div style={{ margin: "20px 10px" }}>
                <div style={{ margin: "20px 0 10px", fontWeight: "700" }}>
                  배송메모
                </div>
                <select
                  onChange={(event) => {
                    if (event.target.value === "order") {
                      return setOrder(true);
                    }
                    return setOrder(false);
                  }}
                  style={{ padding: "10px", width: "100%" }}
                >
                  <option>배송메모를 선택해 주세요.</option>
                  <option>배송 전에 미리 연락 바랍니다.</option>
                  <option>부재시 경비실에 맡겨주세요.</option>
                  <option>부재시 전화나 문자를 남겨주세요.</option>
                  <option value="order">직접입력 </option>
                </select>
                {order && (
                  <input type="text" placeholder="배송 메모를 입력해 주세요." />
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: "20px",
            position: "sticky",
            top: "50px",
            height: "fit-content",
          }}
        >
          <div>
            <div
              style={{
                backgroundColor: "white",
                marginBottom: "20px",
                padding: "20px",
              }}
            >
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  marginBottom: "20px",
                }}
              >
                주문요약
              </div>
              <div>
                <div style={{ borderBottom: "1px solid gray" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      margin: "10px 0",
                    }}
                  >
                    <div style={{ color: "gray" }}>상품가격</div>
                    <div>{localeDelivery}원</div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      margin: "10px 0",
                    }}
                  >
                    <div style={{ color: "gray" }}>배송비</div>
                    {delivery < 50000 ? <div>2,500</div> : <div>무료</div>}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    margin: "20px 0 10px",
                  }}
                >
                  <div>총 주문금액</div>
                  <div style={{ fontWeight: "700" }}>
                    {delivery < 50000 ? localeDelivery2 : localeDelivery}원
                  </div>
                </div>
              </div>
            </div>
            <div style={{ backgroundColor: "white", padding: "20px" }}>
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  marginBottom: "20px",
                }}
              >
                결제수단
              </div>
              <div
                style={{ display: "flex", flexWrap: "wrap", width: "260px" }}
              >
                {banks.map((bank) => (
                  <div
                    key={bank.code}
                    style={{
                      border: "1px solid lightgray",
                      width: "80px",
                      height: "80px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => openModalPayment(bank.code)}
                    >
                      <img
                        src={bank.src}
                        alt={bank.name}
                        style={{ width: "40px", height: "40px" }}
                      />
                      <div>{bank.name}</div>
                    </button>
                    {modalPaymentId === bank.code && (
                      <ModalPayment
                        bank={bank}
                        items={items2}
                        closeModalPayment={closeModalPayment}
                        loading={loading}
                        setLoading={setLoading}
                        accountInfo={accountInfo}
                        setAccountInfo={setAccountInfo}
                        accountLink={accountLink}
                        setAccountLink={setAccountLink}
                        account={account}
                        setAccount={setAccount}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div
                style={{
                  backgroundColor: "white",
                  margin: "20px 0",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "20px",
                  }}
                >
                  <input
                    type="checkbox"
                    id="ok"
                    onChange={(event) => {
                      setBuyIt(event.target.checked);
                    }}
                    value={buyIt}
                    style={{ width: "20px", height: "20px" }}
                  />
                  <label htmlFor="ok">구매조건 확인 및 결제진행에 동의</label>
                </div>
                <button
                  type="button"
                  onClick={setClose}
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    fontWeight: "700",
                    fontSize: "25px",
                    width: "100%",
                    padding: "5px",
                  }}
                >
                  결제하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
