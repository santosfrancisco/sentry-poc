import pkg from '../package.json';

import * as Sentry from '@sentry/react-native';

export const initSentry = (
  routingInstrumentation: Sentry.ReactNavigationV5Instrumentation,
) => {
  Sentry.init({
    dsn: 'https://8d6fd957968e4e738263dd6087fa09bd@o983951.ingest.sentry.io/5945751',
    environment: 'develop',
    integrations: [
      new Sentry.ReactNativeTracing({
        routingInstrumentation,
        beforeNavigate: (context) => {
          // Aqui pode tratar as informações da rota para não
          // enviar dados sensíveis ou mascarar algum dado como CPF, etc
          console.log('Route:', context.data?.route || {});
          return context;
        },
      }),
    ],
    debug: true,
    release: pkg.version,
    onReady: () => console.log('Sentry start!', pkg.version),
    beforeSend: (event) => {
      // Aqui pode tratar o conteúdo do evento para não
      // enviar dados sensíveis ou mascarar algum dado como CPF, etc
      console.log('Sending: ', event);
      return event;
    },
  });
};
