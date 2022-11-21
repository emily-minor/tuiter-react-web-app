import {useDispatch} from "react-redux";
const dispatch = useDispatch();
const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
}
return(
    <li className="list-group-item">
        <div className="row">
            <div className="col-auto">
                <img width={50}
                     className="float-end rounded-circle"
                     src={`/images/${tuit.image}`}/>
            </div>
            <div className="col-10">
                <div>
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(tuit._id)}></i>
                    )
                    }
                </div>
            </div>
        </div>
    </li>);
 export default TuitItem;