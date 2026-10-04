import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Application } from './components/application';

async function enableMocking() {
  if (!import.meta.env.DEV) return;

  const { worker } = await import('./mocks/browser');

  // Registration is async. Rendering first lets the opening /api/tasks
  // request leave the browser before the worker can intercept it.
  await worker.start({ onUnhandledRequest: 'bypass' });
}

enableMocking()
  .catch((error) => {
    console.error('Mock Service Worker failed to start.', error);
  })
  .then(() => {
    createRoot(document.getElementById('root')).render(
      <StrictMode>
        <Application />
      </StrictMode>,
    );
  });
