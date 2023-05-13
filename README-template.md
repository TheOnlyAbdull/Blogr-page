# Frontend Mentor - Blogr landing page solution

This is a solution to the [Blogr landing page challenge on Frontend Mentor](https://theonlyabdull.github.io/Blogr-page/). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./images/blogr%20screenshot.png)


### Links

- Solution URL: [Add solution URL here](https://theonlyabdull.github.io/Blogr-page/)
- Live Site URL: [Add live site URL here](https://github.com/TheOnlyAbdull/Blogr-page.git)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Es6 Javascript
- Flexbox
- CSS Grid



### What I learned

I leant how to implement a functioning dropdown menu with javascript, and improved on my css and responsive design skills

To see how you can add code snippets, see below:

```html
    <li class="drop-down">
        <div><span class="link">Product</span><span class="up-arrow"><img src="./images/icon-arrow-light.svg" alt="^"></span></div>
        <div class="drop-down-content">
            <a href="">Contact</a><a href="">Newsletter</a><a href="">LinkedIn</a>
        </div>
    </li>
```

```css
    nav.navigate.show-nav{
        top: 20%;
    }
    nav .nav-ul.display-nav{
        display: block;
    }
```

```js

//For each nav dropdown
dropDowns.forEach(dropDown => {
  const dropContent = dropDown.querySelector('.drop-down-content');

// Add click event listener to the dropdown to each nav
  dropDown.addEventListener('click', () => {
      dropContent.classList.toggle('show-dropdown');
  });

  // Add click event listener to document, to remove dropdown
  document.addEventListener('click', (event) => {
      if (!dropDown.contains(event.target)) {
          dropContent.classList.remove('show-dropdown');
      }
  });
});
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**


### Useful resources

- [Example resource 1](https://www.openAI) - This helped me with my research and writing clean codes.


## Author

- Website - [Add your name here](https://theonlyabdull.github.io/Portfolio-v1/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/theonlyabdull)
- Twitter - [@yourusername](https://www.twitter.com/theonlyabdull)

