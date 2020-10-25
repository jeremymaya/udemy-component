# udemy-components

Author: Kyungrae Kim

Deployed App: <>

---

## Overview

This is a follow along project from [Modern React with Redux by Stephen Grider](https://www.udemy.com/course/react-redux/).

This project goes over a topic of communicating with Props. It specifically goes over three tenets of component:

* Component Nesting - A component can be shown inside of another
* Component Reusability - We want to make components that can be easily reused throughout application
* Component Configuration - We should be able to configure a component when it is created

---

## Architecture

This application uses the following dependencies:

* React
* ReactDOM
* [Faker.js](https://github.com/marak/Faker.js/)
* [Semantic UI](https://semantic-ui.com/)

---

## Getting Started

Clone this repository to your local machine:

```bash
https://github.com/jeremymaya/code-301-lab-06.git
```

Install the dependencies:

```bash
npm i
```

## Development Mode

In the project directory, run:

```bash
npm start
```

The above command runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

---

## Notes from the Course Section

### Three Tenets of Components

Component Nesting - A component can be shown inside of another
Component Reusability - We want to make components that can be easily reused throughout application
Component Configuration - We should be able to configure a component when it is created

### Getting Some Free Styling

[Semantic UI](https://semantic-ui.com/) is an open source CSS framework/library that provides free default styling for a project.

Semantic UI can be implemented by following its documentation. Another way to utilize the framework is to simply import it into the project using CDN link.

For this course, we are using <https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css>.

### Specifying Images in JSX

[Faker.js](https://github.com/marak/Faker.js/) is a open source library that automatically generates fake data for testing/demo purpose.

Add faker.js library to a project by running the following command:

```bash
npm install --save faker
```

### Extracting JSX to New Components

Creating a Reusable, Configurable Component

1. Identify the JSX that appears to be duplicated
2. What is the purpose of that block of JSX? Think of a descriptive name for what it does
3. Create a new file to house this new component - it should have the same name as the component
4. Create a new component in the new file, paste the JSX into it
5. Make the new component configurable by using React's 'props' system

`CommentDetail.js` React components are written in with upper cases

### Component Nesting

Once a React component has been extracted, it needs to be exported then imported to the index.js through **Component Nesting**:

Example of an export statement:

```javascript
export default CommentDetail
```

Example of an import statement:

```javascript
import CommentDetail from './CommentDetail';
```

Components are referenced as if they are a JSX tag (eg. `<CommentDetail />`) instead of a Javascript variable (eg. `{ CommentDetail }`).

### React's Props System

Props

* System for passing data from a **parent** component to a **child** component
* Goal is to customize or configure a child component

It is used to customize how the child component looks and behaves

### Passing and Receiving Props

Props == Properties

Child components cannot pass data back to the parent component.

There are two stage to the Props system

1. Provide information from parent to child
2. The child component consumes/uses the information

Providing props from parents to child

```javascript
<CommentDetail author="Sam" />

// author:  Name of the prop
// "Sam":   Value of the prop
```

In the corresponding React component, the provided information can be accessed through the `props` object.

### Showing Custom Children

The custom children prop can be shown by accessing `props.children`.

---

## Credits

* [Modern React with Redux by Stephen Grider](https://www.udemy.com/course/react-redux/)
* [Faker.js](https://github.com/marak/Faker.js/)
* [Semantic UI](https://semantic-ui.com/)
