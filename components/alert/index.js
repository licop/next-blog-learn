import styles from './index.module.css';
import cn from 'classnames';

export default function Alert({ children, type }) {
  return (
    <span
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error'
      })}
    >
      {children}
    </span>
  )
}