import _ from 'lodash';

const debounced = _.debounce(callback => callback(), 1000);
const debounce = callback => debounced(callback);

export default debounce;
