import {
  MessengerModelForTextAndQuickReply, QuickReplyElement, PayloadElement,
  Payload, MessengerModelForAttachment, Buttons
} from '../modules/MessageModels';

const initialOptions = [
  new QuickReplyElement('Make an enquiry', 'enquiries'),
  new QuickReplyElement('Join VLA Talent Pool', 'talentPool'),
  new QuickReplyElement('Never mind', 'cancel')
];

class ComposeInteractiveMessages {
  static default(recipient) {
    const message = 'What would you like to do next?';
    const quickReplyButtons = initialOptions;

    return new MessengerModelForTextAndQuickReply(recipient, message, quickReplyButtons);
  }

  static cancel(recipient, firstName) {
    const message = `Okay.

It was nice chatting with you, ${firstName}.

I would always be here; when you need me, just say 'Hello'.`;

    return new MessengerModelForTextAndQuickReply(recipient, message);
  }

  static welcomeMessage(recipient, firstName) {
    const greeting = `Hi ${firstName}! I am Veebot, your buddy at VLA. What would you like to do?

Scroll the buttons below to your left to see more options.`;
    const quickReplyButtons = initialOptions;
    return new MessengerModelForTextAndQuickReply(recipient, greeting, quickReplyButtons);
  }

  static enquiryList(recipient) {
    const message = 'What enquiry would you like to make?';
    const quickReplyButtons = [
      new QuickReplyElement('Apptitude tests', 'enquiries apptitudeTests'),
      new QuickReplyElement('Office address', 'enquiries officeLocation'),
      new QuickReplyElement('Upcoming events', 'enquiries upcomingEvents'),
    ];

    return new MessengerModelForTextAndQuickReply(recipient, message, quickReplyButtons);
  }

  static apptitudeTests(recipient) {
    const message = `Our apptitude tests hold 8:00 AM on Wednesdays and Thursdays of every week. We would need you to come with your CV, a passport photograph, and a pen.

What would you like to do next?`;
    const quickReplyButtons = initialOptions;

    return new MessengerModelForTextAndQuickReply(recipient, message, quickReplyButtons);
  }

  static officeLocation(recipient) {
    const message = `Our Lagos office is at Plot 1690B, Buraimoh Kenku Street, Victoria Island, Lagos, Nigeria.

Direction
_________
Make your way to Eko Hotel Roundabout, walk into Sanusi Fafunwa Street. The first turn on your left is Buraimoh Kenku. It is opposite Murphis Plaza. Walk down the street, VLA is at 1690B.

For more information, visit our Contact Us page at https://www.viclawrence.com/contact

What would you like to do next?`;
    const quickReplyButtons = initialOptions;

    return new MessengerModelForTextAndQuickReply(recipient, message, quickReplyButtons);
  }

  static upcomingEvents(recipient) {
    const message = `We currently do not have any upcoming events.

What would you like to do next?`;
    const quickReplyButtons = initialOptions;

    return new MessengerModelForTextAndQuickReply(recipient, message, quickReplyButtons);
  }

  static talentPool(recipient) {
    const text = 'Please click the button below to fill the form';
    const payload = new Payload(text, [new Buttons('Join Talent Pool',
      'https://www.viclawrence.com/jobseeker-register')]);

    return new MessengerModelForAttachment(recipient, payload);
  }
}

export default ComposeInteractiveMessages;
