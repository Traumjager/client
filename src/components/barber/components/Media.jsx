import React from "react";
import css from "../styles/media.module.scss";

const data = [
  "https://images.unsplash.com/photo-1593702295094-aea22597af65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  "https://c0.wallpaperflare.com/preview/716/263/589/barber-barbershop-facial-expression-facial-hair.jpg",
  "https://c0.wallpaperflare.com/preview/294/433/80/barber-barbershop-close-up-commerce.jpg",
  "https://i.pinimg.com/originals/7e/f8/30/7ef8304f3ab8bbb47400e54bc9db21e6.jpg",
  
  "https://i.pinimg.com/originals/3f/2f/e2/3f2fe2c6b9b27253e19269d6c0a7381e.jpg",
  'https://images.unsplash.com/photo-1590540179852-2110a54f813a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
  "https://c0.wallpaperflare.com/preview/835/11/588/adult-barber-barbershop-cut.jpg",
  "https://lh4.googleusercontent.com/proxy/dXot_WMsqLjGvmZ7bouxQxxWkAQKGdYILr9M0ewyviZD0rCvLnc0H7UD-MF4imnVpIn45tl0GoJU1W7KM5J_o301kybY6gpZK21FE7-goSdDU8UvQg=s0-d",
  "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  "https://images.pexels.com/photos/2076931/pexels-photo-2076931.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
];

function Media() {
  return (
    <div className={css.bodyy}>
      <h1>Gallary</h1>
      <div className={css.gridCcontainer}>
        {data.map((item,idx) =>(
          <div>
          <img
            className={`grid-item grid-item-${idx +1}`}
            src={item}
            alt=""
          />
        </div>
        ))}
      </div>
    </div>
  );
}

export default Media;
