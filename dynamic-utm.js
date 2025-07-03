// Wait for the page to load completely.
document.addEventListener("DOMContentLoaded", function() {

  // --- Step 1: Get the page slug from the last part of the URL ---
  const pathParts = window.location.pathname.split('/').filter(part => part);
  const slug = pathParts.length > 0 ? pathParts[pathParts.length - 1] : '';

  // If no slug is found in the URL (e.g., on the homepage), stop the script.
  if (!slug) {
    console.log("UTM Script: No slug found in URL. Script will not run.");
    return;
  }

  console.log(`UTM Script: Detected slug "${slug}"`);

  // --- Step 2: Find all links that need the dynamic slug ---
  const linksToUpdate = document.querySelectorAll('a[data-utm-term="blog-slug"]');
  console.log(`Found ${linksToUpdate.length} links to update with the slug.`);

  // --- Step 3: Add the slug as 'utm_term' to each link ---
  linksToUpdate.forEach(link => {
    try {
      const url = new URL(link.href);
      url.searchParams.set('utm_term', slug);
      link.href = url.toString();
      console.log(`Updated link: ${link.href}`);
    } catch (error) {
      console.error("Failed to process link:", link, error);
    }
  });
});