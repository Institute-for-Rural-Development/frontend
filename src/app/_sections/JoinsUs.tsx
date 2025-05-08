import React from "react";
import styles from "@/styles/sections/join.module.css";
import Link from "next/link";
import Button from "@/components/Button";
import joinUsPrograms from "@/data/joinUsPrograms.json";
import Image from "next/image";

const JoinUs = () => {
  return (
    <section className={styles.joinUs}>
      <div className={styles.joinUsWrapper}>
        <div className={styles.header}>
          <h2>Join Us</h2>
          <p>
            Be part of something bigger. Be part of the change. Join us in
            making a lasting impact.
          </p>
        </div>

        <ul className={styles.programLists}>
          {joinUsPrograms.joinUsPrograms.map((item, index) => (
            <li className={styles.program} key={index}>
              <Link href={item.programLink}>
                <div className={styles.imageContainer}>
                  <Image
                    src={item.programImage}
                    className={styles.programImage}
                    alt={`${item.programName} Image`}
                    fill
                  />
                </div>
                <div className={styles.programContent}>
                  <div className={styles.programHeader}>
                    <h3 className={styles.programName}>{item.programName}</h3>
                  </div>
                  <div className={styles.programDesc}>
                    <p>
                      {item.programDesc.length > 100
                        ? `${item.programDesc.slice(0, 100)}...`
                        : item.programDesc}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.moreOpportunities}>
          <Link href="/involve">
            <Button size="large">More Opportunities</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
