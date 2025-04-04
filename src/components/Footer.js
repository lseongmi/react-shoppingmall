import React from "react";
import style from "./footer.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={style.footer}>
      <div className={style.footerContent}>
        <div className={style.brand}>
          <h3 className={style.footerTitle}>리액트 쇼핑몰</h3>
          <p>React로 만든 예제 쇼핑몰 입니다.</p>
        </div>

        <div className={style.category}>
          <h3 className={style.footerTitle}>카테고리</h3>
          <ul className={style.categoryList}>
            <li className={style.categoryItem}>의류</li>
            <li className={style.categoryItem}>전자기기</li>
            <li className={style.categoryItem}>액세서리</li>
          </ul>
        </div>

        <div className={style.contact}>
          <h3 className={style.footerTitle}>고객센터</h3>
          <p>이메일 : w2307@e-mirim.hs.kr</p>
          <p>전화 : 010-8709-5869</p>
        </div>
      </div>

      <div className={style.copyright}>
        <p>&copy; {currentYear} 리액트 쇼핑몰. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
