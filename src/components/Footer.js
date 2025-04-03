import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear(); //지금 현재 날짜에서 연도 받아온 거

  return (
    <footer>
      <div>
        <div>
          <h3>리액트 쇼핑몰</h3>
          <p>React로 만든 예제 쇼핑몰 입니다.</p>
        </div>

        <div>
          <h3>카테고리</h3>
          <ul>
            <li>의류</li>
            <li>전자기기</li>
            <li>악세서리</li>
          </ul>
        </div>

        <div>
          <h3>고객센터</h3>
          <p>이메일 : w2307@e-mirim.hs.kr</p>
          <p>전화 : 010-8709-5869</p>
        </div>
      </div>

      <div>
        <p>&copy; {currentYear} 리액트 쇼핑몰. All Rights Reserved.</p>{" "}
        {/* 저작권 기호 */}
      </div>
    </footer>
  );
}

export default Footer;
