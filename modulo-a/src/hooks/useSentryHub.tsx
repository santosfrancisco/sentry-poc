import * as React from 'react';
import * as Sentry from '@sentry/react-native';

export const useSentryHub = () => {
  const initSentry = () => {
    const CLIENT = Sentry.getCurrentHub().getClient();
    const localHub = new Sentry.Hub(CLIENT);

    localHub.run((currentHub) => {
      currentHub.configureScope((scope) => {
        scope.setTag('modulo-a', '0.0.1');
        return scope;
      });
    });

    return localHub;
  };

  const hub = React.useMemo(() => {
    return initSentry();
  }, []);

  return hub;
};
