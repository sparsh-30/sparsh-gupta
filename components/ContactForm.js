import { useState } from "react";
import validator from "validator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (name === "" || email === "" || message === "") {
      toast.error("Please fill out all the fields", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if (validator.isEmail(email) === false) {
      toast.error("Please enter a valid email", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if (/[^a-zA-Z]/.test(name)) {
      toast.error("Name should not contain any digits or special characters", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if (name.length < 4) {
      toast.error("Length of name should be atleast 4 characters", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.success("Details saved successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div className="bg-black w-11/12 bp:w-2/5 mx-auto flex flex-col justify-center font-noto items-center py-10 text-xl rounded-2xl z-[100]">
      <ToastContainer
        style={{ top: 60 }}
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <input
        className="w-11/12 h-10 bg-black border-b-[1px] border-[#595959] mb-16 px-2 outline-none focus:font-normal focus:outline-none focus:border-[#FFD660] hover:border-white transition-all duration-300 placeholder:text-[#595959]"
        type="text"
        placeholder="Your Name *"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="w-11/12 h-10 bg-black border-b-[1px] border-[#595959] mb-16 px-2 outline-none focus:font-normal focus:outline-none focus:border-[#FFD660] hover:border-white transition-all duration-300 placeholder:text-[#595959]"
        type="text"
        placeholder="Your Email *"
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        className="w-11/12 bg-black border-b-[1px] border-[#595959] mb-16 px-2 outline-none focus:font-normal focus:outline-none focus:border-[#FFD660] hover:border-white transition-all duration-300 placeholder:text-[#595959]"
        name=""
        id=""
        cols="10"
        rows="5"
        maxLength="500"
        placeholder="Share Your Thoughts *"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="h-[60px] w-[170px] bp:h-[65px] bp:w-[180px] rounded-full text-3xl font-bold bg-gray-500 hover:bg-white hover:text-black transition-all duration-300"
      >
        Submit
      </button>
    </div>
  );
}
