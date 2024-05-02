import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-expect-error так делать нельзя это чисто чтобы увидеть фоллбэк
    setTimeout(() => resolve(import('./MainPage')), 1500);
}));
