
export interface Hotel {
  id: number;
  name: string;
  image: string;
  rating: number;
  price: string;
  description: string;
  address: string;
  phone: string;
  hours: string;
  reviews: number;
  tags: string[];
  amenities: string[];
  link: string;
}

const hotels: Hotel[] = [
{
    id: 1,
    name: "Splash Paradise",
    image: "https://images.trvl-media.com/lodging/107000000/106250000/106242900/106242852/634da6e2.jpg",
    image: "https://images.trvl-media.com/lodging/107000000/106250000/106242900/106242852/w1080h718x0y0-15862de8.jpg",
    rating: 4.7,
    price: "500$",
    address: "768 Splash Ave, San Francisco, CA",
    description: " Discover the beauty of Dallas from this 2-bedroom apartment. Step into this awesome property and feel right at home. With its nice and welcoming ambiance, guests will instantly feel relaxed and comfortable.",
    amenities: ["Pool", "Hot tub"],
    reviews: 321,
    tags: ["Pool", "Hot Tub"],
    link: "https://images.trvl-media.com/lodging/107000000/106250000/106242900/106242852/634da6e2.jpg"
  },
  {
    id: 2,
    name: "Aqua Adventures",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&auto=format&fit=crop&q=60",
    rating: 4.8,
    price: "$$$",
    address: "123 Water Way, Chicago, IL",
    phone: "(312) 555-1234",
    hours: "9:00 AM - 7:00 PM",
    amenities: ["Kids Zone", "Thrill Slides", "Pool"],
    reviews: 445,
    tags: ["Thrill Rides", "Kids Area", "Food Court"],
    link: "/waterpark/2/rooms"
  },
  {
    id: 3,
    name: "Tropical Tides",
    image: "https://images.unsplash.com/photo-1533760881669-80db4d7b2c54?w=800&auto=format&fit=crop&q=60",
    rating: 4.6,
    price: "$$",
    address: "456 Beach Blvd, Miami, FL",
    phone: "(305) 777-8888",
    hours: "9:00 AM - 9:00 PM",
    reviews: 567,
    tags: ["Surf Pool", "Beach Entry", "Cabanas"],
    amenities: ["Surf Pool", "Private Cabanas", "Restaurant"],
    link: "/waterpark/3/rooms"
  }
];

export async function searchHotels(q: string, location: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const searchWords = q?.split(" ").filter(Boolean) || [];

  return hotels
    .filter((hotel) =>
      searchWords.every(
        (word) =>
          hotel.name.toLowerCase().includes(word.toLowerCase()) ||
          hotel.description.toLowerCase().includes(word.toLowerCase()) ||
          hotel.tags.some((tag) =>
            tag.toLowerCase().includes(word.toLowerCase())
          )
      )
    )
    .filter((hotel) =>
      hotel.address.toLowerCase().includes(location.toLowerCase())
    )
    .sort((a, b) => b.rating - a.rating);
}

export const locations = ["San Francisco, CA", "Chicago, IL", "Miami, FL"];

export async function getAllTags({ limit }: { limit?: number } = {}) {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return hotels
    .slice(0, limit)
    .reduce<string[]>(function (acc, hotel) {
      return acc.concat(hotel.tags);
    }, []);
}
