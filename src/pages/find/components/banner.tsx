import React from "react";
import { Swiper } from "react-vant";
// import axios from "api";
import styles from "../style.module.less";

interface IBannerrProps {
  items: any[];
}

const Banner: React.FC<IBannerrProps> = (props) => {
  return (
    <div className={styles.banner}>
      {props.items.length ? (
        <Swiper autoplay={5000}>
          {props.items.map((item: any) => (
            <Swiper.Item key={item.pic}>
              <div className={styles.item}>
                <img className={styles.pic} src={item.pic} alt={item.typeTitle} />
                <span className={styles.title} style={{backgroundColor: item.titleColor}}>{item.typeTitle}</span>
              </div>
            </Swiper.Item>
          ))}
        </Swiper>
      ) : null}
    </div>
  );
};

export default Banner;
