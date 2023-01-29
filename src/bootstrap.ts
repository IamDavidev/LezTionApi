import { app } from './clients/app.ts';
import { router } from './clients/router.ts';
import { logger } from './utils/looger.ts';

export async function $bootstrap(
  abortController: AbortController,
  port: number
) {
  try {
    app.use(router.routes());
    app.use(router.allowedMethods());

    app.addEventListener('listen', () => {
      logger.info(`Server is running on port ${port}`);
    });

    await app.listen({
      port,
      signal: abortController.signal,
    });
  } catch (err) {
    logger.info('Server is shutting down', err);

    app.addEventListener('error', (err) => {
      logger.error('Server error', err);
      abortController.abort();
    });
  }
}
