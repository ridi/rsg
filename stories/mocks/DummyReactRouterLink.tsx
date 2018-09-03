export const DummyReactRouterLink = (props) => {
  const { to, children, ...extraProps } = props;
  return (
    <a href={to} {...extraProps} >
      {children}
    </a>
  );
};
