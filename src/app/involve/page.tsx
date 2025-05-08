import React from "react";
import Image from "next/image";
import joinUsPrograms from "@/data/joinUsPrograms.json";
import styles from "@/styles/pages/involve.module.css";
import Button from "@/components/Button";

const AreasOfWork = () => {
  return (
    <section className={styles.involve}>
      <div className={styles.involveWrapper}>
        <div className={styles.heroSection}>
          <h2>Join IRD</h2>
          <div className={styles.heroSectionContent}>
            <div className={styles.heroSectionDesc}>
              <p>
              At IRD, we believe that meaningful change happens when passionate individuals come together with a shared vision. Whether you are a student, a young professional, an expert, or someone simply eager to make a difference, there’s a place for you here. We welcome people from all backgrounds, skills, and experiences to join us in our mission to create a more just, inclusive, and thriving Nepal.
              </p>
              <p>
              Your involvement—whether through volunteering, interning, collaborating, or supporting our initiatives—can drive real impact in education, sustainability, community development, and beyond. Together, we can shape a future where progress is not just a possibility but a reality for all.
              </p>
            </div>
            <div className={styles.heroSectionImage}>
              <Image
                src="/assets/images/involve/join.jpg"
                alt="Join Us Hero Image"
                className={styles.image}
                fill
                priority
              />
            </div>
          </div>
        </div>
        <ul className={styles.involveLists}>
          {joinUsPrograms.joinUsPrograms.map((item, index) => (
            <li className={styles.involveList} key={index}>
              <div className={styles.involveListInfo}>
                <h3 className={styles.involveListHeadline}>{item.programName}</h3>
                <p className={styles.involveListDesc}>
                 {item.programDesc}
                </p>
                <Button size="medium">Join Us</Button>
              </div>
              <div className={styles.involveListImage}>
                <Image
                  src={item.programImage}
                  alt="Join Us Hero Image"
                  className={styles.image}
                  fill
                  priority
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AreasOfWork;
