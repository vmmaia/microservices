import { Subjects, Publisher, PaymentCreatedEvent } from 'microservices-common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
