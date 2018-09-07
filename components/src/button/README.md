```js
const Link = ({ to, children, ...extraProps }) => (
  <a href={to} {...extraProps} >
    {children}
  </a>
);

<>
  <Button>리디북스</Button><br />
  <Button color="blue">리디북스</Button><br />
  <Button outline={true}>리디북스</Button><br />
  <Button thickBorderWidth={true}>리디북스</Button><br />
  <Button size="large">리디북스</Button><br />
  <Button color="blue" onClick={() => alert('Hey')}>리디북스 (클릭)</Button><br />
  <Button color="blue" spinner={true}>Spinning</Button><br />
  <Button component="a" href="https://select.ridibooks.com">Go to RIDI Select</Button><br />
  <Button component={Link} to="https://ridibooks.com">Customized Wrapper</Button>
</>
```
