# Blog

Personal writing on [oalarsen.com/blog](https://oalarsen.com/blog/). The listing starts empty on purpose: do not add dummy or invented essays.

## Add a post

1. Copy `_template.html` to a new folder: `blog/<slug>/index.html`.
2. Replace `TITLE`, `SLUG`, `DATE` (`YYYY-MM-DD`), `EXCERPT`, and the article body.
3. Add a row on `blog/index.html` inside `<ul class="post-list">`, **newest first**. Remove the "No posts yet" paragraph once the first post exists.
4. Add the post URL to:
   - `sitemap.xml`
   - `feed.xml` (Atom `<entry>`)
   - `llms.txt` and `llms-full.txt`

Keep the same header, nav, and footer as this folder's other pages (`styles.css`). Do not attach the site SPA script (`/assets/index-BhHKWj2r.js`) to blog pages; they are standalone HTML so a new post shows up without rebuilding the JS bundle.

Nav order on the rest of the site: Home · Publications · Projects · **Blog** · CV.
