import { createSelector } from 'reselect';

// makeSelectLocationState expects a plain JS object for the routing state
const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route');

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

const selectApp = (state) => state.get('app');

const makeSelectUser = () => createSelector(
  selectApp,
  (appState) => appState.get('user'),
);

const makeSelectNotifications = () => createSelector(
  selectApp,
  (appState) => appState.get('notifications').toJS(),
);

export {
  selectApp,
  makeSelectUser,
  makeSelectNotifications,
  makeSelectLocationState,
};
