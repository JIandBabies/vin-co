import { useEffect } from "react";
import { instance } from "../../api/api";

const ModalPayment = ({
  bank,
  closeModalPayment,
  loading,
  setLoading,
  accountInfo,
  setAccountInfo,
  accountLink,
  setAccountLink,
  setAccount,
}) => {
  useEffect(() => {
    if (accountLink === true) {
      const getData = async () => {
        const token = localStorage.getItem("token");

        try {
          const res = await instance.request("/account", {
            method: "post",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            data: {
              bankCode: bank.code,
              accountNumber: accountInfo.accountNumber,
              phoneNumber: accountInfo.phoneNumber,
              signature: true,
            },
          });
          if (res.status === 200) {
            console.log(res.data);
            setAccount(res.data);
          }
        } catch (error) {
          console.log(error);
        }
      };
      getData();
    }
  }, [accountLink]);

  const accountLength = bank.digits.reduce((a, b) => a + b, 0);

  const setPhoneNumber = (event) => {
    const value = event.target.value.replace(/[^0-9]/g, "");
    setAccountInfo((prev) => {
      return { ...prev, phoneNumber: value };
    });
  };

  const accountInfoNumber = (event) => {
    const value = event.target.value.replace(/[^0-9]/g, "");
    setAccountInfo((prev) => {
      return { ...prev, accountNumber: value };
    });
  };

  const setOK = async () => {
    if (
      String(accountInfo.accountNumber).length === accountLength &&
      String(accountInfo.phoneNumber).length === 11
    ) {
      // eslint-disable-next-line no-sequences
      return await setLoading(true), setAccountLink(true), closeModalPayment();
    }
    return alert("계좌연동이 되지 않았습니다. 다시 확인해주세요.");
  };

  return (
    <div>
      <div>결제 진행</div>
      <div>
        <div>
          <div>결제은행</div>
          <div>{bank.name}</div>
        </div>
        <div>
          <input
            type="text"
            placeholder="계좌번호"
            maxLength={accountLength}
            minLength={accountLength}
            value={accountInfo.accountNumber || ""}
            onChange={accountInfoNumber}
          />
          <div>
            계좌번호를 올바르게 입력해주세요(&quot;-&quot;는 입력하지 않습니다.)
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="전화번호"
            maxLength="11"
            value={accountInfo.phoneNumber || ""}
            onChange={setPhoneNumber}
          />
          <div>
            전화번호를 올바르게 입력해주세요(&quot;-&quot;는 입력하지 않습니다.)
          </div>
        </div>
        <button type="button" onClick={setOK}>
          결제
        </button>
      </div>
    </div>
  );
};

export default ModalPayment;
