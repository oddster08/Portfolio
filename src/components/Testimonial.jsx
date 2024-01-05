import React from 'react'

const Testimonial = () => {
  return (
    <div id = "testimonial">
        <h2>TESTIMONIAL</h2>
        <section>
            <TestimonialCard 
            name = {"Ayush"}
            feedback = {"Good Going..."}/>

            <TestimonialCard
          name={"Elon Musk"}
          feedback={
            "Couldn't be any better!"
          }
        />

        <TestimonialCard
          name={"Sundar Pichai"}
          feedback={"All developers should hail your name!!"}
        />


        </section>
    </div>
  )
}

const TestimonialCard = ({ name, feedback }) => (
    <article>
      <img
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        alt="User"
      />
      <h4>{name}</h4>
      <p>{feedback}</p>
    </article>
  );
export default Testimonial