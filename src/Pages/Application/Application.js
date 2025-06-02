import { useLocation } from 'react-router-dom';

import { CodeEditor } from "../../Components/Codeeditor"
import styles from "./Application.module.css";

function Application() {
  const { state } = useLocation();
  const {title, description, submitBy} = state;

  return (
    <div className={styles.grid}>
      <div className={styles.box1}>
        <div>      
          {title}
          {submitBy}
        </div>
        <div>
          {description}
        </div>
      </div>
      <div className={styles.box2}>
        <CodeEditor
          onChange={(key, value) => console.log(key, value)}
          language="javascript"
          code="// Write your code here"
          theme="vs-dark"
        />
        <button>Apply</button>
      </div>
    </div>
  )
}

export default Application;