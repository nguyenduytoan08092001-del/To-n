import React, { useState } from "react";
import AddUserinfor from "./AddUserinfor";
import Displayinfor from "./Displayinfor";
 

// class Mycomponent extends React.Component{
//     state = {
//         listUsers: [
//             { id: 1, name: 'Nguyễn Duy Lãnh', age: '60' },
//             { id: 2, name: 'Nguyễn Thị Ra', age: '55' },
//             { id: 3, name: 'Nguyễn Thị Thùy Linh', age: '31' },
//             { id: 4, name: 'Nguyễn Duy Toàn', age: '24' },
//         ]
//     }
//     hanldeAddNewUser = (userobj) => {
//         this.setState({
//             listUsers:[...this.state.listUsers, userobj]
//         })
//     }
//     hanldeDeleteUser = (userID) => {
//         let listUserClone = this.state.listUsers;
//         listUserClone = listUserClone.filter(item => item.id !== userID);
//         this.setState({
//             listUsers: listUserClone
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <AddUserinfor
//                     hanldeAddNewUser={this.hanldeAddNewUser}
                    
//                 />
//                 <br></br>
//                 <Displayinfor
//                     listUsers={this.state.listUsers}
//                     hanldeDeleteUser={this.hanldeDeleteUser} />
//             </div>
//         )
//     }
// }
const Mycomponent = (props) => {
    const [listUsers, setlistUsers] = useState(
         [
            { id: 1, name: 'Nguyễn Duy Lãnh', age: '60' },
            { id: 2, name: 'Nguyễn Thị Ra', age: '55' },
            { id: 3, name: 'Nguyễn Thị Thùy Linh', age: '31' },
            { id: 4, name: 'Nguyễn Duy Toàn', age: '24' },
        ]
    )
    const hanldeAddNewUser = (userobj) => {
       setlistUsers([userobj, ...listUsers])
    }
    const hanldeDeleteUser = (userID) => {
        let listUserClone = listUsers;
        listUserClone = listUserClone.filter(item => item.id !== userID);
        setlistUsers( listUserClone)
    }
    return (
            <>
                <AddUserinfor
                    hanldeAddNewUser={hanldeAddNewUser}
                />
                <br></br>
                <Displayinfor
                    listUsers={listUsers}
                    hanldeDeleteUser={hanldeDeleteUser} />
            </>
    )
}
export default Mycomponent;