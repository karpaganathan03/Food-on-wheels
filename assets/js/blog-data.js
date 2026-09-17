/**
 * StreetFeast — Blog Data & Dynamic Article Controller
 * Provides unique editorial content, author profiles, and dynamic routing for blog-details.html
 */

const BLOG_ARTICLES = {
  'pizza-revolution': {
    id: 'pizza-revolution',
    title: 'How Craft Wood-Fired Pizza Conquered the Mobile Kitchen Scene',
    category: 'Culinary Engineering',
    categoryBadgeClass: 'bg-danger text-white',
    readTime: '6 min read',
    publishDate: 'Sep 14, 2026',
    author: {
      name: 'Elena Rostova',
      role: 'Senior Food Journalist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop'
    },
    heroImg: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1400&auto=format&fit=crop',
    heroAlt: 'Fresh artisan wood-fired pizza with blistered crust emerging from oven',
    heroCaption: 'The custom 2,800 lb clay oven aboard Pizza Bella Mobile operating at 900°F.',
    lead: 'For decades, the gospel of authentic Neapolitan pizza was chained to fixed brick foundations. Traditional pizzaiolos swore that a true wood-burning dome required tons of refractory brick, weeks of thermal conditioning, and masonry chimneys that could never survive the vibrations of highway travel.',
    sections: [
      {
        heading: '1. The Weight & Axle Dilemma',
        paragraphs: [
          'When Anthony and Sofia Rossi first pitched the idea of mounting a 3,000-pound custom clay oven into an enclosed trailer back in 2018, commercial fabricators laughed. A standard single axle would buckle under the localized point load, and the thermal shock from highway expansion joints threatened to shatter refractory cement domes into powder.',
          'The solution emerged through maritime engineering: independent dual torsion axles, reinforced steel subframes, and aerospace-grade ceramic fiber blankets capable of maintaining 900° internal heat while remaining cool to the touch on the outside trailer wall.'
        ],
        quote: {
          text: '"A 90-second bake time completely flips food truck economics. We can fire 70 individual 11-inch pizzas in an hour without any drop in stone floor temperature."',
          author: 'Sofia Rossi, Co-Founder of Pizza Bella Mobile'
        }
      },
      {
        heading: '2. Sourdough Fermentation on the Road',
        paragraphs: [
          'Baking at 900°F is unforgiving. If your dough is too wet, it steams; if it is under-fermented, the crust turns into tough cardboard. Mobile pizza trucks developed mobile proofer cabinets maintaining precise 68°F humidity levels regardless of whether the truck is parked under 100°F summer sun or chilly autumn breezes.',
          'By cold-fermenting organic heirloom flour dough balls for 48 hours prior to service, mobile pizzaiolos achieve that airy, digestible cornicione leopard-spotting that rivals the finest trattorias in Naples.'
        ]
      }
    ],
    takeaways: [
      { title: 'Speed equals survivability:', desc: 'Sub-2-minute ticket times prevent customer line fatigue at large festivals.' },
      { title: 'Insulation over raw mass:', desc: 'Modern ceramic fibers provide equal thermal retention at 40% less trailer payload.' },
      { title: 'Ingredient discipline:', desc: 'High heat requires low-moisture Fior di Latte cheese to prevent soggy crust centers.' }
    ],
    related: ['smash-burger', 'smokehouse-night-shift', 'vegan-street-food']
  },

  'smash-burger': {
    id: 'smash-burger',
    title: 'The Science of the Perfect Crispy Edge Smash Burger',
    category: 'Culinary Trends',
    categoryBadgeClass: 'bg-warning text-dark',
    readTime: '4 min read',
    publishDate: 'Sep 12, 2026',
    author: {
      name: 'Chef Derrick Vance',
      role: 'Executive Street Chef & Grill Master',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop'
    },
    heroImg: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1400&auto=format&fit=crop',
    heroAlt: 'Double smash burger with crispy lace edges, melted American cheese and pickles',
    heroCaption: 'Flat-top smash technique delivering maximum Maillard reaction caramelization.',
    lead: 'Why are food truck operators across the continent abandoning thick pub patties in favor of 500-degree flat-top smash reactions? The answer lies in thermodynamics, contact surface area, and chemical umami compounds that thick patties simply cannot replicate.',
    sections: [
      {
        heading: '1. The Maillard Reaction at 500°F',
        paragraphs: [
          'The golden, crunchy perimeter of a true smash burger is not burnt meat—it is a concentrated matrix of amino acids and reducing sugars reacting under extreme pressure against seasoned chrome steel.',
          'Using a heavy cast-iron press with parchment paper within the first 25 seconds of the meat hitting the steel locks down moisture while forcing the fat to render instantaneously into the outer crust, creating the iconic "lace edge".'
        ],
        quote: {
          text: '"If you smash after 30 seconds, you squeeze out the juice. If you smash in the first 10 seconds, you fuse the sear into the surface. It is a strict culinary physics equation."',
          author: 'Chef Derrick Vance, Burger Bus Co.'
        }
      },
      {
        heading: '2. Bun Architecture & Sauce Equilibrium',
        paragraphs: [
          'A crispy smash patty requires a pliable, pillowy vehicle. Standard brioche often contains too much sugar, burning before it warms. Toasted potato rolls brushed with clarified ghee provide the ideal steam pocket.',
          'Diced shallots smashed directly into the raw beef beef-side-up before flipping caramelize instantly in the rendered beef tallow, providing subtle sweetness that cuts through tangy smash sauce.'
        ]
      }
    ],
    takeaways: [
      { title: '80/20 Chuck-to-Brisket blend:', desc: 'Fat ratio is non-negotiable; lean beef dries out immediately on high-heat flat-tops.' },
      { title: 'Pressure in the first 20 seconds:', desc: 'Early smashing prevents internal juice evacuation while maximizing searing.' },
      { title: 'Melting mechanics:', desc: 'High-sodium American cheese acts as an emulsifier, binding the two patties into a unified bite.' }
    ],
    related: ['pizza-revolution', 'smokehouse-night-shift', 'vegan-street-food']
  },

  'smokehouse-night-shift': {
    id: 'smokehouse-night-shift',
    title: 'Night Shifts in the Smokehouse: 14 Hours with Pitmaster Carlos',
    category: 'Vendor Craft',
    categoryBadgeClass: 'bg-primary text-white',
    readTime: '7 min read',
    publishDate: 'Sep 09, 2026',
    author: {
      name: 'Carlos Gomez',
      role: 'Pitmaster & Texas Barbecue Pioneer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop'
    },
    heroImg: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1400&auto=format&fit=crop',
    heroAlt: 'Slow-smoked Texas brisket with pepper bark and deep pink smoke ring',
    heroCaption: 'Seasoned Texas post oak embers maintaining steady 225°F radiant heat through the night.',
    lead: 'While the city sleeps at 2:00 AM, food truck smokehouses are roaring. Long before the festival gates unlock or office crowds line up at noon, pitmasters endure the nocturnal vigil of managing wood embers, draft airflows, and internal collagen breakdown.',
    sections: [
      {
        heading: '1. The Anatomy of Post Oak & Clean Smoke',
        paragraphs: [
          'Real Texas barbecue cannot be faked with liquid smoke or pellet augers. Carlos Gomez burns seasoned post oak split logs that have cured for 9 months in the Hill Country sun.',
          'The goal is thin, faint blue smoke—never thick white billowing clouds. White smoke imparts bitter creosote; blue smoke signifies complete combustion that leaves sweet, peppery aromatics deep inside the prime beef brisket.'
        ],
        quote: {
          text: '"Barbecue is patience made edible. You cannot rush collagen conversion at 195 degrees. When that meat feels like a warm stick of butter, the truck is ready to roll."',
          author: 'Carlos Gomez, Austin Smoke Works'
        }
      },
      {
        heading: '2. Rest Time & Mobile Holding Tanks',
        paragraphs: [
          'The secret difference between tough barbecue and melt-in-your-mouth brisket is the 4-hour warm hold. When the meat comes off the pit at 8:00 AM, it is wrapped in butcher paper and transferred to calibrated mobile insulated cambros held at 150°F.',
          'During this holding period, muscle fibers relax and reabsorb liquefied gelatin, ensuring every slice carved on the truck counter is glistening with pure juices.'
        ]
      }
    ],
    takeaways: [
      { title: 'Thin Blue Smoke only:', desc: 'Careful damper regulation prevents acidic creosote buildup on the bark.' },
      { title: 'The butcher paper wrap:', desc: 'Peach butcher paper breathes enough to protect the crunch of the bark while pushing past the temperature stall.' },
      { title: 'Rest is mandatory:', desc: 'Never slice brisket straight off the pit; a 3 to 5 hour hold at 150°F is essential.' }
    ],
    related: ['pizza-revolution', 'smash-burger', 'vegan-street-food']
  },

  'vegan-street-food': {
    id: 'vegan-street-food',
    title: 'How Vegan Street Food Conquered Food Truck Rodeos',
    category: 'Plant-Based Innovation',
    categoryBadgeClass: 'bg-success text-white',
    readTime: '5 min read',
    publishDate: 'Sep 06, 2026',
    author: {
      name: 'Aliyah Green',
      role: 'Plant-Based Culinary Writer',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop'
    },
    heroImg: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1400&auto=format&fit=crop',
    heroAlt: 'Vibrant plant-based street food taco platter with avocado crema and pickled radish',
    heroCaption: 'Jackfruit carnitas and housemade cashew queso drawing omnivore crowds at urban parks.',
    lead: 'Gone are the days when plant-based options at food truck rodeos were limited to bland veggie patties and soggy french fries. Today, vegan mobile culinary entrepreneurs are cooking up some of the most innovative, flavorful, and award-winning comfort food on asphalt.',
    sections: [
      {
        heading: '1. Umami Engineering: Beyond Ultra-Processed Meat',
        paragraphs: [
          'Rather than relying solely on packaged freezer substitutes, pioneering plant-based food trucks build deep flavor from scratch: braising green jackfruit in chipotle-adobo stock, pressing seasoned oyster mushroom clusters on flat-tops, and fermenting sunflower seed cheese.',
          'The result is food that appeals not just to vegans, but to devoted carnivores looking for vibrant, satisfying flavor bombs without heavy sluggishness.'
        ],
        quote: {
          text: '"Over 70% of our daily customers at the brewery taprooms are non-vegans. When you make food that tastes craveable and indulgent, the label disappears."',
          author: 'Aliyah Green, Food Culture Critic'
        }
      },
      {
        heading: '2. The Inclusive Festival Advantage',
        paragraphs: [
          'Event organizers now explicitly prioritize vegan trucks when curating festival lineups. A corporate gathering or wedding booking will stall if 15% of attendees have dietary restrictions without great meal options.',
          'Mobile chefs who master dairy-free sauces, dedicated nut allergen protocols, and naturally gluten-free masa tortillas enjoy consistently higher booking win rates and customer loyalty.'
        ]
      }
    ],
    takeaways: [
      { title: 'Scratch-made textures:', desc: 'Oyster mushrooms, lentils, and jackfruit offer authentic chew and superior flavor absorption.' },
      { title: 'The power of acid and crunch:', desc: 'House pickles, pickled red onions, and lime slaw elevate rich plant-based fats.' },
      { title: 'Broad demographic appeal:', desc: 'Positioning as "flavor-forward street food" attracts the widest festival audience.' }
    ],
    related: ['pizza-revolution', 'smash-burger', 'smokehouse-night-shift']
  }
};

