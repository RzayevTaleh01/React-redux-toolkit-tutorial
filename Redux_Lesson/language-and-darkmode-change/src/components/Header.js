import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const { dark, language } = useSelector((state) => state.site);
  return (
    <div>
      <h2>{language === "eng" ? "Header Info" : "Başlıq Məlumatları"}</h2>

      <div>
        {language === "eng" ? "Dark Mode: " : "Qaranlıq rejim: "}{" "}
        {dark ? "True" : "False"}
        <br />
        {language === "eng" ? "Page Language: " : "Səhifə Dili: "} {language}
      </div>
    </div>
  );
};

export default Header;
