// Wait for the page to load completely.
document.addEventListener("DOMContentLoaded", function() {

  // --- Step 1: Check if we are on a blog page and get the slug ---
  const pathArray = window.location.pathname.split('/');
  const blogIndex = pathArray.indexOf('blog');
  let blogSlug = '';

  // Find the slug that comes after "/blog/".
  if (blogIndex !== -1 && pathArray.length > blogIndex + 1) {
    blogSlug = pathArray[blogIndex + 1];
  }

  // If we are not on a blog post page (no slug), do nothing.
  if (!blogSlug) {
    console.log("Not a blog post page. UTM script will not run.");
    return; 
  }

  console.log(`Blog Post detected! Slug: "${blogSlug}"`);

  // --- Step 2: Find all links that need the dynamic slug ---
  const linksToUpdate = document.querySelectorAll('a[data-utm-term="blog-slug"]');
  console.log(`Found ${linksToUpdate.length} links to update with the slug.`);

  // --- Step 3: Add the blog slug as 'utm_term' to each link ---
  linksToUpdate.forEach(link => {
    try {
      const url = new URL(link.href);
      url.searchParams.set('utm_term', blogSlug);
      link.href = url.toString();
      console.log(`Updated link: ${link.href}`);
    } catch (error) {
      console.error("Failed to process link:", link, error);
    }
  });
});
