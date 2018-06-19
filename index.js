function get(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

function set(name, value, expires) {
  let cookie = name + '=' + encodeURIComponent(value);

  if (expires instanceof Date) {
    cookie += ';expires=' + expires.toUTCString();
  }

  cookie += ';path=/';
  document.cookie = cookie;
}

function remove(name) {
  set(name, '', new Date(0));
}

export default {
  get, set, remove
};
