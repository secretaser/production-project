import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import s from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className={classNames(s.Sidebar, { [s.collapsed]: collapsed }, [className])}>
            <button
                type="button"
                onClick={onToggle}
            >
                toggle
            </button>

            <div className={s.switchers}>
                <ThemeSwitcher className="leff" />
                <LangSwitcher className={s.lang} />
            </div>
        </div>
    );
};
