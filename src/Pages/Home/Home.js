import styles from "./Home.module.css"
import task from "../../Assets/task.png"
import selection from "../../Assets/selection.png"
import confidential from "../../Assets/confidential.png"


import Card from "react-bootstrap/Card"
import { useNavigate } from "react-router"



const cardInfo = [
  { image: task, text: "Tasks are assigned by clients to screen candidates for applicable skills" },
  { image: selection, text: "Fair selection process ensues where only sheer skills and talent are evaluated" },
  { image: confidential, text: "Identities of clients and freelancers are kept confidential until selection is finalized" }
]

const render = (card, index) => {
  return (
    <Card style={{ width: "16rem" }} key={index} className={styles.box}>
      <Card.Img src={card.image} className={styles.image} />
      <Card.Body>
        <Card.Text className={styles.text}>
          {card.text}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dashboard");    
  };
    return (
        <div className={styles.background}>
          <div className={styles.container}>
            <h1 className={styles.title}>Hub For Freelance <br/> Opportunities In <br/> Technology</h1>
            <button className={styles.button} onClick={handleClick}>Dashboard</button>
          </div>
              <div className={styles.grid}>
                {cardInfo.map(render)}
              </div>
            <div>
              <h1 className={styles.title}>How It Works</h1>
            </div>
          </div>
    );
}



export default Home;