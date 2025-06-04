import {useState} from 'react'
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css'


import styles from "./Modal.module.css"

export const Modal = ( {closeModal, onSubmit} ) => {

    const [formState, setFormState] = useState({
        title: "",
        task: "",
        date: "",
        submitBy: "",
        level: ""
    });

    const validateForm = () => {
        if(formState.title && formState.task && formState.date && formState.submitBy && formState.level) {
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
    <div 
        className={styles.modalwrapper}
        onClick={(e) => {
            if (e.target.className === styles.modalwrapper) 
                closeModal();
            }
        }
    >
        <div className={styles.modal}>
            <button className={styles.close} onClick={closeModal}>x</button>
            <form>
                <div className={styles.form}>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" value={formState.title} onChange={handleChange} required />
                </div>
                <div className={styles.form}>
                    <label htmlFor="task">Task</label>
                    <ReactQuill 
                        className={styles.quill}
                        id="task" 
                        name="task" 
                        value={formState.task} 
                        onChange={(value) => setFormState({ ...formState, task: value })}
                        required
                        theme="snow"
                        placeholder="Write your task here..."
                        modules={{
                            toolbar: [
                                [{ 'header': [1, 2, false] }],
                                ['bold', 'italic', 'underline'],
                                ['link', 'image'],
                                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                                ['clean']
                            ]
                        }}
                        formats={[
                            'header', 'bold', 'italic', 'underline', 'link', 'image', 'list'
                        ]}
                    />
                <br />
                </div>
                     <div className={styles.form}>
                    <label htmlFor="date">Today's Date</label>
                    <input type="date" id="date" name="date" value={formState.date} onChange={handleChange} required />
                </div>
                <div className={styles.form}>
                    <label htmlFor="date">Due Date</label>
                    <input type="date" id="submitBy" name="submitBy" value={formState.submitBy} onChange={handleChange} required />
                </div>
                <div className={styles.form}>
                    <label htmlFor="level">Level</label>
                    <select id="level" name="level" value={formState.level} onChange={handleChange} required>
                        <option value="" disabled>Select Level</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
                <button type="submit" className={styles.submit} onClick={handleSubmit}>Submit</button>
                <button type="button" className={styles.cancel} onClick={closeModal}>Cancel</button>
            </form>
        </div>
    </div>
  )
}



//task becomes invisible after refreshing
