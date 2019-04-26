import api from './api';

const search = async (q, offset = 0, limit = 20) => {
  const { data } = await api.get('/search', { params: { q, offset, limit } });
  return data;
};

export default search;
