- React は component の塊でできている。
  component: html の要素等を返す function。これを export して実行する。
- 基本的な react の形

```js
// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from "react";

/* Step 2: Define your component. Note that your
component name should start with a capital letter. */
const MyComponent = () => {
  return <h1>Hi, welcome to my site!</h1>;
};

/* Step 3: Export your component so it
can be used by other parts of your app. */
export default MyComponent;
```

- top level の html 要素が 2 つあると、実行されない(h1 と p が div で囲われていたら ok)

```js
import * as React from 'react'

const ValidComponent = () => {
  return (
    <div>
      <h1>A valid component!</h1>
      <p>This will work fine.</p>
      <p>
        Since there is only one top-level element: the div.
      </p>
    </div>
  )
}

const InvalidComponent = () => {
  return (
    <h1>This won't work.</h1>
    <p>Because there are two elements at the top level.</p>
  )
}
```

## component 内に引数を入れるパターン

- props(properties):
  react's build in future to make components dynamic

```javascript
// Defining the <Greeting> component
const Greeting = (props) => {
  return <p>Hi {props.name}!</p>;
};

export default Greeting;

////export to this file↓////
import Greeting from "../components/greeting";

// Rendering the <Greeting> component
const SayHello = () => {
  return (
    <div>
      <Greeting name="Megan" /><--pops.name
      <Greeting name="Obinna" />
      <Greeting name="Generosa" />
    </div>
  );
};
```

## <Link>

```javascript
import * as React from "react";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <main>
      <h1>Welcome to my Gatsby site!</h1>
      <Link to="/about">About</Link>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </main>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
```
