import generalEnquiries from '../features/generalEnquiries';
import talentPool from '../features/talentPool';
import cancel from '../features/cancel';

export default {
  enquiries: reqMessage => generalEnquiries(reqMessage),
  talentPool: reqMessage => talentPool(reqMessage),
  cancel: (reqMessage, firstName) => cancel(reqMessage, firstName)
};
