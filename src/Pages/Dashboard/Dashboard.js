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

    return ( 
        <div>
            <button className={styles.button} onClick={handleClick}>Home</button>
            <h1 className={styles.task}>Tasks</h1>
            <button className={styles.button} onClick={() => setModalOpen(true)}>Create Task</button>
            {modalOpen && <Modal closeModal={() => setModalOpen(false)} />}
            <div className={styles.tablewrapper}>
                <table className={styles.table}>
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
