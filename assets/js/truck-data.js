/**
 * StreetFeast — Food Truck Profiles & Dynamic Detail Handler
 * Powers authentic multi-vendor profiles across food-truck-details.html
 */

const FOOD_TRUCKS_DATABASE = {
  'taco-wagon': {
    id: 'taco-wagon',
    name: 'The Taco Wagon',
    cuisine: 'Authentic Birria & Mexican Street Food',
    tagline: 'Slow-Braised Jalisco Beef Birria, Hand-Pressed Heirloom Corn Tortillas & Fire-Roasted Salsas.',
    status: 'Open Now until 9:00 PM',
    location: 'Riverside Park East Pier, Austin, TX',
    rating: '4.9 (328 Reviews)',
    heroImg: 'https://images.unsplash.com/photo-1567129937968-cdad8f07e2f8?q=80&w=1400&auto=format&fit=crop',
    aboutHeading: '7 Years of Searing, Braising & Community Joy',
    aboutText: "Founded in 2019 by Chef Marco Ruiz, The Taco Wagon began with an antique 1974 trailer and a recipe inherited from Marco's abuela in Guadalajara. Every morning at 4:30 AM, marrow bones, guajillo peppers, cinnamon, and chuck roast simmer slowly for 12 hours into rich, golden-red consomé.",
    highlight1Title: '100% Gluten-Free',
    highlight1Desc: 'All corn tortillas pressed fresh from heirloom masa',
    highlight2Title: 'Local Sourcing',
    highlight2Desc: 'Grass-fed local Texas beef & organic produce',
    chef: {
      name: 'Chef Marco Ruiz',
      role: 'Owner, Pitmaster & Founder',
      photo: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=600&auto=format&fit=crop',
      quote: '"We cook with fire, bone broth, and heart. When you take that first bite of a quesabirria dipped in hot consomé on a brisk evening, that is pure street magic."',
      instagram: '@TheTacoWagonATX',
      facebook: 'TacoWagonAustin'
    },
    menu: [
      {
        name: 'Crispy Quesabirria Trio',
        price: '₹320',
        desc: 'Three crisp corn tortillas filled with melted Oaxaca cheese, slow-braised beef, onions, and cilantro with 6oz bone marrow consomé.',
        badge: 'Bestseller',
        badgeClass: 'bg-danger text-white',
        badge2: 'GF',
        badge2Class: 'bg-warning text-dark',
        img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=300&auto=format&fit=crop'
      },
      {
        name: 'Tacos Al Pastor (3 pcs)',
        price: '₹260',
        desc: 'Marinated pork spit-roasted with achiote, fresh grilled pineapple, salsa verde, and diced white onion.',
        badge: 'Chef Special',
        badgeClass: 'bg-secondary-light text-dark',
        img: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=300&auto=format&fit=crop'
      },
      {
        name: 'Mexican Street Corn Esquites',
        price: '₹160',
        desc: 'Charred sweet corn off the cob, smoked chipotle crema, cotija cheese, cilantro, and Tajin chili lime.',
        badge: 'Vegetarian',
        badgeClass: 'bg-success-light text-success',
        img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=300&auto=format&fit=crop'
      },
      {
        name: 'Fresh Churros with Spiced Cajeta',
        price: '₹180',
        desc: 'Fried to golden perfection, rolled in Ceylon cinnamon and raw sugar, served with goat\'s milk caramel.',
        badge: 'Dessert',
        badgeClass: 'bg-warning-light text-dark',
        img: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=300&auto=format&fit=crop'
      }
    ],
    schedule: [
      { day: 'Today (Tue)', spot: 'Riverside Park Boardwalk #4', hours: '11:00 AM – 9:00 PM', status: 'Serving Now', isCurrent: true },
      { day: 'Wed', spot: 'Domain Tech Center Gate 3', hours: '11:30 AM – 2:30 PM', status: 'Scheduled', isCurrent: false },
      { day: 'Thu', spot: 'East Austin Night Market Lot 7', hours: '5:00 PM – 11:00 PM', status: 'Scheduled', isCurrent: false },
      { day: 'Fri', spot: 'Barton Springs Food Oasis #2', hours: '12:00 PM – 10:00 PM', status: 'Peak Hours', isCurrent: false },
      { day: 'Sat', spot: 'Zilker Park Great Lawn Pavilion', hours: '10:00 AM – 8:00 PM', status: 'Festival Lineup', isCurrent: false }
    ]
  },

  'burger-bus': {
    id: 'burger-bus',
    name: 'Burger Bus Co.',
    cuisine: 'Artisan Smash Burgers & Hand-Cut Fries',
    tagline: 'Grass-Fed Double Smash Patties, Caramelized Onions, House Truffle Aioli & Toasted Brioche.',
    status: 'Open Now until 10:30 PM',
    location: 'Downtown 6th St Tech Plaza, Austin, TX',
    rating: '4.8 (192 Reviews)',
    heroImg: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1400&auto=format&fit=crop',
    aboutHeading: '4 Years of Engineered Smash Perfection & Mobile Grills',
    aboutText: 'Founded by Derrick Vance, a former automotive fleet mechanical engineer who converted a retired 1988 yellow school bus into a state-of-the-art mobile smash burger kitchen. Derrick calibrated dual 36-inch chrome flat tops to sear 600-degree crispy lace crusts with unmatched juiciness.',
    highlight1Title: '100% Angus Beef',
    highlight1Desc: 'Fresh ground daily chuck & brisket blend',
    highlight2Title: 'High-Speed Output',
    highlight2Desc: '250+ hot burgers served per hour at rallies',
    chef: {
      name: 'Derrick Vance',
      role: 'Operations & Fleet Lead • Burger Artisan',
      photo: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=600&auto=format&fit=crop',
      quote: '"We took mechanical engineering discipline and applied it to heat transfer and smash crust science. One bite tells you everything you need to know about precision."',
      instagram: '@BurgerBusATX',
      facebook: 'BurgerBusCompany'
    },
    menu: [
      {
        name: 'The Signature Double Truffle Smash',
        price: '₹340',
        desc: 'Two crispy-edge smashed Angus patties, aged white cheddar, caramelized shallots, black truffle aioli on toasted brioche.',
        badge: 'Bestseller',
        badgeClass: 'bg-danger text-white',
        badge2: 'Chef Pick',
        badge2Class: 'bg-warning text-dark',
        img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=300&auto=format&fit=crop'
      },
      {
        name: 'Smoky Bacon Bourbon Cheeseburger',
        price: '₹360',
        desc: 'Double beef patties, thick-cut maple bacon, house bourbon BBQ glaze, smoked Gouda, pickled jalapeños.',
        badge: 'Fan Favorite',
        badgeClass: 'bg-secondary-light text-dark',
        img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=300&auto=format&fit=crop'
      },
      {
        name: 'Crispy Rosemary Garlic Duck-Fat Fries',
        price: '₹170',
        desc: 'Hand-cut Idaho potatoes fried double-crisp in duck fat, roasted garlic sea salt, fresh rosemary sprigs, parmesan dip.',
        badge: 'Crispy Side',
        badgeClass: 'bg-success-light text-success',
        img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=300&auto=format&fit=crop'
      },
      {
        name: 'Salted Caramel Malted Milkshake',
        price: '₹190',
        desc: 'Hand-spun vanilla bean custard, artisanal sea salt caramel swirl, malt crumble, topped with fresh whipped cream.',
        badge: 'Dessert',
        badgeClass: 'bg-warning-light text-dark',
        img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=300&auto=format&fit=crop'
      }
    ],
    schedule: [
      { day: 'Today (Tue)', spot: 'Downtown 6th St Tech Plaza', hours: '11:00 AM – 10:30 PM', status: 'Serving Now', isCurrent: true },
      { day: 'Wed', spot: 'University Commons Courtyard', hours: '11:00 AM – 3:00 PM', status: 'Scheduled', isCurrent: false },
      { day: 'Thu', spot: 'Barton Creek Square Food Circle', hours: '4:00 PM – 10:00 PM', status: 'Scheduled', isCurrent: false },
      { day: 'Fri', spot: 'Mueller Lake Park Sunset Lot', hours: '12:00 PM – 11:00 PM', status: 'Peak Hours', isCurrent: false },
      { day: 'Sat', spot: 'Austin Craft Beer Festival', hours: '11:00 AM – 10:00 PM', status: 'Festival Lineup', isCurrent: false }
    ]
  },

  'pizza-bella': {
    id: 'pizza-bella',
    name: 'Pizza Bella Mobile',
    cuisine: 'Oak Wood-Fired Neapolitan Pizza',
    tagline: '900° Oak-Fired Neapolitan Crusts, San Marzano D.O.P. Tomatoes & Fresh Fior di Latte.',
    status: 'Open Now until 10:00 PM',
    location: 'South Congress Artisan Yard, Austin, TX',
    rating: '4.7 (164 Reviews)',
    heroImg: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1400&auto=format&fit=crop',
    aboutHeading: '5 Years of Hand-Stretched Heritage & Wood-Fired Passion',
    aboutText: 'Certified master pizzaiola Sofia Rossi brought authentic Napoli wood-fired pizza to the streets of Austin with a custom dual-axle trailer housing a genuine 2-ton Italian volcanic stone oven. Operating at 900°F, every pizza blisters to leopard-spotted perfection in exactly 90 seconds.',
    highlight1Title: 'Caputo \'00\' Flour',
    highlight1Desc: '48-hour slow cold fermentation for airy crust',
    highlight2Title: '900° Oak Oven',
    highlight2Desc: 'Blistered leopard crust baked in 90 seconds',
    chef: {
      name: 'Sofia Rossi',
      role: 'Wood-Fire Specialist • Master Pizzaiola',
      photo: 'assets/images/chef-sofia-rossi.jpg',
      quote: '"Good dough has a soul. When Caputo flour, live oak flames, and San Marzano tomatoes come together, you don\'t just eat pizza — you taste centuries of Napoli passion."',
      instagram: '@PizzaBellaMobile',
      facebook: 'PizzaBellaAustin'
    },
    menu: [
      {
        name: 'Margherita Verace D.O.P.',
        price: '₹380',
        desc: 'San Marzano tomatoes, fresh buffalo mozzarella, fragrant Genovese basil, organic extra virgin olive oil.',
        badge: 'Classic D.O.P.',
        badgeClass: 'bg-success text-white',
        badge2: 'Vegetarian',
        badge2Class: 'bg-success-light text-success',
        img: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?q=80&w=300&auto=format&fit=crop'
      },
      {
        name: 'Hot Honey & Spianata Diavola',
        price: '₹420',
        desc: 'Spicy Calabrian salumi, fresh fior di latte, hot chili infused wildflower honey, fresh oregano.',
        badge: 'Bestseller',
        badgeClass: 'bg-danger text-white',
        img: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=300&auto=format&fit=crop'
      },
      {
        name: 'Wild Truffle & Roasted Mushroom',
        price: '₹440',
        desc: 'Cremini & portobello mushrooms, garlic confit base, taleggio cheese, white truffle emulsion, fresh thyme.',
        badge: 'Chef Special',
        badgeClass: 'bg-warning-light text-dark',
        img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=300&auto=format&fit=crop'
      },
      {
        name: 'Crisp Sicilian Cannoli (2 pcs)',
        price: '₹190',
        desc: 'Hand-rolled crispy pastry shells piped with sweet sheep ricotta, dark chocolate nibs, crushed pistachios.',
        badge: 'Dessert',
        badgeClass: 'bg-secondary-light text-dark',
        img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=300&auto=format&fit=crop'
      }
    ],
    schedule: [
      { day: 'Today (Tue)', spot: 'South Congress Artisan Yard', hours: '12:00 PM – 10:00 PM', status: 'Serving Now', isCurrent: true },
      { day: 'Wed', spot: 'Bouldin Creek Community Lot', hours: '4:00 PM – 9:30 PM', status: 'Scheduled', isCurrent: false },
      { day: 'Thu', spot: 'Rainey Street Evening Hub', hours: '5:00 PM – 11:00 PM', status: 'Scheduled', isCurrent: false },
      { day: 'Fri', spot: 'East Austin Brewery Yard', hours: '1:00 PM – 11:00 PM', status: 'Peak Hours', isCurrent: false },
      { day: 'Sat', spot: 'Zilker Park Food Truck Circle', hours: '11:00 AM – 9:00 PM', status: 'Festival Lineup', isCurrent: false }
    ]
  },

  'seoul-bao': {
    id: 'seoul-bao',
    name: 'Seoul Street K-Bao',
    cuisine: 'Korean Street Food & Steamed Cloud Baos',
    tagline: 'Fluffy Lotus Leaf Steamed Cloud Baos, 24-Hr Crispy Pork Belly & Sweet Gochujang Glazes.',
    status: 'Open Now until 11:00 PM',
    location: 'Rainey Street Food Lot, Austin, TX',
    rating: '4.9 (218 Reviews)',
    heroImg: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1400&auto=format&fit=crop',
    aboutHeading: '3 Years of Night-Market Flavor Collisions & Cloud Baos',
    aboutText: 'Created by culinary innovator Maya Chen, Seoul Street K-Bao combines traditional Taiwanese lotus leaf steaming techniques with hyper-bold Seoul night market barbecue. From 24-hour braised pork belly to spicy Korean fried chicken, every bao is folded fresh on-site inside our neon-lit trailer.',
    highlight1Title: 'Daily Hand-Folded',
    highlight1Desc: 'Steamed cloud buns made fresh every morning',
    highlight2Title: 'House Fermented',
    highlight2Desc: 'Artisanal kimchi aged 30 days in traditional onggi',
    chef: {
      name: 'Maya Chen',
      role: 'Concept Innovation Lead • Bao Curator',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop',
      quote: '"Street food is the ultimate equalizer of world cultures. Steaming pillowy cloud baos packed with crispy, smoky, fermented ingredients connects people instantly across flavors."',
      instagram: '@SeoulKBaoATX',
      facebook: 'SeoulStreetKBao'
    },
    menu: [
      {
        name: 'Crispy Pork Belly Cloud Bao (2 pcs)',
        price: '₹310',
        desc: '24-hour braised pork belly seared crispy, pickled cucumber ribbons, hoisin glaze, crushed roasted peanuts.',
        badge: 'Bestseller',
        badgeClass: 'bg-danger text-white',
        badge2: 'Signature',
        badge2Class: 'bg-warning text-dark',
        img: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?q=80&w=300&auto=format&fit=crop'
      },
      {
        name: 'Korean Hot Honey Fried Chicken Bao (2 pcs)',
        price: '₹290',
        desc: 'Double-fried crunchy chicken thigh, sweet gochujang chili glaze, sesame slaw, scallions on fluffy steam buns.',
        badge: 'Spicy Favorite',
        badgeClass: 'bg-secondary-light text-dark',
        img: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?q=80&w=300&auto=format&fit=crop'
      },
      {
        name: 'Kimchi Bulgogi Loaded Fries',
        price: '₹220',
        desc: 'Golden shoestring fries smothered in marinated ribeye bulgogi, aged house kimchi, sriracha mayo, toasted nori.',
        badge: 'Loaded Side',
        badgeClass: 'bg-success-light text-success',
        img: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=300&auto=format&fit=crop'
      },
      {
        name: 'Mango Coconut Boba Slush',
        price: '₹180',
        desc: 'Fresh Alfonso mango puree, organic coconut milk slush, slow-cooked brown sugar boba pearls, fresh mint.',
        badge: 'Beverage',
        badgeClass: 'bg-warning-light text-dark',
        img: 'https://images.unsplash.com/photo-1558857563-b371033873b8?q=80&w=300&auto=format&fit=crop'
      }
    ],
    schedule: [
      { day: 'Today (Tue)', spot: 'Rainey Street Food Lot', hours: '12:00 PM – 11:00 PM', status: 'Serving Now', isCurrent: true },
      { day: 'Wed', spot: 'Warehouse District Patio', hours: '4:00 PM – 11:00 PM', status: 'Scheduled', isCurrent: false },
      { day: 'Thu', spot: 'East 11th Street Food Oasis', hours: '12:00 PM – 10:00 PM', status: 'Scheduled', isCurrent: false },
      { day: 'Fri', spot: 'South Lamar Night Courtyard', hours: '2:00 PM – Midnight', status: 'Peak Hours', isCurrent: false },
      { day: 'Sat', spot: 'Austin Asian Street Food Festival', hours: '11:00 AM – 11:00 PM', status: 'Festival Lineup', isCurrent: false }
    ]
  },

  'smoke-bone': {
    id: 'smoke-bone',
    name: 'Smoke & Bone BBQ',
    cuisine: '14-Hour Hickory Smoked Texas BBQ',
    tagline: 'Prime Black Angus Brisket, Hickory Smoke Rings, Jalapeño Cheddar Sausage & House Sweet Heat Mop.',
    status: 'Open Now until 9:30 PM',
    location: 'Brewery Lane Lot 4, Austin, TX',
    rating: '4.9 (310 Reviews)',
    heroImg: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    aboutHeading: '6 Years of Low & Slow Woodsmoke Mastery',
    aboutText: 'Pitmaster Wyatt Cole built Smoke & Bone BBQ around an authentic 500-gallon offset barrel smoker stoked exclusively with seasoned Texas post oak. Smoking around the clock for 14 to 16 hours, Wyatt renders collagen into tender bark, succulent brisket, and competition-grade ribs.',
    highlight1Title: 'Texas Post Oak',
    highlight1Desc: '100% natural wood smoke, no gas assists',
    highlight2Title: 'Prime Black Angus',
    highlight2Desc: 'Heavy peppery rub & certified USDA Prime brisket',
    chef: {
      name: 'Wyatt Cole',
      role: 'Pitmaster & Smokehouse Founder',
      photo: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=600&auto=format&fit=crop',
      quote: '"You cannot rush wood and beef. When you tend a live fire through a 3 AM thunderstorm and pull a brisket with a mahogany bark that jiggles like custard, you know true Texas BBQ."',
      instagram: '@SmokeBoneATX',
      facebook: 'SmokeBoneBBQAustin'
    },
    menu: [
      {
        name: '14-Hour Hickory Smoked Brisket',
        price: '₹460',
        desc: 'Half pound of Prime Black Angus brisket with deep peppery smoke ring, house sweet heat mop sauce, warm skillet cornbread, and vinegar pickled cucumbers.',
        badge: 'Pitmaster Choice',
        badgeClass: 'bg-warning text-dark',
        badge2: 'Smoked Prime',
        badge2Class: 'bg-danger text-white',
        img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=300&auto=format&fit=crop'
      },
      {
        name: 'Smoked Jalapeño Cheddar Sausage Link',
        price: '₹220',
        desc: 'Coarse ground pork and beef link stuffed with fresh diced jalapeños and sharp cheddar that bursts when sliced.',
        badge: 'House Sausage',
        badgeClass: 'bg-secondary-light text-dark',
        img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=300&auto=format&fit=crop'
      },
      {
        name: 'Cast-Iron Skillet Honey Cornbread',
        price: '₹120',
        desc: 'Baked golden in cast iron skillets with sweet kernel corn, brushed with hot honey butter.',
        badge: 'Side Order',
        badgeClass: 'bg-success-light text-success',
        img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=300&auto=format&fit=crop'
      },
      {
        name: 'Banana Bourbon Pudding Cup',
        price: '₹150',
        desc: 'Layered vanilla wafer cookies, fresh sliced bananas, Madagascar vanilla custard, and charred bourbon caramel.',
        badge: 'Dessert',
        badgeClass: 'bg-warning-light text-dark',
        img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=300&auto=format&fit=crop'
      }
    ],
    schedule: [
      { day: 'Today (Tue)', spot: 'Brewery Lane Lot 4', hours: '11:00 AM – 9:30 PM', status: 'Serving Now', isCurrent: true },
      { day: 'Wed', spot: 'East Austin Beer Garden Yard', hours: '12:00 PM – 9:00 PM', status: 'Scheduled', isCurrent: false },
      { day: 'Thu', spot: 'South Lamar Outdoor Lot', hours: '12:00 PM – 10:00 PM', status: 'Scheduled', isCurrent: false },
      { day: 'Fri', spot: 'Downtown Riverfront Night Hub', hours: '12:00 PM – 11:00 PM', status: 'Peak Hours', isCurrent: false },
      { day: 'Sat', spot: 'Austin Craft Beer & BBQ Rally', hours: '11:00 AM – 10:00 PM', status: 'Festival Lineup', isCurrent: false }
    ]
  },

  'firebird-chicken': {
    id: 'firebird-chicken',
    name: 'Firebird Hot Chicken',
    cuisine: 'Nashville Hot Poultry & Loaded Sandos',
    tagline: 'Crispy Double-Dredged Buttermilk Chicken, Cayenne Dip, Sweet Vinegar Slaw & Butter Brioche.',
    status: 'Open Now until 11:00 PM',
    location: 'South Congress Food Oasis, Austin, TX',
    rating: '4.9 (340 Reviews)',
    heroImg: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?q=80&w=1400&auto=format&fit=crop',
    aboutHeading: '3 Years of Pure Southern Heat & Crunch',
    aboutText: 'Founded by pit-fryer Jaxson Reed, Firebird Hot Chicken brings authentic Nashville hot chicken recipes straight to Austin. Every breast is brined in buttermilk for 24 hours, double-dredged in spiced flour, and basted in hot cayenne infused oil for legendary crunch.',
    highlight1Title: '24-Hour Brined',
    highlight1Desc: 'Jumbo tender chicken soaked in spiced buttermilk',
    highlight2Title: '5 Heat Levels',
    highlight2Desc: 'From Southern Mild to Ghost Pepper Inferno',
    chef: {
      name: 'Jaxson Reed',
      role: 'Head Frymaster & Founder',
      photo: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=600&auto=format&fit=crop',
      quote: '"True Nashville heat is not just burning spice — it is the harmony of brown sugar sweetness, apple cider vinegar tang, and sizzling red cayenne crunch."',
      instagram: '@FirebirdHotChicken',
      facebook: 'FirebirdHotChickenATX'
    },
    menu: [
      {
        name: 'Cayenne Glazed Nashville Hot Chicken Sando',
        price: '₹320',
        desc: 'Crispy jumbo fried chicken breast dipped in cayenne chili oil, creamy cider slaw, kosher dill pickles on toasted brioche.',
        badge: 'Bestseller',
        badgeClass: 'bg-danger text-white',
        badge2: 'Spicy 🔥',
        badge2Class: 'bg-warning text-dark',
        img: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?q=80&w=300&auto=format&fit=crop'
      },
      {
        name: 'Jumbo Hot Chicken Tenders (3 pcs)',
        price: '₹260',
        desc: 'Hand-battered chicken tenderloins served over Texas toast with comeback dipping sauce and crinkle pickles.',
        badge: 'Fan Favorite',
        badgeClass: 'bg-secondary-light text-dark',
        img: 'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=300&auto=format&fit=crop'
      },
      {
        name: 'Crinkle Cut Spiced Waffle Fries',
        price: '₹150',
        desc: 'Crisp waffle cut potatoes dusted with our secret Nashville dry seasoning, served with creamy ranch.',
        badge: 'Side',
        badgeClass: 'bg-success-light text-success',
        img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=300&auto=format&fit=crop'
      },
      {
        name: 'Southern Sweet Peach Iced Tea',
        price: '₹120',
        desc: 'Freshly brewed black tea infused with Hill Country peach puree and fresh mint sprig.',
        badge: 'Drink',
        badgeClass: 'bg-warning-light text-dark',
        img: 'https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=300&auto=format&fit=crop'
      }
    ],
    schedule: [
      { day: 'Today (Tue)', spot: 'South Congress Food Oasis', hours: '11:30 AM – 11:00 PM', status: 'Serving Now', isCurrent: true },
      { day: 'Wed', spot: 'UT Austin Campus West Lot', hours: '11:00 AM – 4:00 PM', status: 'Scheduled', isCurrent: false },
      { day: 'Thu', spot: 'Barton Creek Food Haven', hours: '12:00 PM – 10:00 PM', status: 'Scheduled', isCurrent: false },
      { day: 'Fri', spot: 'Rainey Street Night Bazaar', hours: '2:00 PM – 1:00 AM', status: 'Peak Hours', isCurrent: false },
      { day: 'Sat', spot: 'Zilker Park Outdoor Concert', hours: '11:00 AM – 11:00 PM', status: 'Festival Lineup', isCurrent: false }
    ]
  },

  'tokyo-drift': {
    id: 'tokyo-drift',
    name: 'Tokyo Drift Noodle Bar',
    cuisine: 'Hand-Pulled Ramen & Crispy Gyoza',
    tagline: '18-Hour Simmered Tonkotsu Broth, Springy Tokyo Wheat Noodles, Chashu Pork & Black Garlic Oil.',
    status: 'Open Now until 10:30 PM',
    location: 'East Austin Night Yard, Austin, TX',
    rating: '4.9 (215 Reviews)',
    heroImg: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=1400&auto=format&fit=crop',
    aboutHeading: '4 Years of Hand-Crafted Broth & Curbside Slurping',
    aboutText: 'Chef Kenji Sato brought Tokyo night market ramen culture to the roads of Austin. The rich, silky tonkotsu broth bubbles for 18 hours until marrow and collagen emulsify into liquid gold, paired with bouncy custom noodles and melt-in-mouth slow-braised pork belly.',
    highlight1Title: '18-Hour Broth',
    highlight1Desc: 'Rich emulsion of roasted Berkshire pork bones',
    highlight2Title: 'House Noodles',
    highlight2Desc: 'Custom springy wheat noodles calibrated for high broth cling',
    chef: {
      name: 'Chef Kenji Sato',
      role: 'Executive Ramen Master & Founder',
      photo: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=600&auto=format&fit=crop',
      quote: '"In Tokyo, ramen is not fast food — it is an art of patience. When the rich aroma of roasted bones and toasted black garlic steam out of our truck window, people line up with pure anticipation."',
      instagram: '@TokyoDriftRamen',
      facebook: 'TokyoDriftNoodleBar'
    },
    menu: [
      {
        name: 'Rich Black Garlic Shoyu Tonkotsu Ramen',
        price: '₹360',
        desc: '18-hour pork broth, hand-crafted wheat noodles, braised Berkshire chashu, ajitsuke tamago egg, wood-ear mushrooms, mayu black garlic drizzle.',
        badge: 'Signature',
        badgeClass: 'bg-danger text-white',
        badge2: 'Chef Pick',
        badge2Class: 'bg-warning text-dark',
        img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=300&auto=format&fit=crop'
      },
      {
        name: 'Spicy Miso Ground Pork Ramen',
        price: '₹380',
        desc: 'Fermented red and white miso broth, rayu chili tare, wok-seared seasoned ground pork, sweet corn, scallions.',
        badge: 'Spicy Favorite',
        badgeClass: 'bg-secondary-light text-dark',
        img: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?q=80&w=300&auto=format&fit=crop'
      },
      {
        name: 'Crispy Pan-Fried Pork Gyoza (6 pcs)',
        price: '₹220',
        desc: 'Hand-pleated dumplings with lace crust, stuffed with ginger garlic minced pork and scallions, served with tangy ponzu dip.',
        badge: 'Handmade',
        badgeClass: 'bg-success-light text-success',
        img: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?q=80&w=300&auto=format&fit=crop'
      },
      {
        name: 'Yuzu Honey Sparkling Fizz',
        price: '₹140',
        desc: 'Japanese yuzu citrus juice, organic honey, sparkling mountain soda, candied yuzu peel.',
        badge: 'Beverage',
        badgeClass: 'bg-warning-light text-dark',
        img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=300&auto=format&fit=crop'
      }
    ],
    schedule: [
      { day: 'Today (Tue)', spot: 'East Austin Night Yard', hours: '12:00 PM – 10:30 PM', status: 'Serving Now', isCurrent: true },
      { day: 'Wed', spot: 'Mueller Lake Park Lot', hours: '4:00 PM – 10:00 PM', status: 'Scheduled', isCurrent: false },
      { day: 'Thu', spot: 'Downtown Arts District', hours: '12:00 PM – 11:00 PM', status: 'Scheduled', isCurrent: false },
      { day: 'Fri', spot: 'Rainey Street Food Oasis', hours: '2:00 PM – Midnight', status: 'Peak Hours', isCurrent: false },
      { day: 'Sat', spot: 'Austin Asian Food Bazaar', hours: '11:00 AM – 11:00 PM', status: 'Festival Lineup', isCurrent: false }
    ]
  },

  'sweet-wheels': {
    id: 'sweet-wheels',
    name: 'Sweet Wheels Churros',
    cuisine: 'Artisan Churros, Dolce Dips & Specialty Espresso',
    tagline: 'Handcrafted Hot Spanish Churros, Dulce de Leche Dips, Cinnamon Sugar & Nitro Cold Brew.',
    status: 'Open Now until 10:00 PM',
    location: 'Central Mall Promenade, Austin, TX',
    rating: '4.8 (175 Reviews)',
    heroImg: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=1400&auto=format&fit=crop',
    aboutHeading: '3 Years of Crispy Golden Traditions & Sweet Curbside Smiles',
    aboutText: 'Founded by pastry artisan Mateo Silva, Sweet Wheels brings golden, freshly extruded Spanish churros to the curbside. Using imported Ceylon cinnamon, French Valrhona chocolate, and artisanal dulce de leche, every loop and bite-sized churro is fried to order and served piping hot.',
    highlight1Title: 'Fried to Order',
    highlight1Desc: 'Never pre-made; extruded and sizzled on the spot',
    highlight2Title: 'Artisan Dips',
    highlight2Desc: 'Authentic dulce de leche & Belgian dark chocolate',
    chef: {
      name: 'Mateo Silva',
      role: 'Head Pastry Craftsman & Founder',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
      quote: '"A true churro should be razor-crisp on the ridges and cloud-tender inside. Rolled in fragrant cinnamon sugar and dipped in warm molten chocolate, it brings instant joy."',
      instagram: '@SweetWheelsATX',
      facebook: 'SweetWheelsChurros'
    },
    menu: [
      {
        name: 'Cinnamon Sugar Churro Bites with Dip',
        price: '₹180',
        desc: 'Twelve bite-sized crispy churros tossed in Ceylon cinnamon and raw cane sugar, served with warm dulce de leche.',
        badge: 'Bestseller',
        badgeClass: 'bg-danger text-white',
        badge2: 'Fan Favorite',
        badge2Class: 'bg-warning text-dark',
        img: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=300&auto=format&fit=crop'
      },
      {
        name: 'Dulce de Leche Stuffed Giant Churro',
        price: '₹210',
        desc: 'Thick Spanish style churro piped with slow-simmered Argentine dulce de leche caramel and dusted with powdered sugar.',
        badge: 'Signature',
        badgeClass: 'bg-secondary-light text-dark',
        img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=300&auto=format&fit=crop'
      },
      {
        name: 'Belgian Dark Chocolate Fondue Loop',
        price: '₹230',
        desc: 'Giant golden loop churro served with a 4oz cup of melted 70% dark Belgian chocolate and toasted almond flakes.',
        badge: 'Chef Special',
        badgeClass: 'bg-warning-light text-dark',
        img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=300&auto=format&fit=crop'
      },
      {
        name: 'Nitro Espresso Cold Brew',
        price: '₹150',
        desc: 'Single-origin Ethiopian cold brew infused with nitrogen for a silky, creamy stout-like head with notes of cocoa.',
        badge: 'Beverage',
        badgeClass: 'bg-success-light text-success',
        img: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=300&auto=format&fit=crop'
      }
    ],
    schedule: [
      { day: 'Today (Tue)', spot: 'Central Mall Promenade', hours: '12:00 PM – 10:00 PM', status: 'Serving Now', isCurrent: true },
      { day: 'Wed', spot: 'South Congress Plaza', hours: '2:00 PM – 10:00 PM', status: 'Scheduled', isCurrent: false },
      { day: 'Thu', spot: 'Mueller Lake Park Lot', hours: '3:00 PM – 10:00 PM', status: 'Scheduled', isCurrent: false },
      { day: 'Fri', spot: 'Rainey Street Evening Hub', hours: '4:00 PM – 11:30 PM', status: 'Peak Hours', isCurrent: false },
      { day: 'Sat', spot: 'Austin Artisan Food Fair', hours: '11:00 AM – 11:00 PM', status: 'Festival Lineup', isCurrent: false }
    ]
  },

  'green-fuel': {
    id: 'green-fuel',
    name: 'Green Fuel Vegan',
    cuisine: '100% Plant-Based Clean Comfort & Fresh Bowls',
    tagline: 'Smoky Pulled Jackfruit, Fresh Avocado Bowls, House Cashew Crema & Cold-Pressed Elixirs.',
    status: 'Opens at 5:00 PM',
    location: 'Yoga District Commons, Austin, TX',
    rating: '4.7 (98 Reviews)',
    heroImg: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1400&auto=format&fit=crop',
    aboutHeading: '4 Years of Wholesome Plant Power & Zero Compromise',
    aboutText: 'Created by holistic nutritionist Chloe Vance, Green Fuel Vegan reimagines street comfort food through 100% organic, locally sourced plant-based creations. From slow-braised smoky jackfruit tacos to nutrient-dense superfood bowls, every item is free from artificial preservatives and bursting with vibrant energy.',
    highlight1Title: '100% Plant-Based',
    highlight1Desc: 'Zero dairy, zero meat, non-GMO organic produce',
    highlight2Title: 'Scratch Sauces',
    highlight2Desc: 'House-blended cashew crema & fire-roasted salsas',
    chef: {
      name: 'Chloe Vance',
      role: 'Founder & Plant-Based Culinary Director',
      photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop',
      quote: '"Eating plant-based street food should feel like a celebration, not a sacrifice. We pack real vegetables, healthy fats, and bold spices into food that makes you feel vibrant."',
      instagram: '@GreenFuelVegan',
      facebook: 'GreenFuelVeganAustin'
    },
    menu: [
      {
        name: 'Smoky Pulled Jackfruit & Mango Bowl',
        price: '₹280',
        desc: 'Hickory-smoked young green jackfruit, organic quinoa, ripe mango salsa, pickled cabbage, avocado roses, and house cashew crema.',
        badge: 'Bestseller',
        badgeClass: 'bg-danger text-white',
        badge2: '100% Vegan',
        badge2Class: 'bg-success text-white',
        img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=300&auto=format&fit=crop'
      },
      {
        name: 'Crispy Avocado & Charred Corn Tacos (3 pcs)',
        price: '₹260',
        desc: 'Panko-crusted fresh avocado wedges, charred sweet corn, chipotle vegan mayo, purple cabbage on warm heirloom corn tortillas.',
        badge: 'Gluten-Free',
        badgeClass: 'bg-warning-light text-dark',
        img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=300&auto=format&fit=crop'
      },
      {
        name: 'Spicy Buffalo Cauliflower Poppers',
        price: '₹190',
        desc: 'Oven-roasted crispy cauliflower florets tossed in tangy cayenne buffalo glaze, served with house dill cashew ranch.',
        badge: 'Crispy Side',
        badgeClass: 'bg-secondary-light text-dark',
        img: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?q=80&w=300&auto=format&fit=crop'
      },
      {
        name: 'Cold-Pressed Turmeric Citrus Tonic',
        price: '₹140',
        desc: 'Fresh pressed organic orange, raw turmeric root, ginger, lemon, and a dash of black pepper for maximum immunity.',
        badge: 'Cold-Pressed',
        badgeClass: 'bg-success-light text-success',
        img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=300&auto=format&fit=crop'
      }
    ],
    schedule: [
      { day: 'Today (Tue)', spot: 'Yoga District Commons', hours: '5:00 PM – 10:00 PM', status: 'Opens 5 PM', isCurrent: true },
      { day: 'Wed', spot: 'Zilker Botanical Lawn', hours: '11:30 AM – 3:30 PM', status: 'Scheduled', isCurrent: false },
      { day: 'Thu', spot: 'Downtown Tech Plaza', hours: '11:00 AM – 3:00 PM', status: 'Scheduled', isCurrent: false },
      { day: 'Fri', spot: 'South Lamar Sunset Market', hours: '4:00 PM – 10:30 PM', status: 'Peak Hours', isCurrent: false },
      { day: 'Sat', spot: 'Austin Green Living Expo', hours: '10:00 AM – 8:00 PM', status: 'Festival Lineup', isCurrent: false }
    ]
  }
};

