export const update_logged_in_status = (logged_in_state) => {
  return {
    type: 'UPDATE_LOGGED_IN',
    payload: logged_in_state,
  };
};
