export const fetchUsers = users => {
  return $.ajax({
    method: 'GET',
    url: 'api/users',
    data: { users }
  });
};

export const fetchUser = id => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  });
};
