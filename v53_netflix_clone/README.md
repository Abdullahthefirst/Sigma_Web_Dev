# Netflix Clone

A small, static Netflix landing-page clone made with HTML, CSS, and JavaScript. It is a front-end learning project: the sign-up forms show a preview message and do not create an account.

## Run the page

Open `index.html` in a browser. You can also open this folder in a code editor and use its local preview or Live Server extension. No build step is needed.

## Project files

- `index.html` contains the page sections and the text visitors see.
- `style.css` controls the colors, layout, and responsive styles for smaller screens.
- `script.js` handles form submissions. Both forms use the same `.signup-form` class, so one listener can handle them.
- `assets/images/` contains the background and logo. `assets/videos/` contains the muted TV preview video.

## Where to make common changes

- Change headings, FAQ answers, or links in `index.html`.
- Change colors and spacing in `style.css`. The media queries near the bottom adjust the layout for tablets and phones.
- Change the sign-up preview message in `handleSignupSubmit` in `script.js`.
- To add another sign-up form, give it the `signup-form` class and include an element with the `form-note` class inside it.

The files are kept separate so the page content, visual design, and interactions are easier to find and edit.
