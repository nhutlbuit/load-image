import axios from 'axios';
import { parseItem } from './action-utils';

export const commentsTabApi = async () => {
  const response = await axios.get(`/member-manager/web/sv/customer-maintenance/commentsTab.sv?userId=20001290&commentTab=all&page=1&rp=10`);
  return parseItem(response, 200);
};
