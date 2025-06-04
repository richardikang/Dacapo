import { useLocation } from 'react-router-dom';
import ReactHTMLParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

import { CodeEditor } from "../../Components/Codeeditor"
import styles from "./Application.module.css";

function Application() {
  const { state } = useLocation();
  const {title, description, submitBy} = state;

  return (
    <div className={styles.grid}>
      <div className={styles.box1}>
        <div className={styles.heading}>
          {title}
        </div>
        <p className={styles.submit}>Submit by:</p>
        {submitBy}
        <div className={styles.description}>
          {ReactHTMLParser(description, {
            transform: (node) => {
              if (node.type === 'tag' && node.name === 'p') {
                return convertNodeToElement(node, processNodes, htmlparser2);
              }
            }
          })}
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