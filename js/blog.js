// js/blog.js
import Storage from "./storage.js";

export function renderBlogPage() {
  const posts = Storage.getData("blogPosts") || [];

  // We expect exactly 9 posts for the 3x3 grid
  const gridPostsHTML = posts
    .slice(0, 9)
    .map(
      (post) => `
        <article class="surface rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col h-full border border-border">
            <div class="relative h-20 md:h-40 overflow-hidden">
                <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                <div class="absolute top-1 left-1 md:top-3 md:left-3 bg-white/90 dark:bg-black/90 backdrop-blur-sm text-primary px-1.5 md:px-3 py-0.5 md:py-1 rounded-full text-[8px] md:text-xs font-bold truncate max-w-[80%]">
                    ${post.category}
                </div>
            </div>
            <div class="p-2 md:p-5 flex flex-col flex-grow">
                <h3 class="text-[10px] leading-tight md:text-lg md:leading-normal font-bold text-main mb-1 md:mb-3 group-hover:text-primary transition-colors line-clamp-2 md:line-clamp-2">${post.title}</h3>
                <div class="mt-auto pt-1 md:pt-3 border-t border-border flex items-center justify-between text-[8px] md:text-sm">
                    <span class="font-medium text-main truncate w-1/2">${post.author}</span>
                    <span class="text-muted hidden md:inline-block">${post.date}</span>
                </div>
            </div>
        </article>
    `,
    )
    .join("");

  return `
        <!-- Blog Header & Featured -->
        <section class="bg-surface border-b border-border py-12 relative overflow-hidden">
            <div class="absolute inset-0 pattern-bg opacity-40"></div>
            <div class="container-custom relative z-10">
                <div class="text-center mb-12">
                    <h1 class="text-4xl font-extrabold mb-4">Food Truck Community Blog</h1>
                    <p class="text-muted max-w-xl mx-auto">Stay up to date with the latest street food trends, vendor success stories, and local event guides.</p>
                </div>
                
                <!-- Featured Article -->
                <div class="surface rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row group cursor-pointer border border-primary/20">
                    <div class="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80" alt="Featured" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                    </div>
                    <div class="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                        <div class="text-primary font-bold text-sm tracking-wider uppercase mb-2">Featured Story</div>
                        <h2 class="text-3xl font-extrabold mb-4 group-hover:text-primary transition-colors">The Future of Mobile Dining: What to Expect in 2026</h2>
                        <p class="text-muted mb-6 line-clamp-3">From AI-powered location tracking to sustainable packaging mandates, discover how the food truck industry is rapidly evolving to meet modern consumer demands.</p>
                        <div class="flex items-center gap-4 text-sm font-medium">
                            <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">ED</div>
                            <div>
                                <p class="text-main">Editorial Team</p>
                                <p class="text-muted text-xs">Sep 12, 2026 • 8 min read</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Categories & Search -->
        <section class="container-custom py-8">
            <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                <div class="flex gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0">
                    <button class="px-6 py-2 bg-primary text-white rounded-full text-sm font-bold whitespace-nowrap shadow-md">All Posts</button>
                    <button class="px-6 py-2 surface border border-border text-main hover:border-primary rounded-full text-sm font-bold whitespace-nowrap transition-colors">Trends</button>
                    <button class="px-6 py-2 surface border border-border text-main hover:border-primary rounded-full text-sm font-bold whitespace-nowrap transition-colors">Recipes</button>
                    <button class="px-6 py-2 surface border border-border text-main hover:border-primary rounded-full text-sm font-bold whitespace-nowrap transition-colors">Vendor Success</button>
                </div>
                <div class="w-full md:w-72 surface flex items-center px-4 py-2 border border-border rounded-full bg-opacity-50 focus-within:border-primary transition-colors">
                    <i class="fa-solid fa-magnifying-glass text-muted mr-3"></i>
                    <input type="text" placeholder="Search articles..." class="w-full bg-transparent focus:outline-none text-sm text-main">
                </div>
            </div>
        </section>

        <!-- 3x3 Strict Grid Section -->
        <section class="container-custom pb-20">
            <div class="mb-6 flex justify-between items-end">
                <h2 class="text-2xl font-bold">Latest Articles</h2>
            </div>
            
            <!-- EXPLICIT INSTRUCTION: 3x3 grid on ALL devices (grid-cols-3 forced) -->
            <div class="grid grid-cols-3 gap-2 md:gap-6">
                ${gridPostsHTML}
            </div>
        </section>
    `;
}
