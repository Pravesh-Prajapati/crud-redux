import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteData,  UpdateData } from '../../Redux/Actions/ContactActions'
import "./ShowContact.css"

function ShowContact() {
    let dispatch = useDispatch()
    let UpdateDispatch =useDispatch()
    let [SingleContact, setSingleContact] = useState({})
    let [modal, setmodal] = useState(false)
    const [pos, setpos] = useState("")
    let GetContact = useSelector((state) => {
        return state.KeyData.data
    })
    // console.log(GetContact);
    let updatedata = (pos) => {
        setpos(pos)
        let SingleData = GetContact.filter((val, i) => {
            if (i == pos) {
                return val
            }
        })
        // console.log(SingleData[0]);
        setSingleContact(SingleData[0])
    }
    // console.log(SingleContact);

    let editinput = (e) => {
        let { name, value } = e.target
        setSingleContact({ ...SingleContact, [name]: value })
    }
    // console.log(SingleContact);

    let save = (e) => {
        e.preventDefault()
        dispatch(UpdateData(SingleContact,pos))
        //    console.log(SingleContact);
    }

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <table align='center' border={1}>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                    {
                        GetContact.map((val, i) => {
                            return (
                                <tr key={i}>
                                    <td>{val.name}</td>
                                    <td>{val.email}</td>
                                    <td>
                                        <button onClick={() => { dispatch(DeleteData(i)) }}>Delete</button>
                                        <button onClick={() => { setmodal(!modal), updatedata(i) }}>Update</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
            <div>
                <div className="modal">
                    <div className={`${modal ? "overlay" : "overlay-none"}`} onClick={() => { setmodal(!modal) }}></div>
                    {modal &&
                        <div className='modals'>
                            <form action="" method='post' onSubmit={(e) => { save(e) ,setmodal(!modal) }}>
                                <div className='input-detail'>
                                    <div className='name-sec'>
                                        <h1>Name</h1>
                                        <input type="text" name='name' value={SingleContact.name ? SingleContact.name : ""} className='name' onChange={(e) => { editinput(e) }} />
                                    </div>
                                    <div className='email-sec'>
                                        <h1>Email</h1>
                                        <input type="text" name='email' value={SingleContact.email ? SingleContact.email : ""} className='email' onChange={(e) => { editinput(e) }} />
                                    </div>
                                    <div className='email-sec'>
                                        {/* <input type="submit"  className='btn'  onClick={() => { setmodal(!modal) }}   /> */}
                                        <input type="submit" className='btn' />
                                    </div>
                                </div>
                            </form>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default ShowContact