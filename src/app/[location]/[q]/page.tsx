// Adjust imports based on your actual file structure
import { Header } from "@/components/Header"; // Ensure this exists and exports Header
import { HotelItem } from "@/components/HotelItem"; // Ensure this exists and exports HotelItem

async function getHotels(query: string, location: string) {
  // Replace with your actual logic
  return [
    { id: "1", name: `${query} Hotel 1 in ${location}` },
    { id: "2", name: `${query} Hotel 2 in ${location}` },
  ];
}

export default async function Page({
  params,
}: {
  params: Promise<{ location: string; q: string }>;
}) {
  const { location, q } = await params;
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
