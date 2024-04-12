import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import i18n from 'shared/config/i18n/i18n';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import s from './LangSwitcher.module.scss';

interface LangSwitcherProps {
   className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames(s.LangSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t('Language')}
        </Button>
    );
};
