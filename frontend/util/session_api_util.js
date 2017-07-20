export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: {user} // after console logging, not even receiving ajax request
  })
);

export const login = user => (
$.ajax({
  method: 'POST',
  url: '/api/session',
  data: {user}  //when wrapping as an object 'destrctures' and turns user into a key where then we can access the value which is the username and password
})
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);
