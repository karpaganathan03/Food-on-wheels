// js/data.js

export const initialData = {
  trucks: [
    // Mexican
    {
      id: "t1",
      name: "Spicy Grill Cart",
      cuisine: "Mexican",
      rating: 4.8,
      reviews: 124,
      status: "Open Now",
      location: "Downtown Square",
      priceRange: "$200",
      image:
        "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "t2",
      name: "El Camino Tacos",
      cuisine: "Mexican",
      rating: 4.5,
      reviews: 95,
      status: "Moving Soon",
      location: "Arts District",
      priceRange: "$145",
      image: "assets/images/Tacos.jpg",
    },
    // Burgers
    {
      id: "t3",
      name: "Burger Bus",
      cuisine: "Burgers",
      rating: 4.6,
      reviews: 89,
      status: "Moving Soon",
      location: "Tech Park",
      priceRange: "$300",
      image: "assets/images/burger.jpg",
    },
    {
      id: "t4",
      name: "Smash Bros",
      cuisine: "Burgers",
      rating: 4.9,
      reviews: 312,
      status: "Open Now",
      location: "University Campus",
      priceRange: "$250",
      image: "assets/images/smash burger.jpg",
    },
    // Asian
    {
      id: "t5",
      name: "Wok This Way",
      cuisine: "Asian",
      rating: 4.9,
      reviews: 210,
      status: "Sold Out",
      location: "University Campus",
      priceRange: "$150",
      image: "assets/images/wok.jpg",
    },
    {
      id: "t6",
      name: "Tokyo Bite",
      cuisine: "Asian",
      rating: 4.7,
      reviews: 140,
      status: "Open Now",
      location: "Financial District",
      priceRange: "$200",
      image: "assets/images/tok.jpg",
    },
    // Pizza
    {
      id: "t7",
      name: "Pizza Pedaler",
      cuisine: "Pizza",
      rating: 4.5,
      reviews: 156,
      status: "Open Now",
      location: "Central Park",
      priceRange: "$400",
      image: "assets/images/pizza1.jpg",
    },
    {
      id: "t8",
      name: "Slice of Heaven",
      cuisine: "Pizza",
      rating: 4.8,
      reviews: 205,
      status: "Closed",
      location: "Riverfront",
      priceRange: "$450",
      image: "assets/images/pizza2.jpg",
    },
    // Desserts
    {
      id: "t9",
      name: "Sweet Treats",
      cuisine: "Desserts",
      rating: 4.7,
      reviews: 302,
      status: "Closed",
      location: "Riverfront",
      priceRange: "$100",
      image: "assets/images/donut.jpg ",
    },
    {
      id: "t10",
      name: "Churro Champ",
      cuisine: "Desserts",
      rating: 4.9,
      reviews: 410,
      status: "Open Now",
      location: "Festival Grounds",
      priceRange: "$120",
      image:"assets/images/chuuros.jpg",
    },
    // BBQ
    {
      id: "t11",
      name: "BBQ Brothers",
      cuisine: "BBQ",
      rating: 4.9,
      reviews: 412,
      status: "Open Now",
      location: "Festival Grounds",
      priceRange: "$500",
      image: "assets/images/bbq chk.jpg",
    },
    {
      id: "t12",
      name: "Smoke & Fire",
      cuisine: "BBQ",
      rating: 4.6,
      reviews: 180,
      status: "Moving Soon",
      location: "Southside Market",
      priceRange: "$550",
      image: "assets/images/cheesy bbq.jpg",
    },
  ],
  blogPosts: Array.from({ length: 9 }).map((_, i) => ({
    id: `b${i + 1}`,
    title: [
      "Top 10 Street Food Trends 2026",
      "How to Start a Food Truck",
      "Best Vegan Tacos in Town",
      "The Ultimate BBQ Guide",
      "Secret Menu Items",
      "Food Truck Festivals near you",
      "Interview with Burger Bus",
      "Desserts on the go",
      "Healthy Eats on the Street",
    ][i],
    category: [
      "Trends",
      "Business",
      "Recipes",
      "Guides",
      "Trends",
      "Events",
      "Interviews",
      "Recipes",
      "Guides",
    ][i],
    date: `Sep ${10 - i}, 2026`,
    author: [
      "Jane Doe",
      "John Smith",
      "Sarah Lee",
      "Mike BBQ",
      "Jane Doe",
      "Anna Event",
      "John Smith",
      "Sarah Lee",
      "Mike BBQ",
    ][i],
    readTime: `${Math.floor(Math.random() * 5) + 3} min`,
    image: [
      "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&w=600&q=80",
      "assets/images/Tacos.jpg",
      "assets/images/burger.jpg",
      "assets/images/smash burger.jpg",
      "assets/images/wok.jpg",
      "assets/images/tok.jpg",
      "assets/images/pizza1.jpg",
      "assets/images/pizza2.jpg",
      "assets/images/donut.jpg",
      "assets/images/chuuros.jpg",
      "assets/images/bbq chk.jpg",
      "assets/images/cheesy bbq.jpg",
    ][i],
  })),
};

export function initializeDatabase() {
  import("./storage.js").then(({ default: Storage }) => {
    // Force overwrite the trucks data to fix the old cached [object Object] bug
    Storage.setData("trucks", initialData.trucks);
    if (!Storage.getData("blogPosts"))
      Storage.setData("blogPosts", initialData.blogPosts);

    if (!Storage.getData("vendorMenu")) {
      Storage.setData("vendorMenu", [
        {
          id: "m1",
          name: "Spicy Beef Tacos",
          category: "Mains",
          price: 12.0,
          available: true,
          image:
            "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=200",
          desc: "Three authentic street tacos.",
        },
        {
          id: "m2",
          name: "Loaded Nachos",
          category: "Sides",
          price: 8.5,
          available: true,
          image:
            "https://images.unsplash.com/photo-1513442542250-854d436a73f2?w=200",
          desc: "Cheese, jalapeños, and guac.",
        },
      ]);
    }

    if (!Storage.getData("vendorBookings")) {
      Storage.setData("vendorBookings", [
        {
          id: "bk1",
          customer: "Alice Johnson",
          event: "Corporate Lunch",
          date: "2026-10-15",
          guests: 50,
          budget: "$750",
          status: "Pending",
        },
        {
          id: "bk2",
          customer: "Mark Smith",
          event: "Birthday Party",
          date: "2026-10-22",
          guests: 30,
          budget: "$400",
          status: "Accepted",
        },
      ]);
    }
  });
}
