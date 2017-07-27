export const fetchUsers = query_params => {
  return $.ajax({
    method: 'GET',
    url: 'api/users',
    data: { query_params }
  });
};

export const fetchUser = id => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  });
};
