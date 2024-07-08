import { useState } from "react";

const Contact = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Number, setNumber] = useState("");

  async function submit(e) {
    e.preventDefault();
    const formData = new FormData();
    const url =
      "https://script.google.com/macros/s/AKfycbzrHpKypMH7ztitf1mnAD8vP6nvIRvJXVVbNQ9RP54J4qgqR7AoW7uxOkoCyvOno9bm/exec";

    formData.append("Name", Name);
    formData.append("Email", Email);
    formData.append("Number", Number);

    const response = await fetch(url, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });

    setName("");
    setEmail("");
    setNumber("");

    alert("Thank You");
  }

  return (
    <div className="flex gap-x-10 mb-10">
      <div className="block mb-2 text-[24px] text-dimWhite w-2/5 break-words mt-[100px]">
        Unlock the potential of AI Search Algorithms, Vertical Video Contents &
        video Portfolios to land your dream job.
      </div>
      <form onSubmit={(e) => submit(e)} className="flex flex-col gap-y-6 w-3/5">
        <div>
          <label className="block mb-2 text-[24px] text-white">Name</label>
          <input
            name="Name"
            required
            type="text"
            placeholder="Name"
            value={Name}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-2 text-[24px] text-white">Email</label>
          <input
            name="Email"
            required
            type="text"
            placeholder="Email"
            value={Email}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-2 text-[24px] text-white">
            Contact Number
          </label>
          <input
            name="Number"
            required
            type="text"
            placeholder="Contact Number"
            value={Number}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] max-w-[150px] text-primary outline-none rounded-[10px] mt-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
