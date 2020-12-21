import { Publisher, Subjects, TicketUpdatedEvent } from 'microservices-common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
