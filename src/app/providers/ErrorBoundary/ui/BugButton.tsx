import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

// For testing error boundaries
export const BugButton = () => {
    const [error, setError] = useState(false);

    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    const { t } = useTranslation();
    return (
        <Button onClick={onThrow}>{t('Throw error')}</Button>
    );
};
