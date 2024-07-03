import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            {t('Main page')}
            {/* <BugButton /> */}
            {/* <Counter /> */}
        </div>
    );
};

export default MainPage;
