import { Ticket } from '../ticket';

it('implements optimistic concurrency control', async (done) => {
  // Create an instance of a ticket
  const ticket = Ticket.build({
    title: 'concert',
    price: 5,
    userId: '123'
  });

  // Save the ticket to the database
  await ticket.save();

  // fetch the ticket twice
  const firstInstace = await Ticket.findById(ticket.id);
  const secondInstace = await Ticket.findById(ticket.id);

  // make two separate changes to the tickets we fetched
  firstInstace!.set({ price: 10 });
  secondInstace!.set({ price: 15 });

  // save the first fetched ticket
  await firstInstace!.save();

  // save the second fetched ticket and expect an error
  try {
    await secondInstace!.save();
  } catch (err) {
    return done();
  }

  throw new Error('Should not reach this point');
});

it('increments the version number on multiple saves', async () => {
  const ticket = Ticket.build({
    title: 'concert',
    price: 20,
    userId: '123'
  });

  await ticket.save();
  expect(ticket.version).toEqual(0);

  await ticket.save();
  expect(ticket.version).toEqual(1);

  await ticket.save();
  expect(ticket.version).toEqual(2);
});
