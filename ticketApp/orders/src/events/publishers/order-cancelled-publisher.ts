import { Publisher, OrderCancelledEvent, Subjects } from 'microservices-common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
