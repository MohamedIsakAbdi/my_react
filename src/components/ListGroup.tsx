



function ListGroup (){
    let items = [
        'leicester',
        'london',
        'manchester',
        'halifax'
       
    ];
   
    // items = [];

    // const Message = items.length === 0 ? <p>no item found</p> : null
    // const getMessage = () => {
    //     return ;
    //     // items.length === 0 ? <p>no item found</p> : null;
    // }




    // if (items.length === 0)
    // return <><h1>List</h1><p>no item found</p></>
    return (       
    <>
    <h1>List</h1>
    
        {/* {items.length === 0 ? <p>no item found</p> : null} */}
        {items.length === 0 && <p>no item found</p>}
        <ul className ="list-group">
        {/* {items.map((item) => <li>{item}</li>)} */}
        {items.map((item , index) =>  
        <li className="list-group-item" key={item} onClick={() => console.log(item + 'clicked' + index)}>{item}</li>)}
    {/* <li className ="list-group-item">An item</li>
    <li className ="list-group-item">A second item</li>
    <li className ="list-group-item">A third item</li>
    <li className ="list-group-item">A fourth item</li>
    <li className ="list-group-item">And a fifth one</li> */}
</ul>
</>
 );}
export default ListGroup; 