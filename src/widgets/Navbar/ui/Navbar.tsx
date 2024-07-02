import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import s from './Navbar.module.scss';

interface NavbarProps {
    className?: string;

}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(s.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={s.links}
                onClick={() => onToggleModal()}
            >
                {t('Log in')}
            </Button>
            {/* <button type="button" onClick={() => setIsOpen(true)}>toggle</button> */}
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {
                    // eslint-disable-next-line
                }
                Я ебал в рот тех хкто нее нбал в тор тех кто ебал в жопу тек кто не ебал
            </Modal>
        </div>
    );
};
