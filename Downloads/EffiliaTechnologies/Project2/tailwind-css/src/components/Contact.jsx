import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center bg-white h-[900px] w-[2000px]">
      <div className="h-[500px] w-[630px] pt-[100px]">
        <h1 className="text-4xl font-bold font-sans">Reach Out</h1>
        <p className="text-gray-500">Get in touch with us for any questions</p>
        <form action="/submit" method="post" className="space-y-4">
          <div>
            <label htmlFor="first-name">First name:</label>
            <br />
            <input
              type="text"
              id="first-name"
              name="first-name"
              required
              className="mt-2 block w-full border border-gray-300 p-2"
            />
          </div>
          <div>
            <label htmlFor="email1">Email Address:</label>
            <label htmlFor="email2">Last name:</label>
            <br />
            <div className="flex space-x-4">
              <input
                type="email"
                id="email1"
                name="email1"
                required
                className="mt-2 block w-1/2 border border-gray-300 p-2"
              />
              <input
                type="text"
                id="last-name"
                name="last-name"
                required
                className="mt-2 block w-1/2 border border-gray-300 p-2"
              />
            </div>
          </div>
          <div>
            <label>Select a reason for reaching out:</label>
            <div className="flex space-x-4 mt-2">
              <button
                type="button"
                className="px-4 py-2 bg-white text-black border border-black"
              >
                Open Land
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-white text-black border border-black"
              >
                Redevelopment
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-white text-black border border-black"
              >
                Industrial Facility
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-white text-black border border-black"
              >
                Commercial
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="location">Your location:</label>
            <br />
            <input
              type="text"
              id="location"
              name="location"
              required
              className="mt-2 block w-full border border-gray-300 p-2"
            />
          </div>
          <div>
            <label htmlFor="land-area">Land Area Size</label>
            <br />
            <input
              type="number"
              id="land-area"
              name="land-area"
              placeholder="6000 sqft"
              required
              className="mt-2 block w-full border border-gray-300 p-2"
            />
          </div>
          <input
            type="submit"
            value="Submit"
            className="mt-4 px-10 py-2 bg-gray-400 text-white"
          />
        </form>
      </div>
      <div className="h-[500px] w-[630px] pt-[90px]">
        <div className="bg-gray-300 h-[200px] w-[500px] p-4">
          <p className="text-gray-500 text-xl font-bold">Latest Updates</p>
        </div>
        <p className="mt-4 text-gray-500">Connect with us on</p>
        <div className="flex space-x-8 mt-2 font-extrabold">
          <a href="https://example.com/link1" className="block text-black-500">
            LinkedIn
          </a>
          <a href="https://example.com/link2" className="block text-black-500">
            Instagram
          </a>
          <a href="https://example.com/link3" className="block text-black-500">
            Facebook
          </a>
        </div>
        <p className="mt-4 text-gray-500">We are located at-</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.189424540261!2d73.80323481555257!3d18.50356938741062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf537e64be23%3A0x15a9e3b5ef8281!2s18%C2%B030&#39;12.9%22N%2073%C2%B048&#39;20.9%22E!5e0!3m2!1sen!2sin!4v1690689157762!5m2!1sen!2sin"
          width="500"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
