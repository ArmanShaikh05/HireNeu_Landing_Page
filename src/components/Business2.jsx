/* eslint-disable react/prop-types */
import { features, features2 } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-[#1E061B]`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business2 = () => {
  return (
    <section id="SME" className={layout.section2}>
      <div className={`${layout.sectionImg2} flex-col mt-10 `}>
        {features2.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Brand your culture,
          <br className="sm:block hidden" />
          Attract the right talent.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Be one of the first to explore HireNeu and transform the hiring
          experience! Sign up as a beta user and gain access to exclusive
          features which help you find the right talent.
        </p>
        <Button
          styles="mt-10"
          text="Register as SME"
          url="https://forms.gle/hBFcxCUsU4E2aUPXA"
        />
      </div>
    </section>
  );
};

export default Business2;