/**
 * Dynamic Article Renderer for blog-details.html
 */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // Only run on blog-details.html
  if (!document.getElementById('blogDetailTitle')) return;

  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get('post') || 'pizza-revolution';
  const article = BLOG_ARTICLES[postId] || BLOG_ARTICLES['pizza-revolution'];

  // Update Page Title and Meta Tags
  document.title = `${article.title} — StreetFeast Blog`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', article.lead.substring(0, 160) + '...');

  // 1. Header Elements
  const titleEl = document.getElementById('blogDetailTitle');
  if (titleEl) titleEl.textContent = article.title;

  const catBadgeEl = document.getElementById('blogDetailCategory');
  if (catBadgeEl) {
    catBadgeEl.className = `badge ${article.categoryBadgeClass}`;
    catBadgeEl.textContent = article.category;
  }

  const authorNameEl = document.getElementById('blogDetailAuthorName');
  if (authorNameEl) authorNameEl.textContent = `Written by ${article.author.name}`;

  const authorMetaEl = document.getElementById('blogDetailAuthorMeta');
  if (authorMetaEl) {
    authorMetaEl.textContent = `${article.author.role} • Published ${article.publishDate} • ${article.readTime}`;
  }

  const authorImgEl = document.getElementById('blogDetailAuthorImg');
  if (authorImgEl) {
    authorImgEl.src = article.author.avatar;
    authorImgEl.alt = article.author.name;
  }

  // 2. Hero Image
  const heroImgEl = document.getElementById('blogDetailHeroImg');
  if (heroImgEl) {
    heroImgEl.src = article.heroImg;
    heroImgEl.alt = article.heroAlt;
  }

  const heroCapEl = document.getElementById('blogDetailHeroCaption');
  if (heroCapEl) heroCapEl.textContent = article.heroCaption;

  // 3. Lead & Article Sections
  const leadEl = document.getElementById('blogDetailLead');
  if (leadEl) leadEl.textContent = article.lead;

  const contentEl = document.getElementById('blogDetailContent');
  if (contentEl) {
    let sectionsHtml = '';
    article.sections.forEach(sec => {
      sectionsHtml += `<h3 class="fw-bold mt-5 mb-3">${sec.heading}</h3>`;
      sec.paragraphs.forEach(p => {
        sectionsHtml += `<p class="text-muted">${p}</p>`;
      });
      if (sec.quote) {
        sectionsHtml += `
          <div class="p-4 my-4 bg-surface-alt rounded-4 border-start border-4 border-primary">
            <p class="fst-italic text-heading fs-5 mb-1">${sec.quote.text}</p>
            <small class="fw-bold text-primary-custom">— ${sec.quote.author}</small>
          </div>
        `;
      }
    });
    contentEl.innerHTML = sectionsHtml;
  }

  // 4. Key Takeaways
  const takeawaysEl = document.getElementById('blogDetailTakeaways');
  if (takeawaysEl && article.takeaways) {
    let takeawaysHtml = '';
    article.takeaways.forEach(item => {
      takeawaysHtml += `<li><strong>${item.title}</strong> ${item.desc}</li>`;
    });
    takeawaysEl.innerHTML = takeawaysHtml;
  }

  // 5. Related Articles Grid
  const relatedEl = document.getElementById('blogDetailRelated');
  if (relatedEl && article.related) {
    let relatedHtml = '';
    article.related.forEach(relId => {
      const relArticle = BLOG_ARTICLES[relId];
      if (relArticle) {
        relatedHtml += `
          <div class="col-md-6 col-lg-4">
            <div class="p-3 bg-surface rounded-4 border shadow-sm h-100 d-flex flex-column">
              <div class="rounded-3 overflow-hidden mb-3">
                <img src="${relArticle.heroImg}" alt="${relArticle.title}" class="w-100 object-fit-cover" style="height: 160px;">
              </div>
              <span class="badge ${relArticle.categoryBadgeClass} align-self-start mb-2">${relArticle.category}</span>
              <h5 class="fw-bold mb-1">
                <a href="blog-details.html?post=${relArticle.id}" class="text-heading">${relArticle.title}</a>
              </h5>
              <p class="small text-muted mb-3 flex-grow-1">${relArticle.lead.substring(0, 85)}...</p>
              <div class="d-flex justify-content-between align-items-center pt-2 border-top small text-muted">
                <span>${relArticle.readTime}</span>
                <a href="blog-details.html?post=${relArticle.id}" class="fw-bold text-primary-custom">Read Article →</a>
              </div>
            </div>
          </div>
        `;
      }
    });
    relatedEl.innerHTML = relatedHtml;
  }
});
