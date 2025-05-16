//Task: Group Anagram (https://leetcode.com/problems/group-anagrams/description/)
//<h1>Software engineer needed to create a dynamic word puzzle</h1>
//<li>timed word search puzzle</li>
//<li>letters move every 10 second</li>
 //<ul>horizontally</ul>
 //<ul>vertically</ul>
 //<ul>diagonally</ul>
//<li>user has to score as many points as possible before the timer runs out</li>
//<p1>Display includes:</p1>
//<li>timer</li>
//<li>cumulative points</li>
//<li>Warning message during the remaining 10 seconds before the game ends</li>
//<li>final score</li>
//<li>option to continue or quit once the game ends</li> 
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