import styled from "styled-components";
import FindImgBtn from '../../assets/icons/img-button.svg';


// 헤더 제외 모든부분 감싸기 ----------------------
export const Content = styled.main`
    padding: 80px 34px 0px;
`;

// 이미지 파트 감싸기 ----------------------
export const ImgWrapper = styled.div`
    padding-bottom: 30px;
`;

// 이미지 라벨
export const ImgLabel = styled.label`
    padding-bottom: 50px;
    font-size: 12px;
    color: ${({theme}) => theme.palette.mediumGray};
`;

// 이미지 들어갈 곳(버튼 포함한 회색창) - 감싸기 태그 아님 !!
export const ProductImg = styled.div`
    width: 322px;
    height: 204px;
    margin-top: 18px;
    border-radius: 10px;
    position: relative;
    background-color: ${({ theme }) => theme.palette.border};
`;

// 이미지 내 버튼
export const ImgBtn = styled.img.attrs({
    src: FindImgBtn,
    alt: "이미지 업로드"
})`
    position: absolute;
    right: 12px;
    bottom: 12px;
    cursor: pointer;
`;

// 인풋박스 감싸기 ----------------------
export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

// 인풋박스 이름
export const ProductInputInfo = styled.p`
    color: ${({theme}) => theme.palette.mediumGray};
    font-size: 12px;

`

// 인풋창
export const ProductInput = styled.input`
    display: block;
    padding: 10px 0 8px 0;
    margin-bottom: 16px;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.palette.border};;
    ::placeholder {
        color: ${({ theme }) => theme.palette.border};
    }
`;



