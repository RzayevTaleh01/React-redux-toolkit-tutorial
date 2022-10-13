import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode, setLanguage } from "../stores/SiteSlice";

const Footer = () => {
  const { dark, language } = useSelector((state) => state.site);
  const languages = ["az", "eng"];

  const dispatch = useDispatch();

  return (
    <div className="footer">
      <div>
        {language === "eng" ? (
          <h2>Change Page Language</h2>
        ) : (
          <h2>Səhifənin Dilini Dəyiş</h2>
        )}
        {languages.map((button, index) => (
          <button
            onClick={() => dispatch(setLanguage(button))}
            className={button === language ? "active" : ""}
            key={index}
          >
            {button}
          </button>
        ))}
      </div>
      <div>
        {language === "eng" ? (
          <h2>Change Page Theme</h2>
        ) : (
          <h2>Səhifənin Temasını Dəyiş</h2>
        )}

        <button onClick={() => dispatch(setDarkMode())}>
          {dark ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default Footer;
