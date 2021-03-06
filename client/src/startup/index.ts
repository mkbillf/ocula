import './vendor';

import initialiseComponents from './components';
import initialiseState from './state';
import initialiseRouter from './router';
import initialiseApplication from './application';
import initialiseLogging from './logging';
import initialiseWorker from './worker';

export default function start() {
    initialiseComponents();
    
    const store = initialiseState();
    const router = initialiseRouter();
    const application = initialiseApplication(router, store);

    initialiseLogging();
    initialiseWorker(store);

    return {
        router,
        store,
        application
    };
}