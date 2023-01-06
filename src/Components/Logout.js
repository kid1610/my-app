function LogoutButton(props) {
    return (
      <>
      <h1>Welcome!</h1>
      <button onClick={props.onClick}>
        Log out
      </button> 
      </>  
    );
}
export default LogoutButton;