import { AppIcon, faExclamationTriangle } from 'app/shell/icons';
import clsx from 'clsx';
import React from 'react';
import styles from './AlertIcon.m.scss';

export function AlertIcon({ className, title }: { className?: string; title?: string }) {
  return (
    <AppIcon
      className={clsx(className, styles.alertIcon)}
      title={title}
      icon={faExclamationTriangle}
    />
  );
}
