import React from 'react'


import styles from "./Modal.module.css"

export const Modal = ( {closeModal} ) => {

  return (
    <div className={styles.modalwrapper}>
        <div className={styles.modal}>
            <form>
                <div className={styles.form}>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" required />
                </div>
                <div className={styles.form}>
                    <label htmlFor="task">Task</label>
                    <textarea id="task" name="task" required></textarea>
                </div>
                <div className={styles.form}>
                    <label htmlFor="date">Due Date</label>
                    <input type="date" id="date" name="date" required />
                </div>
                <div className={styles.form}>
                    <label htmlFor="level">Level</label>
                    <select id="level" name="level" required>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
                <button type="submit" className={styles.submit}>Submit</button>
            </form>
        </div>
    </div>
  )
}
