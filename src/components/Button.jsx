/* eslint-disable react/prop-types */


const Button = ({ styles, text="Get Started", url="" }) => {


  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-white outline-none ${styles} rounded-[10px]`}
    >
      <a href={url}>{text}</a>
    </button>
  );
};

export default Button;
