import React from "react";
import Logo from "../home/Logo";

import css from "./style/footer.module.css";

function Footer() {
  return (
    <div className={css.container}>
      <div className={css.left}>
        <p>About Us</p>
        <p>Github</p>
        <p>&copy; Traumjager</p>
      </div>

      <div className={css.center}>
        <Logo w="125" h="125" />
      </div>
      <div className={css.right}>
        <button className={css.facebook}>
            <i class="fab fa-behance"></i>
        </button>
        <button className={css.twitter}>
            <i class="fab fa-linkedin"></i>
        </button>
        <button className={css.instagram}>
            <i class="fab fa-github"></i>
        </button>
      </div>
    </div>
  );
}

export default Footer;
