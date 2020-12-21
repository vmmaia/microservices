import { Publisher, Subjects, TicketCreatedEvent } from 'microservices-common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
