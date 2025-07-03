# Webflow UTM Slug

A lightweight, zero-dependency script that dynamically adds the current Webflow CMS page slug as a `utm_term` parameter to your links. This allows for precise tracking of which blog posts or CMS items are driving conversions.

***

## The Problem

In Webflow, you can't dynamically use a CMS page's slug within a link on that same template page. This makes it impossible to know exactly which blog post, news article, or project a user clicked your "Contact Us" button from.

## The Solution 💡

This script solves that problem. It automatically detects the slug from the URL (e.g., the last part of `.../news/my-first-article`) and injects it as a `utm_term` into any link you designate. It's safe to install sitewide and will only modify links on pages where a slug is present in the URL.

***

## How to Use

1.  **Install the Script**
    Add the script to your Webflow project by pasting the following line into your **Project Settings** > **Custom Code** > **Footer Code**.

    ```html
    <script defer src="[https://webflow-cms-slug-injector.vercel.app/dynamic-utm.js](https://webflow-cms-slug-injector.vercel.app/dynamic-utm.js)"></script>
    ```

2.  **Add the Attribute**
    On any CMS template page, select a link you want to track. Go to the **Element Settings panel (⚙️)** and add this custom attribute:

    * **Name:** `data-utm-term`
    * **Value:** `blog-slug`

That's it! The script will now automatically append `&utm_term=[your-page-slug]` to that link's URL. You can still add any other static UTMs (`utm_source`, `utm_campaign`, etc.) directly in the Webflow link settings.

---

## Deutsch 🇩🇪

Ein leichtes Skript ohne Abhängigkeiten, das dynamisch den Slug der aktuellen Webflow CMS-Seite als `utm_term`-Parameter zu Links hinzufügt. Dies ermöglicht ein präzises Tracking, welche Blog-Posts, News-Artikel oder Projekte zu Conversions führen.

***

### Das Problem

In Webflow ist es nicht möglich, den Slug einer CMS-Seite dynamisch in einem Link auf derselben Template-Seite zu verwenden. Dadurch kann man nicht genau nachvollziehen, von welchem Beitrag aus ein Nutzer auf den "Kontakt"-Button geklickt hat.

### Die Lösung 💡

Dieses Skript löst genau dieses Problem. Es erkennt automatisch den Seiten-Slug aus der URL (z.B. der letzte Teil von `.../news/mein-erster-artikel`) und fügt ihn als `utm_term` in jeden von Ihnen bestimmten Link ein. Es kann gefahrlos auf der gesamten Website installiert werden und modifiziert nur Links auf Seiten, bei denen ein Slug in der URL vorhanden ist.

***

### Anwendung

1.  **Skript installieren**
    Fügen Sie das Skript zu Ihrem Webflow-Projekt hinzu, indem Sie die folgende Zeile in die **Projekteinstellungen** > **Eigener Code** > **Footer-Code** einfügen.

    ```html
    <script defer src="[https://webflow-cms-slug-injector.vercel.app/dynamic-utm.js](https://webflow-cms-slug-injector.vercel.app/dynamic-utm.js)"></script>
    ```

2.  **Attribut hinzufügen**
    Wählen Sie auf einer beliebigen CMS-Template-Seite einen Link aus, den Sie tracken möchten. Gehen Sie zum **Einstellungs-Panel des Elements (⚙️)** und fügen Sie dieses benutzerdefinierte Attribut hinzu:

    * **Name:** `data-utm-term`
    * **Wert:** `blog-slug`

Das ist alles! Das Skript wird nun automatisch `&utm_term=[Ihr-Seiten-Slug]` an die URL des Links anhängen. Sie können weiterhin alle anderen statischen UTM-Parameter (`utm_source`, `utm_campaign` usw.) direkt in den Link-Einstellungen von Webflow festlegen.