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

    const handleAddRow = (newRow) => {
        setRows((prevRows) => [...prevRows, newRow]);
    }
    const handleDeleteRow = (index) => {
        setRows((prevRows) => prevRows.filter((_, i) => i !== index));
    }
    const handleEditRow = (index, updatedRow) => {
        setRows((prevRows) => prevRows.map((row, i) => (i === index ? updatedRow : row)));
    }
    const handleRowClick = (index) => {
        const selectedRow = rows[index];
        // Handle row click event, e.g., show details or edit
        console.log("Row clicked:", selectedRow);
    }
    const handleSubmit = (newRow) => {
        setRows((prevRows) => [...prevRows, newRow]);
        setModalOpen(false);
    };

    return ( 
        <div>
            <button className={styles.button} onClick={handleClick}>Home</button>
            <h1 className={styles.task}>Tasks</h1>
            <button className={styles.button} onClick={() => setModalOpen(true)}>Create Task</button>
            {modalOpen && <Modal closeModal={() => setModalOpen(false)} />}
            <div className={styles.tablewrapper}>
                <table className={styles.table} rows={rows} onRowClick={handleRowClick} onAddRow={handleAddRow} onDeleteRow={handleDeleteRow} onEditRow={handleEditRow}>
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