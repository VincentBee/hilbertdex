import classNames from "classnames/bind";
import Link from "next/link";
import { generatePages } from "../utils/pagination";
import styles from "./Pagination.module.css";

let cx = classNames.bind(styles);

export interface PaginationProps {
  total: number;
  currentPage: number;
  pageSize?: number;
}

export const Pagination = ({
  currentPage,
  total,
  pageSize = 20,
}: PaginationProps) => {
  const numberOfPage = Math.floor(total / pageSize);
  const pages = generatePages(numberOfPage, currentPage, pageSize);

  return (
    <ul className={styles.pagination}>
      {pages.map(page => (
        <li key={page.index}
          className={cx(styles.item, {
            [styles.current]: page.index == currentPage
          })}
        >
          {page.link ? (
            <Link href={page.link} className={styles.link}>
              {page.label}
            </Link>
          ) : (
            <>{page.label}</>
          )}
        </li>
      ))}
    </ul>
  )
}

