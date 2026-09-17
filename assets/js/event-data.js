/**
 * StreetFeast — Food Truck Events & Dynamic Detail Handler
 * Powers authentic multi-event details across event-details.html
 */

const EVENTS_DATABASE = {
  'sunset-feast': {
    id: 'sunset-feast',
    title: 'Downtown Sunset Street Feast & Rodeo',
    metaTitle: 'Downtown Sunset Street Feast & Rodeo — Lineup & Schedule | StreetFeast',
    metaDesc: 'View the full food truck lineup, festival music timetable, parking maps, and vendor details for the Downtown Sunset Street Feast & Rodeo.',
    categoryBadge: { text: 'Headline Event', class: 'bg-danger text-white' },
    dateBadge: 'Saturday, Sep 28',
    timeBadge: '5:00 PM – 11:00 PM',
    lead: 'Join 4,000+ local foodies at Riverside Promenade for the city’s premier autumn street gathering. 28 verified gourmet trucks, live cumbia and funk bands, craft brewery pavilions, and riverside lounge seating.',
    heroImg: 'assets/images/event-sunset-feast.jpg',
    heroImgAlt: 'Downtown Sunset Street Feast headline event with food trucks and festival crowd',
    overviewTag: 'The Experience',
    overviewHeading: 'Everything You Need to Know',
    overviewDesc: "The Downtown Sunset Street Feast brings together the most popular trucks in our regional directory. Whether you're craving 14-hour Texas brisket, molten Jalisco birria, wood-fired burrata pizza, or artisanal vegan bowls, every palate is accommodated.",
    highlights: [
      {
        icon: 'bi-music-note-beamed',
        iconClass: 'text-primary-custom',
        title: 'Live Outdoor Stage',
        desc: 'Featuring The Austin Latin Brass Collective and DJ Reyna spinning salsa, cumbia & neo-soul.'
      },
      {
        icon: 'bi-cup-straw',
        iconClass: 'text-secondary-custom',
        title: 'Craft Beverage Pavilions',
        desc: 'Local IPAs, crisp ciders, small-batch hard kombucha, and freshly squeezed agua frescas.'
      }
    ],
    quickFacts: [
      { label: 'Admission:', value: 'Free for All Ages', isSuccess: true },
      { label: 'Pet Policy:', value: 'Leashed Dogs Welcomed', isSuccess: false },
      { label: 'Payment:', value: 'Cards, Apple Pay, Cash', isSuccess: false },
      { label: 'Seating:', value: '120+ Picnic Benches & Lawn', isSuccess: false },
      { label: 'Rain Plan:', value: 'Covered Boardwalk Pavilions', isSuccess: false }
    ],
    lineupHeading: 'Attending Food Trucks (28 Trucks)',
    lineupSub: 'Explore the verified trucks serving hot dishes at the rodeo.',
    trucks: [
      {
        name: 'The Taco Wagon',
        truckId: 'taco-wagon',
        cuisine: 'Authentic Mexican & Birria',
        badge: 'Headliner',
        badgeClass: 'sticker-badge hot',
        specialTitle: 'Festival Special:',
        specialDish: 'Jumbo Quesabirria Platter',
        img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=600&auto=format&fit=crop'
      },
      {
        name: 'Burger Bus Co.',
        truckId: 'burger-bus',
        cuisine: 'Artisan Smash Burgers',
        badge: 'Staff Pick',
        badgeClass: 'sticker-badge featured',
        specialTitle: 'Festival Special:',
        specialDish: 'Double Truffle Slider Box',
        img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=600&auto=format&fit=crop'
      },
      {
        name: 'Pizza Bella Mobile',
        truckId: 'pizza-bella',
        cuisine: 'Wood-Fired Pizza',
        badge: 'Wood-Fired',
        badgeClass: 'sticker-badge',
        specialTitle: 'Festival Special:',
        specialDish: 'Hot Honey & Burrata Slice',
        img: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?q=80&w=600&auto=format&fit=crop'
      },
      {
        name: 'Sweet Wheels Churros',
        truckId: 'sweet-wheels',
        cuisine: 'Churros & Specialty Brews',
        badge: 'Dessert Hub',
        badgeClass: 'sticker-badge hot',
        specialTitle: 'Festival Special:',
        specialDish: 'Churro Sundae with Cajeta',
        img: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=600&auto=format&fit=crop'
      }
    ],
    scheduleDesc: 'Plan your evening around music sets, tasting competitions, and kitchen rushes.',
    schedule: [
      {
        time: '5:00 PM',
        timeClass: 'text-primary-custom',
        tag: 'Gates Open',
        title: 'Trucks Power Up & DJ Warm-up',
        desc: 'Picnic benches open, DJ Reyna kicks off tropical grooves, and first 200 visitors get free street churro tickets.'
      },
      {
        time: '6:30 PM',
        timeClass: 'text-primary-custom',
        tag: 'Live Stage',
        title: 'The Austin Latin Brass Band',
        desc: 'High-energy 8-piece brass ensemble covering Latin jazz, salsa, and funk classics as sunset begins over the river.'
      },
      {
        time: '8:15 PM',
        timeClass: 'text-secondary-custom',
        tag: 'Showdown',
        title: "People's Choice Golden Spatula Trophy",
        desc: 'Diners cast their digital votes via StreetFeast for best bite of the night. Trophy presented on main stage.'
      },
      {
        time: '10:30 PM',
        timeClass: 'text-primary-custom',
        tag: 'Last Orders',
        title: 'Dessert Afterparty & Festoon Send-off',
        desc: 'Last calls for tacos and hot coffee, sweet treats, and festival closing under ambient fireworks.'
      }
    ],
    venueHeading: 'Riverside Promenade Park',
    venueDesc: 'Riverside Promenade Park is situated right on the south bank with easy pedestrian, bicycle, and rideshare access.',
    directions: [
      {
        icon: 'bi-p-square',
        iconClass: 'text-primary-custom',
        title: 'Designated Event Parking',
        desc: 'City Hall Parking Garage (3 blocks away) offers $5 flat event rate. Free street parking after 6 PM.'
      },
      {
        icon: 'bi-car-front',
        iconClass: 'text-secondary-custom',
        title: 'Rideshare Drop-Off Zone',
        desc: 'Set your Uber/Lyft destination to "Riverside East Pier Drop-off" for zero traffic walking entry.'
      },
      {
        icon: 'bi-bicycle',
        iconClass: 'text-success-custom',
        title: 'Free Bike Valet',
        desc: 'Complimentary secured bicycle parking corrals provided by Austin City Cycling.'
      }
    ],
    venueImg: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=800&auto=format&fit=crop'
  },

  'taco-rodeo': {
    id: 'taco-rodeo',
    title: 'Midtown Taco & Brew Rodeo',
    metaTitle: 'Midtown Taco & Brew Rodeo — Lineup, Taqueros & Schedule | StreetFeast',
    metaDesc: 'Explore 26 food trucks competing for the Golden Salsa trophy at the Midtown Taco & Brew Rodeo. View schedules, craft beer taps, and event passes.',
    categoryBadge: { text: 'Food Festival', class: 'bg-warning-subtle text-dark border border-warning' },
    dateBadge: 'Friday, Oct 04',
    timeBadge: '12:00 PM – 9:00 PM',
    lead: 'Central Texas’s premier taquero battle! 26 licensed food trucks with 15 master taqueros competing for the Golden Salsa award, craft cerveza pavilions, margarita lounges, and live mariachi funk.',
    heroImg: 'assets/images/event-taco-rodeo.jpg',
    heroImgAlt: 'Midtown Taco and Craft Brew Rodeo street crowd and food trucks',
    overviewTag: 'Taco Showdown',
    overviewHeading: 'The Ultimate Taquero Competition & Craft Cerveza Rodeo',
    overviewDesc: 'Midtown Square transforms into an electric open-air cantina. Taste hand-pressed heirloom corn tortillas, slow-simmered beef birria, Yucatán cochinita pibil, and Baja grilled fish tacos paired with 18 local craft microbrews.',
    highlights: [
      {
        icon: 'bi-trophy-fill',
        iconClass: 'text-warning',
        title: 'Golden Salsa Showdown',
        desc: 'Diners and celebrity chef judges vote live for Best Birria Taco, Most Inventive Salsa, and Crowd Champion.'
      },
      {
        icon: 'bi-cup-straw',
        iconClass: 'text-primary-custom',
        title: 'Craft Cerveza & Margarita Lounge',
        desc: 'Over 18 crisp Mexican lagers and ales on tap, fresh lime mezcal palomas, and chilled hibiscus agua frescas.'
      }
    ],
    quickFacts: [
      { label: 'Admission:', value: 'Free General Entry', isSuccess: true },
      { label: 'Tasting Passes:', value: '$25 VIP Taco Flight Available', isSuccess: false },
      { label: 'Pet Policy:', value: 'Leashed Pets Welcomed', isSuccess: false },
      { label: 'Payment:', value: 'Cards, Digital Pay, Cash', isSuccess: false },
      { label: 'Rain Plan:', value: 'Covered Midtown Glass Plaza', isSuccess: false }
    ],
    lineupHeading: 'Attending Taqueros & Trucks (26 Trucks)',
    lineupSub: 'Meet the master taqueros and mobile kitchen artisans at Midtown Square.',
    trucks: [
      {
        name: 'The Taco Wagon',
        truckId: 'taco-wagon',
        cuisine: 'Authentic Jalisco Birria',
        badge: 'Defending Champ',
        badgeClass: 'sticker-badge hot',
        specialTitle: 'Rodeo Special:',
        specialDish: 'Fire-Griddled Quesabirria with Bone Broth',
        img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=600&auto=format&fit=crop'
      },
      {
        name: 'Smoke & Bone BBQ',
        truckId: 'smoke-bone',
        cuisine: 'Oak-Smoked Meats & Tacos',
        badge: 'Pitmaster Pick',
        badgeClass: 'sticker-badge featured',
        specialTitle: 'Rodeo Special:',
        specialDish: 'Smoked Prime Brisket Street Taco with Peach Slaw',
        img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&auto=format&fit=crop'
      },
      {
        name: 'Burger Bus Co.',
        truckId: 'burger-bus',
        cuisine: 'Smash Burgers & Loaded Fries',
        badge: 'Crowd Favorite',
        badgeClass: 'sticker-badge',
        specialTitle: 'Rodeo Special:',
        specialDish: 'Queso Blanco Double Smash Burger',
        img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=600&auto=format&fit=crop'
      },
      {
        name: 'Sweet Wheels Churros',
        truckId: 'sweet-wheels',
        cuisine: 'Artisan Churros & Sweets',
        badge: 'Dessert Hub',
        badgeClass: 'sticker-badge hot',
        specialTitle: 'Rodeo Special:',
        specialDish: 'Cinnamon Churro Loop with Mexican Chocolate Dip',
        img: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=600&auto=format&fit=crop'
      }
    ],
    scheduleDesc: 'Timing for tasting flights, live mariachi fusion, and the Golden Salsa ceremony.',
    schedule: [
      {
        time: '12:00 PM',
        timeClass: 'text-primary-custom',
        tag: 'Kickoff',
        title: 'Taquero Grills Fire Up & Tasting Flights Begin',
        desc: 'Gates open to public. VIP tasting passport holders can redeem their first 5 taco samples and vote on the official app.'
      },
      {
        time: '2:30 PM',
        timeClass: 'text-secondary-custom',
        tag: 'Contest',
        title: 'Habanero & Ghost Pepper Chili Challenge',
        desc: 'Daring contestants compete in an escalating 5-tier fiery hot salsa contest on the central plaza stage.'
      },
      {
        time: '5:00 PM',
        timeClass: 'text-primary-custom',
        tag: 'Live Stage',
        title: 'Mariachi Estrella & Funk Rock Fusion',
        desc: 'Beloved local brass ensemble blending traditional rancheras with modern funk, brass rhythms, and salsa beats.'
      },
      {
        time: '7:45 PM',
        timeClass: 'text-warning',
        tag: 'Awards',
        title: 'Golden Salsa & Master Taquero Trophy Ceremony',
        desc: 'Announcement of the 2026 Golden Salsa Champion truck voted by the public and our panel of culinary judges.'
      }
    ],
    venueHeading: 'Midtown Square Plaza',
    venueDesc: 'Located at 4th & Congress Ave, Midtown Square is a vibrant pedestrian plaza surrounded by shade trees and brick arcades.',
    directions: [
      {
        icon: 'bi-p-square',
        iconClass: 'text-primary-custom',
        title: 'Midtown Center Garage',
        desc: 'Underground parking at 200 E 5th St ($6 flat festival rate). Enter via 5th or 6th Street.'
      },
      {
        icon: 'bi-train-front',
        iconClass: 'text-secondary-custom',
        title: 'MetroRail & Rapid Bus Access',
        desc: 'Downtown Station is just 2 blocks away. Frequent commuter rail service runs all Friday afternoon and evening.'
      },
      {
        icon: 'bi-car-front',
        iconClass: 'text-success-custom',
        title: 'Rideshare Pickup Lane',
        desc: 'Designated drop-off curb situated at Midtown Square West Entrance on Colorado St.'
      }
    ],
    venueImg: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop'
  },

  'night-market': {
    id: 'night-market',
    title: 'Harborfront Night Market Bazaar',
    metaTitle: 'Harborfront Night Market Bazaar — Lineup & Waterfront Evening | StreetFeast',
    metaDesc: 'Discover 18 Asian street food trucks, wood-fired pizza, lantern shows, and evening stalls at the Harborfront Night Market Bazaar.',
    categoryBadge: { text: 'Night Market', class: 'bg-info-subtle text-dark border border-info' },
    dateBadge: 'Friday, Oct 11',
    timeBadge: '6:00 PM – 11:30 PM',
    lead: 'Experience the magical glow of lantern-lit harbor piers filled with sizzling Asian street skewers, wood-fired pizza slices, artisanal boba tea, night crafters, and acoustic waterfront vibes.',
    heroImg: 'assets/images/event-night-market.jpg',
    heroImgAlt: 'Harborfront Night Market Bazaar evening gathering with paper lanterns and food trucks',
    overviewTag: 'Night Market Glow',
    overviewHeading: 'Asian Street Bites, Artisanal Crafts & Waterfront Lights',
    overviewDesc: 'Modeled after Taipei and Hong Kong evening street markets, Harborfront Bazaar gathers 18 specialty mobile kitchens alongside local artisan crafters, neon art installations, and waterfront fire performers under harbor stars.',
    highlights: [
      {
        icon: 'bi-fire',
        iconClass: 'text-danger',
        title: 'Waterfront Fire & Lantern Spectacle',
        desc: 'Floating water lantern ceremony at 9:00 PM with fire-spinners and ambient waterfront neo-soul music.'
      },
      {
        icon: 'bi-shop-window',
        iconClass: 'text-primary-custom',
        title: 'Indie Night Crafters',
        desc: 'Over 20 local makers showcasing handmade ceramics, vintage vinyl, screen-printed streetwear, and hot sauces.'
      }
    ],
    quickFacts: [
      { label: 'Admission:', value: 'Free Entry for All', isSuccess: true },
      { label: 'Pet Policy:', value: 'Leashed Dogs Permitted on Boardwalk', isSuccess: false },
      { label: 'Atmosphere:', value: 'Illuminated Piers & Heated Lounge', isSuccess: false },
      { label: 'Payment:', value: 'All Major Cards & Mobile Pay', isSuccess: false },
      { label: 'Rain Plan:', value: 'Covered Pier 4 Warehouse Annex', isSuccess: false }
    ],
    lineupHeading: 'Attending Food Trucks (18 Food Trucks)',
    lineupSub: 'Explore authentic street skewers, dumplings, artisan pizza, and night sweets.',
    trucks: [
      {
        name: 'Pizza Bella Mobile',
        truckId: 'pizza-bella',
        cuisine: 'Wood-Fired Pizza',
        badge: 'Night Special',
        badgeClass: 'sticker-badge hot',
        specialTitle: 'Market Special:',
        specialDish: 'Truffle Porcini & Burrata Slice',
        img: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?q=80&w=600&auto=format&fit=crop'
      },
      {
        name: 'The Taco Wagon',
        truckId: 'taco-wagon',
        cuisine: 'Mexican Street Tacos',
        badge: 'Crowd Favorite',
        badgeClass: 'sticker-badge featured',
        specialTitle: 'Market Special:',
        specialDish: 'Charred Street Corn Esquites Bowl',
        img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=600&auto=format&fit=crop'
      },
      {
        name: 'Burger Bus Co.',
        truckId: 'burger-bus',
        cuisine: 'Artisan Smash Burgers',
        badge: 'Night Grill',
        badgeClass: 'sticker-badge',
        specialTitle: 'Market Special:',
        specialDish: 'Garlic Butter Slider Duo with Shaved Truffle',
        img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=600&auto=format&fit=crop'
      },
      {
        name: 'Sweet Wheels Churros',
        truckId: 'sweet-wheels',
        cuisine: 'Warm Churros & Boba Drinks',
        badge: 'Dessert Hub',
        badgeClass: 'sticker-badge hot',
        specialTitle: 'Market Special:',
        specialDish: 'Matcha Sugar Churros & Boba Cold Brew',
        img: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=600&auto=format&fit=crop'
      }
    ],
    scheduleDesc: 'Night bazaar program with acoustic sets, lantern ceremonies, and dessert hours.',
    schedule: [
      {
        time: '6:00 PM',
        timeClass: 'text-primary-custom',
        tag: 'Sunset',
        title: 'Lantern Illumination & Night Stalls Open',
        desc: 'Over 500 red paper lanterns illuminate the wooden boardwalk as wok stoves and charcoal grills fire up.'
      },
      {
        time: '7:30 PM',
        timeClass: 'text-primary-custom',
        tag: 'Live Stage',
        title: 'Acoustic Waterfront Duo & Synth Waves',
        desc: 'Relaxing ambient acoustic guitar and indie vocals echoing over the marina waters.'
      },
      {
        time: '9:00 PM',
        timeClass: 'text-secondary-custom',
        tag: 'Spectacle',
        title: 'Waterfront Fire Spinners & Lantern Float',
        desc: 'Breathtaking fire-dancing performance on the Pier 4 boardwalk followed by eco-friendly water lanterns.'
      },
      {
        time: '10:45 PM',
        timeClass: 'text-primary-custom',
        tag: 'Late Bites',
        title: 'Boba Tea & Hot Churros Midnight Hour',
        desc: 'Exclusive discount combos on specialty drinks and warm desserts before market closes.'
      }
    ],
    venueHeading: 'Pier 4 Boardwalk Marina',
    venueDesc: 'Perched over the scenic marina waters with expansive harbor views, cool evening breezes, and illuminated docks.',
    directions: [
      {
        icon: 'bi-p-square',
        iconClass: 'text-primary-custom',
        title: 'Marina Parking Deck',
        desc: 'Dedicated 4-story parking garage at Pier 4 ($8 flat night rate). Validated discount for StreetFeast guests.'
      },
      {
        icon: 'bi-water',
        iconClass: 'text-secondary-custom',
        title: 'Harbor Water Taxi Shuttle',
        desc: 'Complimentary ferry shuttle operating every 15 minutes between Downtown Riverwalk and Pier 4 Marina.'
      },
      {
        icon: 'bi-car-front',
        iconClass: 'text-success-custom',
        title: 'Rideshare Turnaround',
        desc: 'Dedicated rideshare pickup/dropoff circle right at the Pier 4 security gate.'
      }
    ],
    venueImg: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop'
  },

  'campus-fest': {
    id: 'campus-fest',
    title: 'University Autumn Bite Fest',
    metaTitle: 'University Autumn Bite Fest — Campus Lineup & Schedule | StreetFeast',
    metaDesc: 'Join 15 food trucks, student battle-of-the-bands, and meal card discounts at the University Autumn Bite Fest. Free public admission.',
    categoryBadge: { text: 'Campus Rally', class: 'bg-success-subtle text-success border border-success' },
    dateBadge: 'Saturday, Oct 18',
    timeBadge: '11:00 AM – 6:00 PM',
    lead: 'The university’s biggest fall foodie gathering! 15 premier mobile kitchens serving smash burgers, loaded fries, acai bowls, and artisan desserts with student discounts and live battle-of-the-bands.',
    heroImg: 'assets/images/event-campus-fest.jpg',
    heroImgAlt: 'University campus food truck autumn festival with students and picnic lawn',
    overviewTag: 'Campus Celebration',
    overviewHeading: 'Fall Flavors, Live Bands & Campus Foodie Energy',
    overviewDesc: 'Gather with students, alumni, faculty, and city neighbors on the great North Lawn. Featuring the annual collegiate Battle of the Bands, giant lawn games, and 15% student meal card discounts across all trucks.',
    highlights: [
      {
        icon: 'bi-music-note-list',
        iconClass: 'text-primary-custom',
        title: 'Collegiate Battle of the Bands',
        desc: '6 top campus indie, rock, and hip-hop acts performing live on the Quad Amphitheater stage.'
      },
      {
        icon: 'bi-tag-fill',
        iconClass: 'text-success-custom',
        title: '15% Student & Faculty Discount',
        desc: 'Show any valid student or university staff ID card for 15% off signature combo meals.'
      }
    ],
    quickFacts: [
      { label: 'Admission:', value: 'Free & Open to Public', isSuccess: true },
      { label: 'Student Discount:', value: '15% Off with College ID', isSuccess: false },
      { label: 'Pet Policy:', value: 'Friendly Leashed Dogs Welcomed', isSuccess: false },
      { label: 'Payment:', value: 'Campus Cards, Debit/Credit, Cash', isSuccess: false },
      { label: 'Rain Plan:', value: 'Student Center Multi-Purpose Hall', isSuccess: false }
    ],
    lineupHeading: 'Attending Campus Trucks (15 Trucks)',
    lineupSub: 'Student favorites and award-winning mobile kitchens parked on North Campus.',
    trucks: [
      {
        name: 'Burger Bus Co.',
        truckId: 'burger-bus',
        cuisine: 'Smash Burgers & Hand-Cut Fries',
        badge: 'Student #1 Pick',
        badgeClass: 'sticker-badge hot',
        specialTitle: 'Campus Special:',
        specialDish: 'Varsity Double Smash with Truffle Fries',
        img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=600&auto=format&fit=crop'
      },
      {
        name: 'The Taco Wagon',
        truckId: 'taco-wagon',
        cuisine: 'Authentic Mexican Street Food',
        badge: 'Taco Craze',
        badgeClass: 'sticker-badge featured',
        specialTitle: 'Campus Special:',
        specialDish: 'Duo Quesabirria Taco Basket with Salsa Bar',
        img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=600&auto=format&fit=crop'
      },
      {
        name: 'Pizza Bella Mobile',
        truckId: 'pizza-bella',
        cuisine: 'Wood-Fired Pizza',
        badge: 'Wood-Fired',
        badgeClass: 'sticker-badge',
        specialTitle: 'Campus Special:',
        specialDish: 'Personal Hot Honey Pepperoni Pizza (9")',
        img: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?q=80&w=600&auto=format&fit=crop'
      },
      {
        name: 'Sweet Wheels Churros',
        truckId: 'sweet-wheels',
        cuisine: 'Warm Churros & Specialty Brews',
        badge: 'Study Fuel',
        badgeClass: 'sticker-badge hot',
        specialTitle: 'Campus Special:',
        specialDish: 'Churro Loops with Nitro Drip Cold Brew',
        img: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=600&auto=format&fit=crop'
      }
    ],
    scheduleDesc: 'Full rundown of campus music showcases, food eating challenges, and student awards.',
    schedule: [
      {
        time: '11:00 AM',
        timeClass: 'text-primary-custom',
        tag: 'Gates Open',
        title: 'Festival Kickoff & Discount Bands Issued',
        desc: 'Trucks open for early lunch. First 150 students receive free StreetFeast enamel pin and drink vouchers.'
      },
      {
        time: '1:00 PM',
        timeClass: 'text-primary-custom',
        tag: 'Live Stage',
        title: 'Battle of the Campus Indie Bands — Round 1',
        desc: 'Student indie ensembles perform 30-minute sets on the open amphitheater stage.'
      },
      {
        time: '3:30 PM',
        timeClass: 'text-secondary-custom',
        tag: 'Lawn Games',
        title: 'Cornhole Championship & Smash Burger Eating Contest',
        desc: 'Fraternity and sorority teams battle in the annual collegiate cornhole and burger sprint challenge.'
      },
      {
        time: '5:15 PM',
        timeClass: 'text-success-custom',
        tag: 'Awards',
        title: "Student Choice 'Best Campus Truck' Ceremony",
        desc: 'Student Government representatives crown the best mobile vendor with the 2026 Campus Trophy.'
      }
    ],
    venueHeading: 'North Campus Commons & Mall',
    venueDesc: 'The sprawling green lawn of North Campus Commons, bordered by historic stone halls and shaded oak trees.',
    directions: [
      {
        icon: 'bi-p-square',
        iconClass: 'text-primary-custom',
        title: 'University East Parking Garage',
        desc: 'Free weekend parking for all event attendees in the San Jacinto & 24th St parking structure.'
      },
      {
        icon: 'bi-bus-front',
        iconClass: 'text-secondary-custom',
        title: 'City Bus & Campus Shuttles',
        desc: 'MetroRapid Lines 801 and 803 stop directly at University Mall every 10 minutes.'
      },
      {
        icon: 'bi-bicycle',
        iconClass: 'text-success-custom',
        title: 'Campus B-Cycle Station',
        desc: 'Two docked bike share stations available right outside the North Commons gate.'
      }
    ],
    venueImg: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop'
  }
};

