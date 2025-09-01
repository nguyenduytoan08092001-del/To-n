import ModelCreateUser from "./ModelCreateUser";
import "./ManageUser.scss"

const ManageUser = (props) => {
    return (
        <div className="manage-user-container">
            <div className="title">
                  Manage User
            </div>
            <div className="users-content">
                <div>
                    <button>Add new users</button>
                </div>
                <div>
                    Table User
                </div>
                <ModelCreateUser/>
            </div>
           
        </div>
    )
}

export default ManageUser;