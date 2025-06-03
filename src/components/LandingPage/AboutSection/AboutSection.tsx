import AboutImg from "../../../assets/images/testimage.png";
import styles from "./AboutSection.module.css";
import MuiButton from "@mui/material/Button";

const AboutSection = () => {
  return (
    <section>
      <h1 className={styles.about__section_h1}>
        <span className={styles.about__section_span}>about</span> us
      </h1>
      <div className={styles.about__section_container}>
        <div className={styles.about__section_img_container}>
          <img className={styles.about__section_img} src={AboutImg} alt="" />
        </div>
        <div className={styles.about__section_article}>
          <h3 className={styles.about__section_article_h3}>
            What Makes Our Coffee Special?
          </h3>
          <p className={styles.about__section_article_p}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea earum
            eum eaque vitae facilis animi a in repudiandae incidunt nisi,
            dolorum, veniam blanditiis, numquam libero eos vel odio
            exercitationem temporibus.
          </p>
          <p className={styles.about__section_article_p}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, fuga?
            Voluptas amet quasi doloremque, deserunt quos eum maxime
          </p>
          <MuiButton
            variant="contained"
            sx={{ fontSize: "1.7rem", bgcolor: "#d3ad7f" }}
          >
            Learn More
          </MuiButton>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
