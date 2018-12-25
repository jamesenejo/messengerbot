import ComposeInteractiveMessages from '../../../helpers/ComposeInteractiveMessages';
import SendAPI from '../../../utils/SendAPI';

const sendAPI = new SendAPI();

export default async (reqMessage) => {
  const { message: { quick_reply: { payload } }, sender: { id } } = reqMessage;
  const enquirySubType = payload.split(' ')[1];

  if (!enquirySubType) {
    const message = ComposeInteractiveMessages.talentPool(id);
    const defaultMessage = ComposeInteractiveMessages.default(id);
    try {
      await sendAPI.send(message);
      setTimeout(async () => {
        await sendAPI.send(defaultMessage);
      }, 10000);
    } catch (e) {
      console.log(e.response.data);
    }
  }
};
