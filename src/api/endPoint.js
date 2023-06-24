const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

const appApi = (path) => `${REACT_APP_API_URL}/${path}`;

// API call routes
export const endpoints = () => ({
  // User API Routes
  userAPI: appApi("user/v1"),
 
});
