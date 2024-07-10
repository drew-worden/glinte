<div align="center">
        <img src="./static/hero.svg"/>
        <br/>
        <br/>
        <p>Beautifully crafted and customizable Svelte components for the simple, modern, web application.</p>
</div>
<div align="center">
    <img alt="Static Badge" src="https://img.shields.io/badge/author-Drew_Worden-blue?style=for-the-badge&labelColor=333&color=111">
    <img alt="GitHub License" src="https://img.shields.io/github/license/drew-worden/glinte?style=for-the-badge&labelColor=333&color=111">
    <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/drew-worden/glinte?style=for-the-badge&labelColor=333&color=111">
    <img alt="NPM Downloads" src="https://img.shields.io/npm/dw/glinte?style=for-the-badge&labelColor=333&color=111">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/glinte?style=for-the-badge&labelColor=333&color=111">
</div>

# Introduction

Glinte is a component library for Svelte and comes out of the box with strong opinions on how user interfaces should be created. There are few principles that were kept in mind while Glinte was/is being developed.

**1. Use as Few Dependencies as Possible**

 While it may be against the trend of web programming in general Glinte is built without standard dependencies that you might find in other projects. For example, all the styles are done in vanilla CSS and don't require pre-processing. You are free to add Tailwind or other CSS libraries if you wish, but Glinte does not include them out of the box in an effort to keep the library as lightweight and library agnostic as possible.

**2. Blackboard Themed**

Glinte follows a blackboard theme with greys, whites, and blacks. There are hints of color to bring emphasis to errors, warnings, success messages, and highlighting, but the focus is on a minimal monochrome aesthetic to give the user a break from the rainbow ocean that can be found on many apps today.

**3. Simplicity over Functionality**

It may seem controversial at first, but the goal is not to remove functionality, just allocate it more optimally across the interface. Users should get an immediate sense of what to click on to do a specific action, padding and margin should layout the content uniformly, pages should have clear heirarchy, and sections should be well defined.

**4. Constant Snappy Feedback**

Components are designed with the intent of how the user will be interacting with them. Clickables have hover and active events, elements animate from one state to the next, interactions should be fluid and immediate. Animations that have long running times or delays make the user immpatient. Components should be animated, but not at the expense of the user's time.

**5. Sensible Defaults**

Component properties, styles, and interaction methods should implement sensible defaults. Essentially if a random user is asked to interact with a component or describe how they imagine a component works, the most common answer should be the default behavior. Again this is to allow users to move fluidly through the interface without impediance or annoyance.

**6. Don't Impose a New Paradiamn on the Developer**

Glinte is Svelte component library. Its sole purpose is to make building feature rich user interfaces faster. The component library shouldn't restrict the developer from using other features of Svelte or change the fundamentals on how component behavior works. It should be easier to write the rest of your Svelte application with Glinte, not require extra effort and a nice walk through integration hell.

**7. Ship Less Code**

Glinte strives to only include the absolute nessecary amount of functionality possible. Svelte is all about optimizing how much code you ship to the browser and Glinte intends to respect this principle.

**8. Encourage Depth**

Flat user interfaces are a common trend in the web space that Glinte doesn't follow. Drop shadow is used extensively to give a 3D effect, especially on mouse interactions.

> Glinte is admittly not for every project based on these principles and opinions. Please evaluate your project's requirements before deciding to use Glinte.
