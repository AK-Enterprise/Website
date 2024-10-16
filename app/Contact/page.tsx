// import ContactForm from "../components/ContactForm";
import Map from "../components/Map";
function Contact() {
  return (
    <div className="flex justify-center items-center flex-col h-screen max-w-[1280px] m-auto gap-5">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-8xl font-extrabold drop-shadow-lg">
          <span className="text-[#6A6A6A]">Contact</span> Us
        </h1>
        <svg
          width="390"
          height="38"
          viewBox="0 0 390 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M305.157 35.9453C212.565 26.0942 118.876 19.1754 25.7847 16.1119C21.0257 15.9553 -10.3131 17.3012 17.8463 13.5566C84.6906 4.66766 152.204 2.81978 219.501 2.16972C270.01 1.68183 320.523 2.5352 371.012 3.59594C376.32 3.70746 392.113 3.20483 386.92 4.35676C374.759 7.0544 362.165 6.99229 349.748 7.74801C233.64 14.8149 117.927 8.09706 1.94332 3.89652"
            stroke="#6A6A6A"
            strokeWidth="3"
            stroke-linecap="round"
          />
        </svg>
      </div>

      <div className="flex justify-between items-start gap-5">
        {/* <ContactForm></ContactForm> */}
        {/* Removed Form As HR Said Not Required.  */}
        <Map></Map>
      </div>
    </div>
  );
}

export default Contact;
