import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent
} from 'microservices-common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
