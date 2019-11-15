import { fork, all } from "redux-saga/effects";

import Search from "./Search";

const rootSaga = function*() {
  yield all([...Search.map(watcher => fork(watcher))]);
};

export default rootSaga;
