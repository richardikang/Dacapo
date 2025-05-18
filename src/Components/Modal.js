import {useState} from 'react'


import styles from "./Modal.module.css"

export const Modal = ( {closeModal, onSubmit} ) => {

    const [formState, setFormState] = useState({
        title: "",
        task: "",
        date: "",
        level: ""
    });

    const validateForm = () => {
        if(formState.title && formState.task && formState.date && formState.level) {
            return true;
        } else {
            return false;
        }
    }    

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return
       
        onSubmit(formState);

        closeModal();
    }
  return (
    <div className={styles.modalwrapper}>
        <div className={styles.modal}>
            <form>
                <div className={styles.form}>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" value={formState.title} onChange={handleChange} required />
                </div>
                <div className={styles.form}>
                    <label htmlFor="task">Task</label>
                    <textarea id="task" name="task" value={formState.description} onChange={handleChange} required></textarea>
                </div>
                <div className={styles.form}>
                    <label htmlFor="date">Due Date</label>
                    <input type="date" id="date" name="date" value={formState.date} onChange={handleChange} required />
                </div>
                <div className={styles.form}>
                    <label htmlFor="level">Level</label>
                    <select id="level" name="level" value={formState.level} onChange={handleChange} required>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
                <button type="submit" className={styles.submit} onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    </div>
  )
}
