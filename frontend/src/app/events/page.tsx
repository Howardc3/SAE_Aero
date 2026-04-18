export default function EventsPage() {
  return (
    <main className="flex flex-1 flex-col items-center bg-zinc-50 px-6 py-12 text-center">
      <h1 className="text-4xl font-bold text-prussian-blue">Events</h1>
      <p className="mt-4 max-w-2xl text-lg text-deep-navy">
        Upcoming meetings, work sessions and club events.
        <br/ >
        Pull up!
      </p>
      <div className="mt-10 w-full max-w-4xl">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=isaeaero%40gmail.com&ctz=America%2FChicago"
          style={{ border: 0 }}
          width="800"
          height="600"
          className="w-full rounded-lg shadow-md"
        />
      </div>
    </main>
  );
}
