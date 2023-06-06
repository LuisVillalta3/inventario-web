export const DOMAIN_URL = 'http://localhost:8000';
export const API_URL = `${DOMAIN_URL}/api`;
export const API_HEADER = {
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
}