import { Publisher, OrderCreatedEvent, Subjects } from 'microservices-common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
