import React, { useState } from "react";
import './Displayinfor.scss'

const Displayinfor = (props) => {
    const { listUsers } = props;
    const [isShowHideListUser, setShowHideListUser] = useState(true)
    const hanldeShowhideListUser = () => {
        setShowHideListUser(!isShowHideListUser)
    }

    
        return (
            <div className="display-infor-container">
            <div>
                    <span onClick={() => hanldeShowhideListUser()}>
                    {isShowHideListUser===true? "Hide List User": "Show List User"}
                    </span>     
             </div>
                {isShowHideListUser &&
                    <>
                        {listUsers.map((user,index) => {
                            return (
                                <div key={user.id} className={+user.age > 35 ? "green" : "red"} >
                                    <div>My name's {user.name} </div>
                                    <div>My age's {user.age} </div>
                                    <div>
                                        <button onClick={()=>props.hanldeDeleteUser(user.id)}>Delete</button>
                                    </div>
                                    <hr />
                                </div>
                            )
                        })}
                 </>
                }
            </div>
        )
}
export default Displayinfor;