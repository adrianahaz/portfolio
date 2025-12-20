import './components/pages/Home.js';

export const routes = [{ path: '/', label: 'Home', view: 'home-page' }];

function matchRoute(pathname) {
  const pathSeg = pathname.replace(/^\/|\/$/g, '').split('/');

  for (const route of routes) {
    const routeSeg = route.path.replace(/^\/|\/$/g, '').split('/');

    if (routeSeg.length !== pathSeg.length) continue;

    let params = {};

    let matched = true;

    for (let i = 0; i < routeSeg.length; i++) {
      const r = routeSeg[i];

      const p = pathSeg[i];

      if (r.startsWith(':')) {
        params[r.slice(1)] = p;
      } else if (r !== p) {
        matched = false;

        break;
      }
    }

    if (matched) return { route, params };
  }
}

export function router() {
  const app = document.querySelector('#app');
  const pathname = window.location.pathname;

  const matched = matchRoute(pathname);

  if (matched) {
    app.innerHTML = '';

    const pageElement = document.createElement(matched.route.view);
    pageElement.params = matched.params;

    app.appendChild(pageElement);
  } else {
    app.innerHTML = '<h1>404 Not Found</h1>';
  }

  window.dispatchEvent(
    new CustomEvent('route-changed', {
      detail: { pathname },
    })
  );
}
