import React, { Component } from "react";
import Location from './Location.js';
import './App.css';

function Nav(props) {
  return (
    <div className="nav">
      <div className="nav-wrapper">
        <h1 className="nav-start">
          <a
           className="nav-icon">🥗</a>
          <span className="nav-title">공기밥</span>
        </h1>
        <div className="nav-center">
          <form className="nav-form">
            <div className='nav-click-wrapper'>
              {/* 여기 input말고 li로 바꿔서 선택할 수 있게 바꿔야함 */}
              <select aria-label="Default select example">
                <option selected>지역</option>
                <option value="1">강남구</option>
                <option value="2">강동구</option>
                <option value="3">강북구</option>
                <option value="4">강서구</option>
                <option value="5">관악구</option>
                <option value="6">광진구</option>
                <option value="7">구로구</option>
                <option value="8">금천구</option>
                <option value="9">노원구</option>
                <option value="10">도봉구</option>
                <option value="11">동대문구</option>
                <option value="12">동작구</option>
                <option value="13">마포구</option>
                <option value="14">서대문구</option>
                <option value="15">서초구</option>
                <option value="16">성동구</option>
                <option value="17">성북구</option>
                <option value="18">송파구</option>
                <option value="19">양천구</option>
                <option value="20">영등포구</option>
                <option value="21">용산구</option>
                <option value="22">은평구</option>
                <option value="23">종로구</option>
                <option value="24">중구</option>
                <option value="25">중랑구</option>
              </select>

              <select aria-label="Default select example">
                <option selected>카테고리</option>
                <option value="1">양식</option>
                <option value="2">중식</option>
                <option value="3">한식</option>
              </select>

              <select aria-label="Default select example">
                <option selected>가격대</option>
                <option value="1">1만 이하</option>
                <option value="2">1만 ~ 2만</option>
                <option value="3">2만 이상 </option>
              </select>
              


              {/* 검색이 필요한가? */}
              <button className="nav-click-button">🏸</button>
            </div>
          </form>
        </div>
        <div className="nav-end">
          <button className="nav-bookmark">💖</button>
          <div className="nav-profile"></div>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="container">
      <div className="container-wrapper">
        <Location />
      </div>
    </div>
  )
}

function App() {
  return (
    <div className='whole'>
      <Nav />
      <Container />
    </div >
  );
}

export default App;