/**
 * Initialize Food Truck Details on food-truck-details.html
 */
function initTruckDetailsPage() {
  // Only execute on food-truck-details.html
  if (!window.location.pathname.includes('food-truck-details.html') && !document.getElementById('truck-title')) {
    return;
  }

  // Read URL search parameter '?truck=...' or hash '#...'
  const urlParams = new URLSearchParams(window.location.search);
  let truckKey = urlParams.get('truck') || window.location.hash.replace('#', '');
  
  if (!truckKey || !FOOD_TRUCKS_DATABASE[truckKey]) {
    // If not specified or unknown, default to 'taco-wagon'
    truckKey = 'taco-wagon';
  }

  const truck = FOOD_TRUCKS_DATABASE[truckKey];
  if (!truck) return;

  // 1. Update Title & Meta
  document.title = `${truck.name} — ${truck.cuisine} | StreetFeast`;

  // 2. Update Hero Section
  const titleEl = document.getElementById('truck-title');
  if (titleEl) titleEl.textContent = truck.name;

  const taglineEl = document.getElementById('truck-tagline');
  if (taglineEl) taglineEl.textContent = truck.tagline;

  const statusEl = document.getElementById('truck-status');
  if (statusEl) statusEl.textContent = truck.status;

  const locEl = document.getElementById('truck-hero-location');
  if (locEl) locEl.innerHTML = `<i class="bi bi-geo-alt-fill text-danger me-1"></i> ${truck.location}`;

  const ratingEl = document.getElementById('truck-hero-rating');
  if (ratingEl) ratingEl.innerHTML = `<i class="bi bi-star-fill text-warning me-1"></i> ${truck.rating}`;

  const heroImgEl = document.getElementById('truck-hero-img');
  if (heroImgEl) {
    heroImgEl.src = truck.heroImg;
    heroImgEl.alt = `${truck.name} food truck mobile kitchen`;
  }

  // 3. Update About Section
  const aboutHeadingEl = document.getElementById('truck-about-heading');
  if (aboutHeadingEl) aboutHeadingEl.textContent = truck.aboutHeading;

  const aboutTextEl = document.getElementById('truck-about-text');
  if (aboutTextEl) aboutTextEl.textContent = truck.aboutText;

  const h1TitleEl = document.getElementById('truck-highlight-1-title');
  if (h1TitleEl) h1TitleEl.textContent = truck.highlight1Title;

  const h1DescEl = document.getElementById('truck-highlight-1-desc');
  if (h1DescEl) h1DescEl.textContent = truck.highlight1Desc;

  const h2TitleEl = document.getElementById('truck-highlight-2-title');
  if (h2TitleEl) h2TitleEl.textContent = truck.highlight2Title;

  const h2DescEl = document.getElementById('truck-highlight-2-desc');
  if (h2DescEl) h2DescEl.textContent = truck.highlight2Desc;

  // 4. Update Chef Card
  const chefImgEl = document.getElementById('truck-chef-img');
  if (chefImgEl) {
    chefImgEl.src = truck.chef.photo;
    chefImgEl.alt = truck.chef.name;
  }

  const chefNameEl = document.getElementById('truck-chef-name');
  if (chefNameEl) chefNameEl.textContent = truck.chef.name;

  const chefRoleEl = document.getElementById('truck-chef-role');
  if (chefRoleEl) chefRoleEl.textContent = truck.chef.role;

  const chefQuoteEl = document.getElementById('truck-chef-quote');
  if (chefQuoteEl) chefQuoteEl.textContent = truck.chef.quote;

  const chefIgEl = document.getElementById('truck-chef-ig');
  if (chefIgEl) {
    chefIgEl.innerHTML = `<i class="bi bi-instagram"></i> ${truck.chef.instagram}`;
  }

  const chefFbEl = document.getElementById('truck-chef-fb');
  if (chefFbEl) {
    chefFbEl.innerHTML = `<i class="bi bi-facebook"></i> ${truck.chef.facebook}`;
  }

  // 5. Update Menu Preview
  const menuContainer = document.getElementById('truck-menu-container');
  if (menuContainer && truck.menu) {
    menuContainer.innerHTML = truck.menu.map(item => `
      <div class="col-md-6">
        <div class="p-4 bg-surface rounded-4 border shadow-sm d-flex gap-3 align-items-center h-100">
          <img src="${item.img}" alt="${item.name}" class="rounded-3 object-fit-cover shadow-xs" style="width: 100px; height: 100px; flex-shrink: 0;">
          <div class="flex-grow-1">
            <div class="d-flex justify-content-between align-items-center mb-1">
              <h5 class="mb-0 fw-bold text-heading">${item.name}</h5>
              <span class="fw-bold fs-5 text-primary-custom">${item.price}</span>
            </div>
            <p class="small text-muted mb-2">${item.desc}</p>
            <div class="d-flex gap-1 flex-wrap">
              <span class="badge ${item.badgeClass}">${item.badge}</span>
              ${item.badge2 ? `<span class="badge ${item.badge2Class}">${item.badge2}</span>` : ''}
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  // 6. Update Weekly Schedule Table
  const scheduleBody = document.getElementById('truck-schedule-body');
  if (scheduleBody && truck.schedule) {
    scheduleBody.innerHTML = truck.schedule.map(row => `
      <tr class="${row.isCurrent ? 'table-success-subtle' : ''}">
        <td class="fw-bold">${row.day}</td>
        <td><i class="bi bi-geo-alt-fill text-danger me-1"></i> ${row.spot}</td>
        <td>${row.hours}</td>
        <td><span class="badge-status ${row.isCurrent ? 'ready' : ''}">${row.status}</span></td>
      </tr>
    `).join('');
  }

  // 7. Update Booking Modal Truck Name
  const modalTruckName = document.getElementById('modal-truck-target-name');
  if (modalTruckName) modalTruckName.textContent = truck.name;
}

// Auto-run on DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTruckDetailsPage);
} else {
  initTruckDetailsPage();
}
