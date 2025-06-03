import styles from "./HomeSection.module.css";
import MuiButton from "@mui/material/Button";

const HomeSection = () => {
  return (
    <section className={styles.home__section}>
      <div className={styles.home__section_text}>
        <h3 className={styles.home__section_h3}>fresh coffee in the morning</h3>
        <p className={styles.home__section_p}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro
          aspernatur reiciendis.
        </p>

        <MuiButton
          variant="contained"
          sx={{
            fontSize: "1.7rem",
            bgcolor: "#d3ad7f",
          }}
        >
          Get Yours Now
        </MuiButton>
      </div>
    </section>
  );
};

export default HomeSection;
