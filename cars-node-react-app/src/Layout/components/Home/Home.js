// import '../Layout/css/App.css';
import { Link } from 'react-router-dom';
import styles from './Home.module.css'

function Home() {
  return (
    <div> 
      
      <div className={styles.hero2}>
        <fieldset className={styles.hero2Text}>
          <legend className={styles.borderText}>&nbsp; APEX</legend>
          <h1>Наеми своята мечтана кола</h1>
          <p>Чрез Apex можете да наемете колата, която винаги сте мечтали да карате!</p>
          <Link to="http://localhost:3000/cars"><button>Резервирай сега!</button></Link>
        </fieldset></div>


      {/* <div id="scroll2" className="hero-container">
        <div className="hero1">
        </div>
        <div className="hero-text">
          <h1><b>Fun Site</b></h1>
          <p>This is a fun site so it has a fun photo, rounded font and a rounded button!</p>
          <a href="#scroll3"><button><b>CLICK ME</b></button></a>
        </div>
      </div> */}


      {/* <div id="scroll3" className="hero3">
        <div className="hero3-text">
          <h1><b>Inspiring Site</b></h1>
          <p>Inspiring site strikes a balance between fun/soft and sharp/professional.</p>
          <a href="#"><button><b>click me</b></button></a>
        </div>
      </div> */}

    </div>
  );
}

export default Home;