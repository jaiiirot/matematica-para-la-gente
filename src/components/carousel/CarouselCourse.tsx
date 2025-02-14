// https://www.npmjs.com/package/react-multi-carousel
// https://react-multi-carousel.surge.sh/?selectedKind=Carousel&selectedStory=With%20infinite%20mode&full=0&addons=1&stories=1&panelRight=0&addonPanel=kadira%2Fjsx%2Fpanel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardCourse from "../card/CardCourseCol";
import { course } from "../../mock/data";
export default function CarouselCourse() {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 4,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container"
      draggable={false}
      focusOnSelect={false}
      infinite
      dotListClass=""
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
      removeArrowOnDeviceType={["mobile"]}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {course.map((item) => (
        <div className="mx-2 bg-white rounded-xl overflow-hidden shadow-md" key={item.id}>
          <CardCourse
            id={item.id}
            front={item.front}
            title={item.title}
            urltitle={item.urltitle}
            description={item.description}
            canal={item.canal}
          />
        </div>
      ))}
    </Carousel>
  );
}
