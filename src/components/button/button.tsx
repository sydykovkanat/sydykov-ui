import React, { PropsWithChildren } from 'react';
import styles from './button.module.css';

type Props = Readonly<PropsWithChildren>;

export const Button: React.FC<Props> = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};
