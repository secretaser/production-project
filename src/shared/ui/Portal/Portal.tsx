import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import s from './Portal.module.scss';

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
    const {
        children,
        element = document.body,
    } = props;

    return createPortal(children, element);
};
