// const Wrapper = (props) => {
//   return <div className={props.class}>{props.children}</div>;
// };

const Wrapper = (WrappedComopenent, className) => {
  return (props) => {
    return (
      <div className={className}>
        <WrappedComopenent {...props} />
      </div>
    );
  };
};

export default Wrapper;
