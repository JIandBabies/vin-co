import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { MdOutlineCameraAlt } from "react-icons/md";
import { useEffect, useState } from "react";
import { instance } from "../../api/api";
import { Container, StyledForm, UploaderWrapper } from "./style";

// yup.setLocale({
//   string: {
//     min: `${min}자 이상 입력바랍니다.`,
//   },
// });

const Signup = () => {
  const [profileImgBase64, setProfileImgBase64] = useState("");
  const [profilePreview, setProfilePreview] = useState("");
  const navigate = useNavigate();
  const shcema = yup.object().shape({
    email: yup.string().required("이메일을 입력해주세요"),
    password: yup.string().min(8).required("비밀번호를 입력해주세요"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다")
      .required(),
    displayName: yup.string().required("이름을 입력해주세요"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(shcema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    const { email, password, displayName, profileImg } = data;
    // const token = localStorage.getItem("token");

    const toBase64 = (profileImg) => {
      const reader = new FileReader();
      reader.readAsDataURL(profileImg);
      reader.addEventListener("load", (e) => {
        const { result } = e.target;
        setProfileImgBase64(result);
      });
    };

    toBase64(profileImg[0]);
    console.log(profileImg[0]);

    try {
      const res = await instance.request("/auth/signup", {
        method: "post",
        data: {
          email,
          password,
          displayName,
          profileImgBase64,
        },
      });
      if (res.status === 200) {
        localStorage.setItem("token", res.data.accessToken);
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const profile = watch("profileImg");
  useEffect(() => {
    if (profile && profile.length > 0) {
      const file = profile[0];
      setProfilePreview(URL.createObjectURL(file));
    }
  }, [profile]);

  return (
    <section
      style={{
        margin: "80px 0",
      }}
    >
      <Container>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <UploaderWrapper profilePreview={profilePreview}>
            <label className="img-uploader">
              <div className="profile" />
              <span className="icon-wrapper">
                <MdOutlineCameraAlt />
              </span>
              <input type="file" {...register("profileImg")} />
            </label>
          </UploaderWrapper>
          <input type="text" placeholder="이메일" {...register("email")} />
          {errors.email?.message && <p>{errors.email?.message}</p>}
          <input
            type="password"
            placeholder="비밀번호"
            {...register("password")}
          />
          {errors.password?.message && <p>{errors.password?.message}</p>}
          <input
            type="password"
            placeholder="비밀번호 확인"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword?.message && (
            <p>{errors.confirmPassword?.message}</p>
          )}

          <div className="username-wrapper">
            <label htmlFor="username">이름</label>
            <input
              type="text"
              id="username"
              placeholder="이름을 입력하세요"
              {...register("displayName")}
            />
            {errors.displayName?.message && (
              <p>{errors.displayName?.message}</p>
            )}
          </div>

          <button type="submit">가입하기</button>
        </StyledForm>
      </Container>
    </section>
  );
};
export default Signup;
