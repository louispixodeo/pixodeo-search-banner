This is a component that puts a search bar along with optional headline and subhead text in a banner above the main topic list navigation of a Discourse community.

By default this banner appears on all top-level topic pages (latest/new/unread/top/categories... anything in the `top menu` site setting) but it can also be set to only display on a community's homepage.

![screenshot](https://user-images.githubusercontent.com/5862206/214549198-419cb28d-efea-43a3-a273-9fd9617de030.png)

### Available settings

- Set the headline and subhead text
- Show the banner on all top-level topic pages (default), or just the homepage
- Set a background image

### Custom styling

The HTML element gets a class named `.display-search-banner` wherever this banner appears, and the banner itself is wrapped with the `.custom-search-banner` class, so with some CSS you should be able to customize the appearance of this banner however you see fit.
