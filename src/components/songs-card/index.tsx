import * as React from "react";
import styles from "./style.module.less";
interface ISongsCardProps {
  item: any;
}

const SongsCard: React.FunctionComponent<ISongsCardProps> = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.box}>
        <span className={styles.tag}>
          <i className="card cardbofang"></i>
          {props.item.playCount || props.item.playcount}
        </span>
        <img
          className={styles.image}
          src={props.item.picUrl || props.item.coverImgUrl}
          alt={props.item.name}
        />
      </div>
      <div className={styles.name}>{props.item.name}</div>
    </div>
  );
};

export default SongsCard;
