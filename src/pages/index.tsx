import React from "react";
import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Category } from "../components/category";
import Image from 'next/image';
import MoreButton from "../components/Button/MoreButton";
import {AiOutlineDown } from "react-icons/ai";
import {Item} from '../components/Content/Item';
import Link from 'next/link';

export default function Home() {

    var settings = {
        dots: false,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 3,
        speed: 1000,
        cssEase: 'ease',
      };

    return (
        <Main>
            {/* 카테고리 슬라이더 */}
            <Section1 className = "wrap">
                <Slider {...settings}>
                    <div><Category img="/category/category_1.png" name="직접 제작" /> <Category img="/category/category_10.png" name="도서/음반/티켓" /></div>
                    <div><Category img="/category/category_2.png" name="아이디어/특허" /> <Category img="/category/category_11.png" name="팬 굿즈" /></div>
                    <div><Category img="/category/category_3.png" name="여성 패션" /> <Category img="/category/category_12.png" name="가구/인테리어" /></div>
                    <div><Category img="/category/category_4.png" name="남성패션" /> <Category img="/category/category_13.png" name="뷰티/미용" /> </div>
                    <div><Category img="/category/category_5.png" name="식품" /> <Category img="/category/category_14.png" name="잡화/주얼리" /></div>
                    <div><Category img="/category/category_6.png" name="주방/생활 용품" /> <Category img="/category/category_15.png" name="유아동" /></div>
                    <div><Category img="/category/category_7.png" name="스포츠/취미" /> <Category img="/category/category_16.png" name="반려동물 용품" /></div>
                    <div><Category img="/category/category_8.png" name="디지털기기" /> <Category img="/category/category_17.png" name="기타 물품" /></div>
                    <div><Category img="/category/category_9.png" name="식물" /> <Category img="/category/category_18.png" name="러비 찾아요" /></div>
                </Slider>
                <Image src="/category/main_slider.png" alt="" width={88} height={12} />
            </Section1>
            <div>
                <ItemArea>
                    <Item title = "초강력 괴물 흡입력 청소기" state = "공구모집 중" tag = {['#유아용', '아이디어/특허']}/>
                    <Item title = "과일 슬라이서" state = "수요조사 중" tag = {['#유아용', '아이디어/특허']}/>
                    <Item title = "손바닥 보호 비닐봉지 실리콘 손잡이" state = "공구모집 중" tag = {['#유아용', '아이디어/특허']}/>
                    <Item title = "김치 파우더" state = "수요조사 중" tag = {['#유아용', '아이디어/특허']}/>
                    <Item title = "오징어게임 운동복 공구 진행해줄 러비 찾아요!" state = "공구모집 중" tag = {['#유아용', '아이디어/특허']}/>
                    <Item title = "구르미 그린 전등" state = "공구모집 중" tag = {['#유아용', '아이디어/특허']}/>
                </ItemArea>              
                <More>더보기<AiOutlineDown/></More>
                <MovetoStory href ="/#">
                    <img src = "/componentImg/product_img_story.png"/>
                </MovetoStory>
            </div>  
            <Fixbutton>
                <Link href="/write">
                    <a><img src = "componentImg/btn_create.png"/></a>
                </Link>
             </Fixbutton>
        </Main>
    );
}


const Main = styled.div`
    margin-right:auto;
    margin-left:auto;
    justify-content:center;
    display: flex;
    flex-direction: column;
    text-align: center;
    width:360px;
    .div{
        
    }
`;

const Section1 = styled.section`
    margin-top: 15px;
    width:360px;
    height: 177px;
    overflow: hidden;
`;

const ItemArea = styled.div`
    Margin-top:15px;
    text-align: center;
    padding-left: 7px;
    padding-right: 7px;
`;

const MovetoStory = styled.a`
    display:flex;
    img{
        margin-bottom: 15px;
        margin-right: auto;
        margin-left: auto;

        width:360px;
        height: 102px;
        left: 0px;
        top: 907px;
    }
`;

const More = styled.button`
    display: block;     
    margin-right: auto;
    margin-left: auto;
    width: 328px;
    height: 32px;
    left: 16px;
    top: 860px;
    margin-bottom:15px;
    background: #FFFFFF;
    border: 1px solid #C4C4C4;
    box-sizing: border-box;
`;

const Fixbutton = styled.div `
  position: fixed; 
  left: 80.28%;
  right: 6.39%;
  top: 89.22%;
  bottom: 10.55%;
  img {
    width: 50px;
    height: 52.2px;
  }
`;