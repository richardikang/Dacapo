import styles from "./Task.module.css";
import  { Modal } from "../../Components/Modal";

import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";


function Task () {
    const navigate = useNavigate();

    const [modalOpen, setModalOpen] = useState(false);

    const[rows, setRows] = useState([
        {title: "", date: "", submitBy: "", task: ""},
    ]);

    const [rowToEdit, setRowToEdit] = useState(null);
  

    const handleDeleteRow = (index) => {
        setRows(rows.filter((_, i) => i !== index));
    };

    const handleEditRow = (index) => {
       setRowToEdit(index);

        setModalOpen(true);
    };

    const handleSubmit = useCallback((newRow) => {
       rowToEdit === null
       ? setRows([...rows, newRow])
       : setRows(
            rows.map((currRow, index) => {
                if (index !== rowToEdit) return currRow;
            
                return newRow;
            })
       );
    }, [rowToEdit, rows]);
    

    return ( 
        <div>
            <div className={styles.header}>
                <h1>Tasks</h1>
            </div>
                <div>
                     <button className={styles.createTask} onClick={() => setModalOpen(true)}>Create Task</button>
                    {modalOpen && (
                        <Modal closeModal={() =>{
                            setModalOpen(false);
                            setRowToEdit(null);
                        }}
                        onSubmit={handleSubmit} 
                        defaultValues={rowToEdit !== null ? rows[rowToEdit] : null} 
                        />
                        )}
                </div>
            <div className={styles.tablewrapper}>
                <table className={styles.table} rows={rows}  
                deleteRow={handleDeleteRow} 
                editRow={handleEditRow} 
                >
                    <thead>
                        <th className={styles.title}>Title</th >
                        <th className={styles.date}>Date Posted</th >
                        <th className={styles.submit}>Submit By</th >
                    </thead>
                    <tbody>
                        {
                        rows.map((row, index) => {
                            return <tr key={index}>
                                        <td className={styles.title} onClick={() => navigate("/application", {state: {index, title: row.title, description: row.task, date: row.date, submitBy: row.submitBy}})}>
                                             {row.title}
                                        </td>
                                        <td>{row.date}</td>
                                        <td>{row.submitBy}</td>
                                        <td>
                                            <button className={styles.button} onClick={() => handleEditRow(index)}>Edit</button>
                                            <button className={styles.button} onClick={() => handleDeleteRow(index)}>Delete</button>
                                        </td>
                                    </tr>
                                 }      
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
     );
}

export default Task;