/* eslint-disable react/prop-types */
import { features } from "../constants";
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

const Business = () => {
  return (
    <section id="Job_Seekers" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Apply to jobs seamlessly,
          <br className="sm:block hidden" />
          with just one click.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Be among the first to experience HireNeu and revolutionize your job
          search! Sign up as a beta user and enjoy exclusive features designed
          to make job finding easier.
        </p>
        <Button styles="mt-10" text="Register as Job Seeker" url={"https://forms.gle/ogEmLZwaAZUAB1Bu6"} />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
