import React from 'react';

const Section5 = () => {
  return (
    <div className="sec5 bg-[#212A31] flex flex-col items-center h-[900px] w-[2000px]">
      <div className="upp flex justify-evenly w-full">
        <div className="sec5-img h-[300px] w-[300px] bg-bisque flex items-center justify-center">
          Image
        </div>
        <div className="sec-info h-[500px] w-[700px] pt-[50px] text-[#D3D9D4]">
          <h1 className="text-[50px] text-[#748D92] pb-[50px]">Malshe Infrastructure</h1>
          <p>
            Team comes with collective experience of 30+ years in business and project management, design and development. Our strong belief to be a leader and market competitive construction company, makes us unique. We thrive continuously to ensure deliver quality with unmatched benchmarks, attention to needs of our customers, with detail and transparency in our processes and operations, consistently.
          </p>
          <p className="pt-[20px]">
            With a strong understanding of construction engineering and aesthetic designing skills are core, we endeavor to compete with customer and market expectations in search of excellence.
            <br/><br/>
            This journey we have undertaken, leads the way with core values of ‘integrity’ and ‘creativity’. ‘Design, Develop and Deliver’ are 3 pillars and work as a backbone to our business practices and processes. It keeps us focused on customer requirements quality and efficiency.
          </p>
        </div>
      </div>
      <div className="sec-foot w-full mt-[20px]">
        <div className="sec-foot-head flex justify-evenly text-[#D3D9D4] text-[30px] gap-[300px]">
          <h1>Sustainability</h1>
          <h1>Ease of Living</h1>
          <h1>People specific design</h1>
        </div>
        <div className="sec-foot-p flex justify-evenly px-[200px] pt-[50px] text-[#D3D9D4] gap-[200px]">
          <p>Balancing by reducing the impact of carbon emissions by reducing the impact with synergizing the processes with care. We believe using sustainable technologies and materials to possible extent is a beginning in world of green life !</p>
          <p>Human and cultural factor in distinguishing home to house, we believe in brining the user needs to optimize the facilitation for daily life !
          Catering to psychological aspects of human mind as to the idea of home synchronizing comfort with usage with space utilization is one of the key goals !</p>
          <p>A healthy competition of demand and catering to it, we thrive to work hard with focus on the market needs and user aspirations with sense of exclusivity.</p>
        </div>
      </div>
    </div>
  );
}

export default Section5;
