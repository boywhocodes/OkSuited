export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: user // after console logging, not even receiving ajax request
  })
);

export const login = user => (
$.ajax({
  method: 'POST',
  url: '/api/session',
  data: user
})
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);
