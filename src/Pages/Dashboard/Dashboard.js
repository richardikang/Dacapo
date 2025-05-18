import styles from "./Dashboard.module.css";
import { Modal } from "../../Components/Modal";

import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Dashboard () {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/home");
    };

    const [modalOpen, setModalOpen] = useState(false);
    const[rows, setRows] = useState([
        {title: "", date: "", submitBy: ""},
    ]);

    const [rowToEdit, setRowToEdit] = useState(null);

    const handleDeleteRow = (index) => {
        setRows(rows.filter((_, i) => i !== index));
    };

    const handleEditRow = (index) => {
       setRowToEdit(index);

        setModalOpen(true);
    };

    const handleSubmit = (newRow) => {
       rowToEdit === null
       ? setRows([...rows, newRow])
       : setRows(
            rows.map((currRow, index) => {
                if (index !== rowToEdit) return currRow;
            
                return newRow;
            })
       );
    };

    return ( 
        <div>
            <button className={styles.button} onClick={handleClick}>Home</button>
            <h1 className={styles.task}>Tasks</h1>
            <button className={styles.button} onClick={() => setModalOpen(true)}>Create Task</button>
            {modalOpen && (
                <Modal closeModal={() =>{
                    setModalOpen(false);
                    setRowToEdit(null);
                }}
                onSubmit={handleSubmit} 
                defaultValues={rowToEdit !== null ? rows[rowToEdit] : null}
                
                 />
                 )}
            <div className={styles.tablewrapper}>
                <table className={styles.table} rows={rows}  
                deleteRow={handleDeleteRow} 
                editRow={handleEditRow} 
                >
                    <thead>
                        <th className={styles.title}>Title</th >
                        <th>Date Posted</th >
                        <th>Submit By</th >
                    </thead>
                    <tbody>
                        <tr></tr>
                    </tbody>
                </table>
            </div>
        </div>
     );
}

export default Dashboard;