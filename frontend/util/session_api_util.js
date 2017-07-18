export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users'
    data: console.log(user, "user"); // after console logging, not even receiving ajax request
  })
);

export const login = user => (
$.ajax({
  method: 'POST',
  url: '/api/session'
  data: user
})
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);
