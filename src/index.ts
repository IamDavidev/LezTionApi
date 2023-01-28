import { Application, Router } from 'https://deno.land/x/oak/mod.ts';

const router = new Router();
const app = new Application();

router.get('/', (ctx) => {
  ctx.response.body = 'Hello world';
});

const abortController = new AbortController();
const port = 8080;

const $bootstrap = async (abortController: AbortController) => {
  try {
    app.use(router.routes());
    app.use(router.allowedMethods());

    app.addEventListener('listen', () => {
      console.log('Server is running', port);
    });

    await app.listen({
      port,
      signal: abortController.signal,
    });
  } catch (err) {
    console.trace(err);

    app.addEventListener('error', (err) => {
      console.log('Server error', err);
      abortController.abort();
    });
  }
};

$bootstrap(abortController);
