import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import s from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div
            data-testid="sidebar"
            className={classNames(s.Sidebar, { [s.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={s.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={s.items}>
                <AppLink theme={AppLinkTheme.SECONDARY} className={s.item} to={RoutePath.main}>
                    <MainIcon className={s.icon} />
                    <span className={s.link}>
                        {t('Main page')}
                    </span>
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} className={s.item} to={RoutePath.about}>
                    <AboutIcon className={s.icon} />
                    <span className={s.link}>
                        {t('About')}
                    </span>
                </AppLink>
            </div>

            <div className={s.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={s.lang} />
            </div>
        </div>
    );
};
