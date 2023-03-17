import ga4 from 'react-ga4';

const TRACKING_ID = 'G-2BGF397BDF';
const isProduction = process.env.NODE_ENV === 'production';

export const init = () => ga4.initialize(TRACKING_ID, {
    testMode: !isProduction
});

export const sendEvent = (name: string) => ga4.event('screen_view', {
    app_name: "speakers",
    screen_name: name,
});

export const sendPageview = (path: string) => ga4.send({
    hitType: 'pageview',
    page: path
});