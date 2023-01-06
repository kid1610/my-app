
function A1(props) {
    return (
      <div>
        <h2>{props.data.name}</h2>
        <p>{props.data.username}</p>
        <p>{props.data.email}</p>
        <p>{props.data.address} </p>
        <p>{props.data.phone}</p>
        <p>{props.data.website}</p>
        <p>{props.data.company}  </p>
      </div>
    );
  };
  export default A1;