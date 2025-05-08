import React from "react";
import styles from "@/styles/sections/about.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutWrapper}>
        <div className={styles.ourMission}>
          <div className={styles.info}>
            <h2 className={styles.headline}>Our Value</h2>
            <p className={styles.desc}>
              Empowering and guiding the local leadership and communities to
              build the foundation for sustainable rural development rooted in
              Nepal&apos;s ethos.
            </p>
          </div>
          <div className={styles.image}>
            <Image
              src="/assets/images/Nepal_Flag_Circle_500x500.png"
              alt="Nepal Flag Circle"
              width={250}
              height={250}
            />
          </div>
        </div>
        <div className={styles.ourValue}>
          <div className={styles.image}>
            <Image
              src="/assets/images/Nepal_Flag_Circle_500x500.png"
              alt="Nepal Flag Circle"
              width={250}
              height={250}
            />
          </div>
          <div className={styles.info}>
            <h2 className={styles.headline}>Our Mission</h2>
            <p className={styles.desc}>
              Develop IRD as an open and collaborative platform for all
              individuals/groups who believe in the positive transformation of
              Nepal at its fundamental level.
            </p>
          </div>
        </div>
        <div className={styles.moreAboutUs}>
          <Link href="/about">
            <Button size="large">Learn More</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
