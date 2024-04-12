import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, UseTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import s from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
   className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = UseTheme();
    return (
        <Button
            className={classNames(s.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
            theme={ThemeButton.CLEAR}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};