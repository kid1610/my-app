
function B(props) {
    const {data} = props
    function renderData(){
        if(Object.keys(data).length > 0){
            return Object.keys(data).map((key, index) => {
                return(
                    <li key={index}>
                        {data[key]}
                    </li>
                )
            })
        }
    }
    return(
       <ul>{renderData()}
       </ul> 
    )
  };
  export default B;