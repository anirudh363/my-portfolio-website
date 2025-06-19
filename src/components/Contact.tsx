import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BackgroundGradient } from "./ui/background-gradient";
import { PinContainer } from "./ui/3d-pin";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

 const sendEmail = (e: React.FormEvent) => {
  e.preventDefault();
  if (!form.current) return;

  const firstName = (form.current.elements.namedItem("first_name") as HTMLInputElement)?.value;
  const lastName = (form.current.elements.namedItem("last_name") as HTMLInputElement)?.value;

  // Set the hidden name field
  const nameInput = form.current.elements.namedItem("name") as HTMLInputElement | null;
  if (nameInput) {
    nameInput.value = `${firstName} ${lastName}`;
  }

  emailjs
    .sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_PUBLIC_KEY
    )
    .then(() => {
      alert("✅ Message sent successfully!");
      form.current?.reset();
    })
    .catch((err) => {
      alert("❌ Failed to send. Try again later.");
      console.error(err);
    });
};


  return (
    <div className="max-w-3xl mx-auto px-4 pb-10 pt-20">
         <h1 className="text-4xl font-bold mb-6 text-center">Contact</h1>
      {/* 📨 Contact Form */}
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">

        <form
        ref={form}
        onSubmit={sendEmail}
        className="space-y-6 text-neutral-800 dark:text-neutral-100 bg-black/5 dark:bg-white/5 p-8 rounded-lg shadow-lg border-2 border-gradient-to-r from-red-600 via-green-600 to-black"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Get in Touch or Leave a Message</h2>

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            required
            className="w-full px-4 py-2 bg-transparent border border-neutral-400 dark:border-neutral-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          />
          <input type="hidden" name="name" />

          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            required
            className="w-full px-4 py-2 bg-transparent border border-neutral-400 dark:border-neutral-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full px-4 py-2 bg-transparent border border-neutral-400 dark:border-neutral-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500 transition"
        />
        <textarea
          name="message"
          rows={4}
          placeholder="Your message"
          required
          className="w-full px-4 py-2 bg-transparent border border-neutral-400 dark:border-neutral-600 rounded focus:outline-none focus:ring-2 focus:ring-red-500 transition"
        />
        <div className="text-center">
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </div>
      </form>
      </BackgroundGradient>
      

      {/* 📇 Contact Cards */}
      

<div className="mt-16 grid  sm:grid-cols-1 md:grid-cols-2 gap-2 text-neutral-800 dark:text-neutral-200">

  {/* Email - Static for small screens */}
  <div className="md:hidden relative p-4 rounded-lg shadow w-full overflow-hidden bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md flex flex-col justify-center">
    <img
      src="/assets/gmail-logo.png"
      alt="email bg"
      className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm pointer-events-none"
    />
    <h3 className="font-semibold text-lg mb-1 z-10">📧 Email</h3>
    <a
      href="mailto:anirudhsandilya363@gmail.com"
      className="text-blue-600 dark:text-blue-400 underline z-10"
    >
      anirudhsandilya363@gmail.com
    </a>
  </div>

  {/* Email - Pin on md+ */}
  <div className="hidden md:block">
    <PinContainer title="Email" href="mailto:anirudhsandilya363@gmail.com">
      <div className="relative p-4 rounded-lg shadow w-[10rem] h-[6rem] overflow-hidden bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md flex flex-col justify-center">
        <img
          src="/assets/gmail-logo.png"
          alt="email bg"
          className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm pointer-events-none"
        />
        <h3 className="font-semibold text-lg mb-1 z-10">📧 Email</h3>
        <a
          href="mailto:anirudhsandilya363@gmail.com"
          className="text-blue-600 dark:text-blue-400 break-words underline z-10"
        >
          anirudhsandilya363@gmail.com
        </a>
      </div>
    </PinContainer>
  </div>


  <div className="hidden md:block">
    <PinContainer title="LinkedIn" href="https://www.linkedin.com/in/anirudh363">
    <div className="relative p-4 rounded-lg shadow w-[10rem] h-[6rem] overflow-hidden bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md flex flex-col justify-center">
      <img
        src="/assets/linkedin-logo.png"
        alt="linkedin bg"
        className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm pointer-events-none"
      />
      <h3 className="font-semibold text-lg mb-1 z-10">🔗 LinkedIn</h3>
      <a
        href="https://www.linkedin.com/in/anirudh363"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 underline break-words z-10"
      >
        linkedin.com/in/anirudh363
      </a>
    </div>
  </PinContainer>
  </div>
  <div className="md:hidden relative p-4 rounded-lg shadow w-full overflow-hidden bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md flex flex-col justify-center">
    <img
      src="/assets/linkedin-logo.png"
      alt="linkedin bg"
      className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm pointer-events-none"
    />
    <h3 className="font-semibold text-lg mb-1 z-10">🔗 LinkedIn</h3>
    <a
      href="https://www.linkedin.com/in/anirudh363"
      className="text-blue-600 dark:text-blue-400 underline z-10"
    >
      linkedin.com/in/anirudh363
    </a>
  </div>

  <div className="hidden md:block">
    <PinContainer title="GitHub" href="https://github.com/anirudh363">
    <div className="relative p-4 rounded-lg shadow w-[10rem] h-[6rem] overflow-hidden bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md flex flex-col justify-center">
      <img
        src="/assets/github-logo.jpg"
        alt="github bg"
        className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm pointer-events-none"
      />
      <h3 className="font-semibold text-lg mb-1 z-10">💻 GitHub</h3>
      <a
        href="https://github.com/anirudh363"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 underline break-words z-10"
      >
        github.com/anirudh363
      </a>
    </div>
  </PinContainer>
  </div>
  <div className="md:hidden relative p-4 rounded-lg shadow w-full overflow-hidden bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md flex flex-col justify-center">
    <img
      src="/assets/github-logo.jpg"
      alt="github bg"
      className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm pointer-events-none"
    />
    <h3 className="font-semibold text-lg mb-1 z-10">💻 GitHub</h3>
    <a
      href="https://github.com/anirudh363"
      className="text-blue-600 dark:text-blue-400 underline z-10"
    >
      github.com/anirudh363
    </a>
  </div>

  <div className="hidden md:block">
    <PinContainer title="Blog" href="#">
    <div className="relative p-4 rounded-lg shadow w-[10rem] h-[6rem] overflow-hidden bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md flex flex-col justify-center">
      <img
        src="/assets/blog-logo.png"
        alt="blog bg"
        className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm pointer-events-none"
      />
      <h3 className="font-semibold text-lg mb-1 z-10">✍ Blog</h3>
      <span className="italic opacity-60 z-10">Coming soon...</span>
    </div>
  </PinContainer>
  </div>
  <div className="md:hidden relative p-4 rounded-lg shadow w-full overflow-hidden bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md flex flex-col justify-center">
    <img
      src="/assets/blog-logo.png"
      alt="blog bg"
      className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm pointer-events-none"
    />
    <h3 className="font-semibold text-lg mb-1 z-10">✍ Blog</h3>
    <a
      href="#"
      className="text-blue-600 dark:text-blue-400 underline z-10"
    >
      Coming soon...
    </a>
  </div>

</div>


    </div>
  );
};

export default Contact;
