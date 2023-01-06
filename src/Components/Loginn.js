function LoginButton(props) {
    return (
      <>
      <h1>Please log in</h1>
      <button onClick={props.onClick}>
        Log in
      </button> 
      </>
    );
}
export default  LoginButton; 