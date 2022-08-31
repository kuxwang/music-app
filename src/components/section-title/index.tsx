import * as React from "react";
import styles from "./style.module.less";

interface ISectionTitleProps {
  name: string;
  desc?: string;
  right?: string;
  handler?: any;
  children?: any;
}

const SectionTitle: React.FunctionComponent<ISectionTitleProps> = (props) => {
  return (
    <div>
      <div className={styles.title}>
        <div>
          <span className={styles.name}>{props.name}</span>
          {!!props.desc && <span className={styles.desc}>{props.desc}</span>}
        </div>
        <div className={styles.square} onClick={() => props.handler()}>
          {props.right}
        </div>
      </div>
      <div className='px-12'>{props.children}</div>
    </div>
  );
};

export default SectionTitle;
