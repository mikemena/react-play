import Slider from "react-slick";

const Slideshow = () => {
  const slides = [
    {
      title: "Slide 1",
      content: "This is the first slide.",
    },
    {
      title: "Slide 2",
      content: "This is the second slide.",
    },
    {
      title: "Slide 3",
      content: "This is the third slide.",
    },
  ];

  return (
    <Slider infinite slidesToScroll={1} variableWidth>
      {slides.map((slide) => (
        <div key={slide.title}>
          <h2>{slide.title}</h2>
          <p>{slide.content}</p>
        </div>
      ))}
    </Slider>
  );
};

export default Slideshow;
