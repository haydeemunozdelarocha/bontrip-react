export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('bontrip-user');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('bontrip-user', serializedState);
  } catch {
    // ignore write errors
  }
};