// Aliases for user-friendly routing
EVENTS_DATABASE['sunset-street-feast'] = EVENTS_DATABASE['sunset-feast'];
EVENTS_DATABASE['sunset-feast-beats'] = EVENTS_DATABASE['sunset-feast'];
EVENTS_DATABASE['midtown-taco'] = EVENTS_DATABASE['taco-rodeo'];
EVENTS_DATABASE['harborfront-night-market'] = EVENTS_DATABASE['night-market'];
EVENTS_DATABASE['university-fest'] = EVENTS_DATABASE['campus-fest'];
EVENTS_DATABASE['autumn-bite'] = EVENTS_DATABASE['campus-fest'];

/**
 * Initializes and dynamically populates event-details.html based on URL parameter ?event=...
 */
function initEventDetailsPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const eventParam = (urlParams.get('event') || '').trim().toLowerCase();

  // Pick target event or fallback to default
  const event = EVENTS_DATABASE[eventParam] || EVENTS_DATABASE['sunset-feast'];
  if (!event) return;

  // 1. Update Document Head Title & Meta
  document.title = event.metaTitle;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', event.metaDesc);

  // 2. Update Hero Section
  const categoryBadgeEl = document.getElementById('event-category-badge');
  if (categoryBadgeEl && event.categoryBadge) {
    categoryBadgeEl.className = `badge ${event.categoryBadge.class}`;
    categoryBadgeEl.textContent = event.categoryBadge.text;
  }

  const dateBadgeEl = document.getElementById('event-date-badge');
  if (dateBadgeEl) {
    dateBadgeEl.innerHTML = `<i class="bi bi-calendar-check text-primary-custom me-1"></i> ${event.dateBadge}`;
  }

  const timeBadgeEl = document.getElementById('event-time-badge');
  if (timeBadgeEl) {
    timeBadgeEl.innerHTML = `<i class="bi bi-clock text-secondary-custom me-1"></i> ${event.timeBadge}`;
  }

  const titleEl = document.getElementById('event-title');
  if (titleEl) titleEl.textContent = event.title;

  const leadEl = document.getElementById('event-lead');
  if (leadEl) leadEl.textContent = event.lead;

  const heroImgEl = document.getElementById('event-hero-img');
  if (heroImgEl) {
    heroImgEl.src = event.heroImg;
    heroImgEl.alt = event.heroImgAlt || event.title;
  }

  // 3. Update Overview & Highlights Section
  const overviewTagEl = document.getElementById('event-overview-tag');
  if (overviewTagEl) overviewTagEl.textContent = event.overviewTag;

  const overviewHeadingEl = document.getElementById('event-overview-heading');
  if (overviewHeadingEl) overviewHeadingEl.textContent = event.overviewHeading;

  const overviewDescEl = document.getElementById('event-overview-desc');
  if (overviewDescEl) overviewDescEl.textContent = event.overviewDesc;

  const highlightsContainer = document.getElementById('event-highlights-container');
  if (highlightsContainer && event.highlights) {
    highlightsContainer.innerHTML = event.highlights.map(hl => `
      <div class="col-sm-6">
        <div class="p-3 bg-surface-alt rounded-3 border h-100">
          <i class="bi ${hl.icon} ${hl.iconClass} fs-4 mb-2 d-block"></i>
          <h6 class="fw-bold mb-1">${hl.title}</h6>
          <small class="text-muted">${hl.desc}</small>
        </div>
      </div>
    `).join('');
  }

  // Quick Facts
  const quickFactsEl = document.getElementById('event-quick-facts');
  if (quickFactsEl && event.quickFacts) {
    quickFactsEl.innerHTML = event.quickFacts.map((fact, idx, arr) => `
      <li class="d-flex justify-content-between ${idx !== arr.length - 1 ? 'pb-2 border-bottom' : ''}">
        <span class="text-muted">${fact.label}</span>
        <strong class="${fact.isSuccess ? 'text-success' : ''}">${fact.value}</strong>
      </li>
    `).join('');
  }

  // 4. Update Lineup Section
  const lineupHeadingEl = document.getElementById('event-lineup-heading');
  if (lineupHeadingEl) lineupHeadingEl.textContent = event.lineupHeading;

  const lineupSubEl = document.getElementById('event-lineup-sub');
  if (lineupSubEl) lineupSubEl.textContent = event.lineupSub;

  const trucksContainer = document.getElementById('event-trucks-container');
  if (trucksContainer && event.trucks) {
    trucksContainer.innerHTML = event.trucks.map(truck => `
      <div class="col-md-6 col-lg-3">
        <div class="food-card">
          <div class="food-card-img-wrap">
            <img src="${truck.img}" alt="${truck.name}">
            <div class="food-card-badge-top"><span class="${truck.badgeClass}">${truck.badge}</span></div>
          </div>
          <div class="food-card-body">
            <h5 class="fw-bold mb-1"><a href="food-truck-details.html?truck=${truck.truckId}">${truck.name}</a></h5>
            <p class="small text-muted mb-2">${truck.cuisine}</p>
            <div class="food-dish-featured mb-2">
              <small class="text-muted d-block">${truck.specialTitle}</small>
              <strong>${truck.specialDish}</strong>
            </div>
            <a href="food-truck-details.html?truck=${truck.truckId}" class="btn btn-sm btn-brand-primary mt-auto">View Truck</a>
          </div>
        </div>
      </div>
    `).join('');
  }

  // 5. Update Timetable Section
  const scheduleSubEl = document.getElementById('event-schedule-sub');
  if (scheduleSubEl) scheduleSubEl.textContent = event.scheduleDesc;

  const scheduleContainer = document.getElementById('event-schedule-container');
  if (scheduleContainer && event.schedule) {
    scheduleContainer.innerHTML = event.schedule.map((item, idx, arr) => `
      <div class="d-flex gap-4 ${idx === 0 ? 'pb-3 border-bottom' : idx === arr.length - 1 ? 'pt-3' : 'py-3 border-bottom'}">
        <div class="text-center" style="min-width: 90px;">
          <strong class="d-block ${item.timeClass} fs-5">${item.time}</strong>
          <small class="text-muted">${item.tag}</small>
        </div>
        <div>
          <h5 class="mb-1 fw-bold">${item.title}</h5>
          <p class="small text-muted mb-0">${item.desc}</p>
        </div>
      </div>
    `).join('');
  }

  // 6. Update Venue & Parking Section
  const venueHeadingEl = document.getElementById('event-venue-heading');
  if (venueHeadingEl) venueHeadingEl.textContent = event.venueHeading;

  const venueDescEl = document.getElementById('event-venue-desc');
  if (venueDescEl) venueDescEl.textContent = event.venueDesc;

  const directionsContainer = document.getElementById('event-directions-container');
  if (directionsContainer && event.directions) {
    directionsContainer.innerHTML = event.directions.map(dir => `
      <div class="d-flex gap-3">
        <i class="bi ${dir.icon} ${dir.iconClass} fs-4"></i>
        <div>
          <strong>${dir.title}</strong>
          <p class="small text-muted mb-0">${dir.desc}</p>
        </div>
      </div>
    `).join('');
  }

  const venueImgEl = document.getElementById('event-venue-img');
  if (venueImgEl && event.venueImg) {
    venueImgEl.src = event.venueImg;
    venueImgEl.alt = `${event.venueHeading} overview map`;
  }
}

// Auto-run on DOM ready
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEventDetailsPage);
  } else {
    initEventDetailsPage();
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { EVENTS_DATABASE, initEventDetailsPage };
}

