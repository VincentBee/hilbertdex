import classNames from 'classnames/bind';
import styles from "./PageSize.module.css";

let cx = classNames.bind(styles);

export interface PageSizeProps {
  value: number;
  onChange?: (value: number) => void;
}

export const PageSize = ({ value, onChange }: PageSizeProps) => {

  return (
    <div className={styles.select}>
      <div
        className={cx(styles.item, {
          [styles.current]: value == 20
        })}
        onClick={() => onChange?.(20)}
      >
        20
      </div>
      <div
        className={cx(styles.item, {
          [styles.current]: value == 50
        })}
        onClick={() => onChange?.(50)}
      >
        50
      </div>
      <div
        className={cx(styles.item, {
          [styles.current]: value == 100
        })}
        onClick={() => onChange?.(100)}
      >
        100
      </div>
    </div>
  )
}
