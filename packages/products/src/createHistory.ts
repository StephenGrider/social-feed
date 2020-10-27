import { createMemoryHistory, createBrowserHistory, History } from 'history';

export function createHistory(rootHistory?: History) {
  if (!rootHistory) {
    return createBrowserHistory();
  }

  const history = createMemoryHistory({
    initialEntries: [
      rootHistory.location.pathname + rootHistory.location.search,
    ],
  });

  rootHistory.listen((rootLocation) => {
    const { pathname, search } = history.location;

    if (rootLocation.pathname + rootLocation.search !== pathname + search) {
      history.replace(rootLocation.pathname + rootLocation.search);
    }
  });

  history.listen((location) => {
    const { pathname, search } = rootHistory.location;

    if (location.pathname + location.search !== pathname + search) {
      rootHistory.push(location.pathname + location.search);
    }
  });

  return history;
}
