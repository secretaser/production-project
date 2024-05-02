import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-expect-error так делать нельзя это чисто чтобы увидеть фоллбэк
    setTimeout(() => resolve(import('./AboutPage')), 1500);
}));
