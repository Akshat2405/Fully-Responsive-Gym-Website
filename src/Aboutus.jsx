import React from 'react';
function Aboutus() {
  // const map="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed";
  const map="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0delhi+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed";
    return (
      <>
        <section className="text-gray-700 body-font relative">
  <div className="absolute inset-0 bg-gray-300">
    <iframe width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="map" scrolling="no" src={map} style={{opacity:0.4}}></iframe>
  </div>
  <div className=" container px-5 py-24 mx-auto flex ">
    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
      <p className="leading-relaxed mb-5 text-gray-600">I want become the profeesional software developer. This will be helpful for me if you give me a job.</p>
      <textarea className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-teal-500 text-base px-4 py-2 mb-4 resize-none" placeholder="Message"></textarea>
      <button className="text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded text-lg">Add Suggestion</button>
      <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
    </div>
  </div>
</section>
      </>
    );
  }
  export default Aboutus;