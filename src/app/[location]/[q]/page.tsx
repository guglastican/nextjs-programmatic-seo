import { Header } from "@/components/Header"; // Adjust import as needed
import { HotelItem } from "@/components/HotelItem"; // Adjust import as needed

async function getHotels(query: string, location: string) {
  // Your implementation here
  return []; // Replace with actual logic
}

export default async function Page({
  params,
}: {
  params: Promise<{ location: string; q: string }>;
}) {
  const { location, q } = await params; // Await the dynamic params
  const qDecoded = decodeURIComponent(q);
  const locationDecoded = decodeURIComponent(location);

  const results = await getHotels(qDecoded, locationDecoded);

  return (
    <div>
      <Header q={qDecoded} location={locationDecoded} />
      <main className="container mx-auto space-y-8 px-4 py-8">
        <h1 className="text-center text-3xl font-bold">
          Top {results.length} {qDecoded} near {locationDecoded}
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {results.map((hotel) => (
            <HotelItem key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </main>
    </div>
  );
}
