import { classNames } from 'shared/lib/classNames/classNames'
import s from './AppLink.module.scss'
import { LinkProps, NavLink } from 'react-router-dom';
import { FC } from 'react';

export enum AppLinkTheme {
   PRIMARY = 'primary',
   SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
   className?: string;
   theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
   const {
      to,
      className,
      children,
      theme = AppLinkTheme.PRIMARY, ...otherProps
   } = props

   return (
      <NavLink
         to={to}
         className={classNames(s.AppLink, {}, [className, s[theme]])}
         {...otherProps}>
         {children}
      </NavLink>
   )
}