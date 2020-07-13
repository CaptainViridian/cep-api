const { API_HOST, API_PORT } = process.env;

export const host = API_HOST || '0.0.0.0';
export const port = API_PORT || 9000;
