
export interface Hotel {
  id: number;
  name: string;
  image: string;
  rating: number;
  price: string;
  description: string;
  address: string;
  hours: string;
  reviews: number;
  tags: string[];
  amenities: string[];
  link: string;
}

const hotels: Hotel[] = [
  {
    id: 1,
    name: "1 Hotel San Francisco",
    image: "https://images.trvl-media.com/lodging/2000000/1140000/1138300/1138217/e156f5e7.jpg",
    rating: 4.2,
    price: "$931",
    address: "8 Mission St, San Francisco, CA 94105",
    description: "Luxury San Francisco hotel in Downtown San Francisco with a full-service spa. Enjoy modern amenities, eco-friendly design, and stunning waterfront views. Offers couples treatment rooms, hydrotherapy, and premium bedding in sophisticated suites.",
    hours: "24/7",
    reviews: 367,
    tags: ["Luxury", "Spa", "Eco-Friendly", "Waterfront"],
    amenities: ["Full-service Spa", "Bar", "Free WiFi", "Room Service", "Air Conditioning", "Terrace/Patio"],
    link: "https://expedia.com/affiliates/san-francisco-hotels-1-hotel-san-francisco.nmthOWh"
  },
  {
    id: 2,
  name: "InterContinental by IHG",
  image: "https://images.trvl-media.com/lodging/2000000/1770000/1766700/1766605/ed96eb5c.jpg",
  rating: 4.0,
  price: "$450",
  address: "888 Howard Street, San Francisco, CA 94103",
  description: "4-star hotel in Downtown San Francisco featuring 2 restaurants and walking distance to Moscone Convention Center. Offers modern rooms with premium bedding, city views, and convenient access to cultural attractions.",
  hours: "24/7",
  reviews: 1006,
  tags: ["Business Travel", "City Views", "Convention Center", "Fine Dining"],
  amenities: ["2 Restaurants", "Indoor Pool", "24-Hour Gym", "Hot Tub", "Room Service", "Breakfast Available"],
  link: "https://expedia.com/affiliates/san-francisco-hotels-intercontinental-san-francisco.XFQqP4Y"
  },
  {
    id: 3,
      name: "Inn San Francisco",
      image: "https://images.trvl-media.com/lodging/2000000/1150000/1145300/1145267/3ae7ddd9.jpg",
      rating: 2.5,
      price: "$200",
      address: "943 South Van Ness Avenue, San Francisco, CA 94110",
      description: "Charming Mission District bed & breakfast featuring a rooftop terrace and Victorian-era charm. Offers individually decorated rooms with historic character, free breakfast, and easy access to Castro Street attractions.",
      hours: "24/7",
      reviews: 514,
      tags: ["Boutique", "Historic", "Pet-Friendly", "Free Breakfast"],
      amenities: [
        "Daily Breakfast",
        "Outdoor Spa Tub",
        "Rooftop Terrace",
        "Free WiFi",
        "Parking Available",
        "Laundry Facilities",
        "Pet-Friendly Rooms",
        "Individually Decorated Rooms"
      ],
      link: "https://expedia.com/affiliates/san-francisco-hotels-inn-san-francisco.DCgJfcE"
  },
  {
  id: 4,
  name: "Holiday Inn Express by IHG",
  image: "https://images.trvl-media.com/lodging/1000000/860000/856900/856888/4142bdb2.jpg",
  rating: 3.8,
  price: "$217",
  address: "373 S Airport Blvd, South San Francisco, CA, 94080",
  description: "Hotel in South San Francisco with free breakfast and airport shuttle service.",
  hours: "24/7",  // Added the 'hours' property
  amenities: ["Breakfast included", "Free airport shuttle", "Hot Tub", "Gym", "Parking available", "Housekeeping"],
  reviews: 1005,
  tags: ["Breakfast included", "Free airport shuttle", "Hot Tub"],
  link: "https://expedia.com/affiliates/san-francisco-hotels-holiday-inn-express-san-francisco-airport-north.AhfYCnR"
},
  {
    id: 5,
    name: "Fairmont Sonoma Mission Inn & Spa",
    image: "https://images.trvl-media.com/lodging/1000000/10000/500/465/07b98e73.jpg",
    rating: 4.6,
    price: "$550",
    address: "100 Boyes Boulevard, North San Francisco, CA, 95416",
    description: "Discover the finest of California Wine Country at Fairmont Sonoma Mission Inn & Spa, a top luxury resort in Sonoma. Just an hour north of San Francisco, it offers an unforgettable experience.",
    hours: "24/7",  // Added the 'hours' property
    amenities: ["Spa", "Pool", "Hot Tub", "Restaurant", "Breakfast available", "Bar"],
    reviews: 1000,
    tags: ["Spa", "Pool", "Hot Tub"],
    link: "https://expedia.com/affiliates/sonoma-hotels-fairmont-sonoma-mission-inn-spa.on9UmAB"
  },
  {
    id: 6,
        name: "Farmhouse Inn",
        image: "https://images.trvl-media.com/lodging/4000000/3290000/3281000/3280948/54fa9f25.jpg",
        rating: 4.9,
        price: "$1000",
        address: "7871 River Road, San Francisco, CA, 95436",
        description: "The Farmhouse in San Francisco Sonoma County's Russian River Valley offers a luxurious, intimate wine country retreat with 25 rooms, a Michelin-starred restaurant, and a Farm-to-Table Spa, surrounded by vineyards, redwood forests, and the stunning Sonoma Coast.",
        hours: "24/7",
        amenities: ["Breakfast available", "Pool", "Room service", "Spa", "24/7 front desk", "Housekeeping"],
        reviews: 60,
        tags: ["Luxury", "Spa", "Pool"],
        link: "https://expedia.com/affiliates/forestville-hotels-farmhouse-inn.gQ3yQdB"
      },
  // Chicago
  {
    id: 7,
    name: "Renaissance Schaumburg Convention Center Hotel",
    image: "https://images.trvl-media.com/lodging/2000000/1490000/1485600/1485559/8a986951.jpg",
    rating: 4.0,
    price: "$239",
    address: "1551 Thoreau Dr N, Schaumburg Chicago, IL, 60173",
    description: "Hotel connected to the convention center in Chicago Schaumburg with 2 restaurants, pool, hot tub, and parking included.",
    hours: "24/7",
    amenities: ["Pool", "Hot Tub", "Restaurant", "Parking available", "Bar"],
    reviews: 1002,
    tags: ["Convention Center", "Pool", "Hot Tub"],
    link: "https://expedia.com/affiliates/chicago-hotels-renaissance-schaumburg-convention-center-hotel.Q08el92"
  },
  {
      id: 8,
      name: "The Langham, Chicago",
      image: "https://images.trvl-media.com/lodging/7000000/6310000/6309400/6309326/d780b32f.jpg",
      rating: 4.8,
      price: "$1100",
      address: "330 North Wabash Avenue, Chicago, IL, 60611",
      description: "Luxury hotel in Downtown Chicago with a full-service spa, indoor pool, restaurant, and gym. The on-site spa has 7 treatment rooms including couples treatment rooms. The hotel's spa offers deep-tissue massages, hot stone massages, prenatal massages, and sports massages.",
      hours: "24/7",
      amenities: ["Spa", "Pool", "Restaurant", "Gym", "Hot Tub", "Free Wi-Fi"],
      reviews: 998,
      tags: ["Luxury", "Spa", "Downtown Chicago"],
      link: "https://expedia.com/affiliates/chicago-hotels-the-langham.TLKl1W3"
  },
  {
      id: 9,
      name: "JW Marriott Chicago",
      image: "https://images.trvl-media.com/lodging/4000000/3540000/3538400/3538327/4a42f611.jpg",
      rating: 4.2,
      price: "$380",
      address: "151 West Adams Street, Chicago, IL, 60603",
      description: "Luxury hotel in Downtown Chicago with a full-service spa, indoor pool, restaurant, and fitness center. SPA AT JW CHICAGO has 14 treatment rooms including couples treatment rooms.",
      hours: "24/7",
      amenities: ["Spa", "Pool", "Restaurant", "Gym", "Hot Tub", "Housekeeping", "Free Wi-Fi"],
      reviews: 1001,
      tags: ["Luxury", "Downtown Chicago", "Spa", "Indoor Pool"],
      link: "https://expedia.com/affiliates/chicago-hotels-jw-marriott-chicago.ctu0tPJ"
  },
  {
      id: 10,
      name: "Park Hyatt Chicago",
      image: "https://images.trvl-media.com/lodging/1000000/30000/20700/20695/e0b506df.jpg?impolicy=resizecrop&rw=1200&ra=fit",
      rating: 4.6,
      price: "$428",
      address: "800 N Michigan Ave, Chicago, IL, 60611",
      description: "Luxury Chicago hotel connected to a shopping center, steps from Chicago Water Tower, with a full-service spa, pool, and pet-friendly options.",
      hours: "24/7",
      amenities: ["Pool", "Hot Tub", "Bar", "Spa", "Breakfast Available", "Pet Friendly"],
      reviews: 1000,
      tags: ["Luxury", "Downtown Chicago", "Spa", "Pet Friendly"],
      link: "https://expedia.com/affiliates/chicago-hotels-park-hyatt-chicago.fLsb72J"
  },
  {
      id: 11,
      name: "Waldorf Astoria Chicago",
      image: "https://images.trvl-media.com/lodging/3000000/2720000/2717600/2717582/e3e2799f.jpg",
      rating: 4.2,
      price: "$475",
      address: "11 E. Walton Street, Chicago, IL, 60611",
      description: "Luxury Chicago hotel, steps from Oak Street and Michigan Avenue, offering a range of luxurious amenities including a full-service spa, indoor pool, and fine dining.",
      hours: "24/7",
      amenities: ["Pool", "Parking Available", "Room Service", "Bar", "Housekeeping", "Laundry"],
      reviews: 1000,
      tags: ["Luxury", "Spa", "Downtown Chicago", "Pet Friendly"],
      link: "https://expedia.com/affiliates/chicago-hotels-waldorf-astoria-chicago.5y1tbwo"
  },
  {
      id: 12,
      name: "Viceroy Chicago",
      image: "https://images.trvl-media.com/lodging/19000000/18620000/18614200/18614145/w5117h2880x0y0-157a40d3.jpg",
      rating: 4.4,
      price: "$455",
      address: "1118 North State Street, Chicago, IL, 60610",
      description: "Luxury Chicago hotel in Downtown Chicago offering 2 restaurants, a seasonal outdoor pool, a fitness center, and chic accommodations near Michigan Avenue and Lake Michigan.",
      hours: "24/7",
      amenities: ["Pool", "Restaurant", "Gym", "Room Service", "Housekeeping", "Breakfast Available"],
      reviews: 1011,
      tags: ["Luxury", "Downtown Chicago", "Pet Friendly", "Restaurants", "Seasonal Pool"],
      link: "https://expedia.com/affiliates/chicago-hotels-viceroy-chicago.j3TIKar"
  },
  {
      id: 13,
      name: "The Grayson Miami Downtown",
      image: "https://images.trvl-media.com/lodging/1000000/10000/6600/6535/63418b0f.jpg",
      rating: 3.4,
      price: "$314",
      address: "1100 Biscayne Blvd, Miami, FL, 33132",
      description: "A luxury hotel in Downtown Miami offering two outdoor swimming pools, a hot tub, a gym, a restaurant, and pet-friendly accommodations near popular attractions like the Phillip and Patricia Frost Museum of Science.",
      hours: "24/7",
      amenities: ["2 Outdoor Swimming Pools", "Restaurant", "Gym", "Hot Tub", "Breakfast Available", "Pet Friendly"],
      reviews: 1000,
      tags: ["Luxury", "Downtown Miami", "Pet Friendly", "Swimming Pools", "Restaurant", "Hot Tub"],
      link: "https://expedia.com/affiliates/miami-hotels-the-gabriel-miami.bcBMhFf"
  },
  {
      id: 14,
      name: "Acqualina Resort & Residences On The Miami Beach",
      image: "https://images.trvl-media.com/lodging/2000000/1120000/1113200/1113163/c2040b63.jpg",
      rating: 4.6,
      price: "$2125",
      address: "17875 Collins Ave, Miami Sunny Isles Beach Miami, FL, 33160",
      description: "A luxurious beachfront resort offering 3 outdoor pools, a spa, multiple dining options, and stunning ocean views, located in Sunny Isles Beach near various local attractions.",
      hours: "24/7",
      amenities: ["3 Outdoor Pools", "Spa", "Restaurant", "Bar", "Hot Tub", "Parking Available", "Housekeeping"],
      reviews: 531,
      tags: ["Luxury", "Beachfront", "Pools", "Spa", "Family Friendly", "Restaurant", "Bar"],
      link: "https://expedia.com/affiliates/miami-hotels-acqualina-resort-residences-on-the-beach.4dr761K"
  },
  {
      id: 15,
      name: "EAST Miami",
      image: "https://images.trvl-media.com/lodging/13000000/12080000/12079000/12078999/24a0e0a8.jpg",
      rating: 4.0,
      price: "$1719",
      address: "788 Brickell Plaza, Miami, FL, 33131",
      description: "A luxurious hotel in the heart of Miami's Brickell neighborhood, connected to a shopping center and offering an exceptional rooftop terrace, pool, gym, restaurant, and more.",
      hours: "24/7",
      amenities: ["Restaurant", "Pool", "Gym", "Hot Tub", "Bar", "Pet Friendly"],
      reviews: 2962,
      tags: ["Luxury", "Shopping", "City Center", "Rooftop", "Pet Friendly", "Bar", "Restaurant"],
      link: "https://expedia.com/affiliates/miami-hotels-east-miami.oKqd8tm"
  },
  {
      id: 16,
      name: "Hampton Inn & Suites Miami/Brickell-Downtown",
      image: "https://images.trvl-media.com/lodging/5000000/4510000/4500600/4500520/2927a162.jpg",
      rating: 4.4,
      price: "$568",
      address: "50 Sw 12th Street, Miami, FL, 33130",
      description: "A convenient hotel located a short walk from Brickell City Centre, offering a range of amenities including 3 restaurants, breakfast, hot tub, gym, and a bar.",
      hours: "24/7",
      amenities: ["Breakfast Included", "Restaurant", "Hot Tub", "Gym", "Bar", "Housekeeping"],
      reviews: 4231,
      tags: ["Convenient", "City Center", "Restaurants", "Breakfast Included", "Gym", "Hot Tub", "Bar"],
      link: "https://expedia.com/affiliates/miami-hotels-hampton-inn-suites-miamibrickell-downtown.THG9rMr"
  },
  {
      id: 17,
      name: "Kimpton EPIC Hotel by IHG",
      image: "https://images.trvl-media.com/lodging/3000000/2240000/2237200/2237168/a946703d.jpg",
      rating: 4.8,
      price: "$450",
      address: "270 Biscayne Blvd Way, Miami, FL, 33131",
      description: "Luxury hotel in Downtown Miami with 2 restaurants, offering an outdoor pool, spa, and pet-friendly accommodations. Ideal for relaxation and enjoyment.",
      hours: "24/7",
      amenities: ["Pool", "Restaurant", "Pet Friendly", "Spa", "Bar", "Breakfast Available"],
      reviews: 1709,
      tags: ["Luxury", "Downtown Miami", "Restaurants", "Spa", "Outdoor Pool", "Pet Friendly"],
      link: "https://expedia.com/affiliates/miami-hotels-kimpton-epic-hotel.ZNrsbxq",
  },
  {
      id: 18,
      name: "Hotel Beaux Arts, Autograph Collection",
      image: "https://images.trvl-media.com/lodging/4000000/3780000/3779000/3778960/b467decb.jpg",
      rating: 4.0,
      price: "$560",
      address: "255 Biscayne Boulevard Way, Miami, FL, 33131",
      description: "Luxury hotel in Downtown Miami with 3 restaurants, a spa, and a rooftop pool, offering premium rooms and exceptional service.",
      hours: "24/7",
      amenities: ["Pool", "Restaurant", "Bar", "Spa", "Room Service", "Breakfast Available", "Hot Tub"],
      reviews: 282,
      tags: ["Luxury", "Downtown Miami", "Restaurant", "Spa", "Pool", "Bar"],
      link: "https://expedia.com/affiliates/miami-hotels-hotel-beaux-arts.s9Nwwe8"
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
