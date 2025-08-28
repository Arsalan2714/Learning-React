const TodoItems = ({id, TodoText, TodoDate}) => {
    return   <div className="container text-center">
        <div class="row">
          <div class="col-5 text-truncate">
            {" "}
           
            {TodoText}
          
          </div>
          <div class="col-3">
            {TodoDate}
          </div>
          <div class="col-2">
            <Butt />
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>

        <div class="row">
         
        </div>
        </div>
}
export default TodoItems