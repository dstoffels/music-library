const DB_ROOT = 'http://127.0.0.1:8000/music/';

export const endpoint = (path = '') => {
	return DB_ROOT + path;
};
