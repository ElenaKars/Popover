# Coding challenge "2. EVENT"
![CI](https://github.com/ElenaKars/Popover/actions/workflows/web.yml/badge.svg)

Rules for submitting assignments:

1. **Important**: within this coding you can use any package manager
1. **Important**: Everything must be collected via Webpack (including images and styles) and laid out on Github Pages via Appveyor.
1. README.md should contain build badge and link to Github Pages
1. As a result, send the reviewer links to your GitHub projects

---

### Popovers

#### Legend

There is a wonderful Bootstrap framework, which implements quite a lot of interesting widgets using jQuery. But, as modern and trendy programmers say, "jQuery is not needed", so you need to implement the same widget in pure JS.

#### Description

This is how the widget as a whole should look like, for simplicity, we will assume that the widget should always be shown on top.

![](./pic/Popovers.png)


A popover must have a title and text. It must be centered horizontally relative to the element that caused the popover.

Don't forget to write an auto-test for DOM interaction based on Puppeteer or JSDOM (your choice).

**Hint**: A page where you can "peek" the implementation: https://getbootstrap.com/docs/4.3/components/popovers/. But we haven't gone through `translate`, `translate3d` yet, so do the positioning in px.
