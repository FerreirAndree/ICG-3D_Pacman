let routes = {};
let currentRoute = null;
let fallbackRoute = '/menu';

function normalizePath(path) {
  const cleaned = String(path || '')
    .replace(/^#/, '')
    .trim();
  const withoutQuery = cleaned.split('?')[0] || fallbackRoute;
  const withSlash = withoutQuery.startsWith('/') ? withoutQuery : `/${withoutQuery}`;
  return withSlash.replace(/\/+$/, '') || fallbackRoute;
}

function parseHash(hash = window.location.hash) {
  const raw = String(hash || '').replace(/^#/, '') || fallbackRoute;
  const [pathPart, queryPart = ''] = raw.split('?');
  const query = Object.fromEntries(new URLSearchParams(queryPart));

  return {
    path: normalizePath(pathPart),
    query
  };
}

function buildHash(path, query = {}) {
  const normalizedPath = normalizePath(path);
  const params = new URLSearchParams();

  Object.entries(query).forEach(([key, value]) => {
    if (value === undefined || value === null || value === false) return;
    params.set(key, value === true ? '1' : String(value));
  });

  const queryString = params.toString();
  return `#${normalizedPath}${queryString ? `?${queryString}` : ''}`;
}

function runRoute() {
  const nextRoute = parseHash();
  const route = routes[nextRoute.path];

  if (!route) {
    navigateTo(fallbackRoute, { replace: true });
    return;
  }

  if (currentRoute?.path === nextRoute.path) {
    route.update?.(nextRoute);
    currentRoute = nextRoute;
    return;
  }

  if (currentRoute) {
    routes[currentRoute.path]?.exit?.(nextRoute);
  }

  currentRoute = nextRoute;
  route.enter?.(nextRoute);
}

export function registerRoutes(routeMap, options = {}) {
  routes = routeMap;
  fallbackRoute = normalizePath(options.fallbackRoute || fallbackRoute);

  window.addEventListener('hashchange', runRoute);

  if (!window.location.hash) {
    navigateTo(fallbackRoute, { replace: true });
    return;
  }

  if (!routes[parseHash().path]) {
    navigateTo(fallbackRoute, { replace: true });
    return;
  }

  runRoute();
}

export function navigateTo(path, options = {}) {
  const targetHash = buildHash(path, options.query);

  if (window.location.hash === targetHash) {
    runRoute();
    return;
  }

  if (options.replace) {
    window.location.replace(targetHash);
    runRoute();
    return;
  }

  window.location.hash = targetHash;
}

export function getCurrentRoute() {
  return currentRoute;
}
