import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "../../data/emaildt";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";

function Contact() {
  const form = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [popoverMessage, setPopoverMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setPopoverMessage("Email sent successfully!!");
          setIsOpen(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setPopoverMessage("Failed to sent email!");
          setIsOpen(true);
        }
      );
  };

  return (
    <div id="contact" className="max-w-screen-2xl mx-auto pt-10">
      <h1 className="text-4xl text-center md:text-start underline text-txtlight-clr dark:text-txtclr-default px-16 pb-5  font-pixelari">
        Contact me
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="space-y-4 max-w-lg mx-10 md:mx-auto"
      >
        <div>
          <label className="block text-xl text-txtlight-clr dark:text-txtclr-default font-pixelari">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            required
            className="w-full p-2 border rounded-md bg-transparent border-bg-primary dark:border-bg-light"
          />
        </div>
        <div>
          <label className="block text-lg text-txtlight-clr dark:text-txtclr-default font-pixelari">
            Email
          </label>
          <input
            type="email"
            name="user_email"
            required
            className="w-full p-2 border rounded-md bg-transparent  border-bg-primary dark:border-bg-light"
          />
        </div>
        <div>
          <label className="block text-lg text-txtlight-clr dark:text-txtclr-default font-pixelari">
            Message
          </label>
          <textarea
            name="message"
            required
            className="w-full p-2 border rounded-md bg-transparent  border-bg-primary dark:border-bg-light"
            rows="5"
          />
        </div>
        <Popover
          isOpen={isOpen}
          onOpenChange={(open) => setIsOpen(open)}
          showArrow
          placement="bottom"
        >
          <PopoverTrigger>
            <Button
              type="submit"
              value="send"
              className="w-full p-3 bg-btn-default text-txtclr-default rounded-md hover:bg-btn-hover transition font-pixelari text-xl"
            >
              Send Message
            </Button>
          </PopoverTrigger>
          <PopoverContent className="bg-bg-light dark:bg-bg-primary">
            <div className="px-1 py-2">
              <div className="text-md font-pixelari">{popoverMessage}</div>
            </div>
          </PopoverContent>
        </Popover>
      </form>
    </div>
  );
}

export default Contact;
