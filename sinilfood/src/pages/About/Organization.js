import organizationImg from "../../assets/img/about/organization.png";
import "../../assets/styles/about/about-organization.css";

const Organization = () => {
  return (
    <div className="about__org">
      <h1>조직도</h1>
      <img
        className="about__org__img"
        alt="about_ci_img"
        src={organizationImg}
      />
    </div>
  );
};

export default Organization;
