import ComposeInteractiveMessages from '../../../helpers/ComposeInteractiveMessages';

export default {
  apptitudeTests: id => ComposeInteractiveMessages.apptitudeTests(id),
  officeLocation: id => ComposeInteractiveMessages.officeLocation(id),
  upcomingEvents: id => ComposeInteractiveMessages.upcomingEvents(id)
};
