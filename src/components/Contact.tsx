import { useState } from "react";
import { Contacts } from "../types/Contact";
import NoCloseAlert from "./Common/Alerts/NoCloseAlert";
import { useEffect } from "react";
import "../style/EntryPage.css"
import SendIcon from '@mui/icons-material/Send';
import { contactInfo } from "../data/GeneralData";
import { sendMessage } from "../utilities/Helpers/ExternalConnection";


const Contact = () => {
  const [isMessSent, setmessageSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState<Contacts>({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });


  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  useEffect(() => {
    if (isMessSent) {
      const timer = setTimeout(() => {
        setmessageSent(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isMessSent]);

  const handleSubmit = async () => {
    console.log("here")
    const result = await sendMessage(formData);
    if (result == "Form Submitted Successfully") {
      setmessageSent(true)
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setErrorMsg('');
    }
    else {
      setmessageSent(false)
      setErrorMsg(result);
    }
  }

  return (
    <>
      <div className="w-full flex flex-col text-center font-lato">
        <div className="text-[#e70735]">Contact</div>
        <div className="text-[35px] text-[#e6e3e3] font-semibold">Contact with me</div>
      </div>

      <div className="w-full mt-[40px]  md:justify-between   lg:flex ">
        {isMessSent && (
          <div className="">
            <NoCloseAlert
              title="Message sent successfuly"
              text="We will contact you as soon as possible"
              color="green"
            />
          </div>
        )}


        <div className="contact-left w-full lg:w-[95%] lgxl:w-[68%] xl:w-[60%] lg:h-[35rem] lg:flex  flex-col gap-6 mb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="w-full transform transition-all duration-300 hover:scale-105 flex flex-col items-center px-2 py-16 lg:py-0 justify-center flex-1 bigbox shadow-three shadow-black"
            >
              <div>{item.logo}</div>
              <div className="mt-4 text-green-100">{item.info}</div>
            </div>
          ))}
        </div>



        <div className="lg:ml-[50px] bigbox shadow-black lg:h-[35rem] shadow-three py-10 px-7">
          <div className="lg:hidden w-full flex justify-center text-center
           text-[17px] sm:tet-[18px] md:text-[20px] mt-[-1rem] mb-6 text-[#d8d2d2] font-semibold">
            Send a message</div>
          <div>
            <div className="-mx-4 flex flex-wrap">

              <div className="w-full px-4 md:w-1/2">
                <div className="mb-8">
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name *"
                    className="w-full rounded-md  shadow-inset samecolor px-6 py-3 text-base text-white outline-none  focus:font-medium "
                  />
                </div>
              </div>

              <div className="w-full px-4 md:w-1/2">
                <div className="mb-8">
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email *"
                    className="w-full rounded-md  shadow-inset samecolor px-6 py-3 text-base text-white outline-none  focus:font-medium " />
                </div>
              </div>

              <div className="w-full px-4 md:w-1/2">
                <div className="mb-8">
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number *"
                    className="w-full rounded-md  shadow-inset samecolor px-6 py-3 text-base text-white outline-none  focus:font-medium " />
                </div>
              </div>

              <div className="w-full px-4 md:w-1/2">
                <div className="mb-8">
                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter your subject"
                    className="w-full rounded-md  shadow-inset samecolor px-6 py-3 text-base text-white outline-none  focus:font-medium " />
                </div>
              </div>

              <div className="w-full px-4 md:w-full">
                <div className="mb-8">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message *"
                    className="w-full rounded-md border-none focus:border-none shadow-inset samecolor h-48 px-6 py-3 text-base text-white outline-none focus:ring focus:ring-transparent"
                  ></textarea>
                </div>

                <div>
                  <div className="ml-5 mt-[-1rem] mb-2 text-[#d33857]">
                    {errorMsg}
                  </div>
                </div>


              </div>



              <div className="px-4 w-full flex justify-center  mt-4 mb-2 ">
                <div onClick={handleSubmit}
                  className=" box flex  shadow-inset rounded-md cursor-pointer">
                  <button
                    className="p-0 relative m-0 w-full rounded-md  px-6 py-3 text-base text-gray-300 outline-none focus:font-medium appearance-none border-0"
                  >
                    Send Message
                  </button>
                  <div className="pr-4 text-gray-300 -rotate-45">
                    <SendIcon />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
