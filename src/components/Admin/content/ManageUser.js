import ModelCreateUser from "./ModelCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiService";
import ModelUpdateUser from "./ModelUpdateUser";
import ModelViewUser from "./ModelViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
const ManageUser = (props) => {
  const [showModalCreateUser, setshowModalCreateUser] = useState(false);
  const [ShowModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [ShowModalViewUser, setShowModalViewUser] = useState(false);
  const [showModalDeleteUser, setshowModalDeleteUser]=useState(false)
  const [dataUpdate, setdataUpdate] = useState({})
  const [dataDelete, setdataDelete] = useState({});
  const [listUsers, setlistUsers] = useState([]);
  useEffect(() => {
    fetchListUsers();
  }, []);
  const fetchListUsers = async () => {
    let res = await getAllUsers();
    if (res.EC === 0) {
      setlistUsers(res.DT);
    }
  };
  const hanldeClickBtnUpdate = (user) => {
    setShowModalUpdateUser(true);
    setdataUpdate(user)
  };
  const hanldeClickBtnView = (user) => {
    setShowModalViewUser(true);
    setdataUpdate(user);
  }
  const resetUpdateData = () => {
    setdataUpdate({})
  }
  const hanldeClickBtnDelete = (user) => {
    setshowModalDeleteUser(true);
    setdataDelete(user)
  }
  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="users-content">
        <div className="btn-add-new">
          <button
            className="btn btn-primary"
            onClick={() => setshowModalCreateUser(true)}
          >
            {" "}
            <FcPlus />
            Add new users
          </button>
        </div>
        <div className="table-users-container">
          <TableUser
            listUsers={listUsers}
            hanldeClickBtnUpdate={hanldeClickBtnUpdate}
            hanldeClickBtnView={hanldeClickBtnView}
            hanldeClickBtnDelete={hanldeClickBtnDelete}
          />
        </div>
        <ModelCreateUser
          show={showModalCreateUser}
          setShow={setshowModalCreateUser}
          fetchListUsers={fetchListUsers}
        />
        <ModelUpdateUser
          show={ShowModalUpdateUser}
          setShow={setShowModalUpdateUser}
          dataUpdate={dataUpdate}
          fetchListUsers={fetchListUsers}
          resetUpdateData={resetUpdateData}
        />
        <ModelViewUser
          show={ShowModalViewUser}
          setShow={setShowModalViewUser}
          dataUpdate={dataUpdate}
          fetchListUsers={fetchListUsers}
          resetUpdateData={resetUpdateData}
        />
        <ModalDeleteUser
          show={showModalDeleteUser}
          setShow={setshowModalDeleteUser}
          dataDelete={dataDelete}
          fetchListUsers={fetchListUsers}
        />
      </div>
    </div>
  );
};

export default ManageUser;
