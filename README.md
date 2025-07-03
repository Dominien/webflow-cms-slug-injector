# Webflow UTM Slug

A lightweight, zero-dependency script that dynamically adds the current Webflow CMS page slug as a `utm_term` parameter to your links. This allows for precise tracking of which blog posts or CMS items are driving conversions.

***

## The Problem

In Webflow, you can't dynamically use a CMS page's slug within a link on that same template page. This makes it impossible to know exactly which blog post a user clicked your "Contact Us" button from, as the `utm_term` would have to be the same for all posts.

## The Solution 💡

This script solves that problem. It automatically detects the page slug from the URL and injects it as a `utm_term` into any link you designate. It's safe to install sitewide, as it only activates on pages that live under the `/blog/` path.

***

## How to Use

1.  **Install the Script**
    Add the script to your Webflow project by pasting the following line into your **Project Settings** > **Custom Code** > **Footer Code**.

    ```html
    <script defer src="[https://webflow-cms-slug-injector.vercel.app/dynamic-utm.js](https://webflow-cms-slug-injector.vercel.app/dynamic-utm.js)"></script>
    ```

2.  **Add the Attribute**
    On your Blog Post template page, select any link you want to track. Go to the **Element Settings panel (⚙️)** and add this custom attribute:

    * **Name:** `data-utm-term`
    * **Value:** `blog-slug`

That's it! The script will now automatically append `&utm_term=[your-post-slug]` to that link's URL. You can still add any other static UTMs (`utm_source`, `utm_campaign`, etc.) directly in the Webflow link settings.