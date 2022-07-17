import {
  CustomerReviews,
  Reccomends,
  ReviewBoxes,
  ReviewButton,
  ReviewWindow,
  User,
  UserReview,
} from "./ProductPageStyling";
import { IconContext } from "react-icons";
import { RiArrowDownSLine } from "react-icons/ri";
import { useState } from "react";
import { CustomerRating } from "./ProductPageStyling";
import { BsFillStarFill, BsStarHalf } from "react-icons/bs";
import { TiTick } from "react-icons/ti";

const Review = () => {
  const [reviewDrop, setReviewDrop] = useState(false);

  const dropHandler = (event) => {
    setReviewDrop(!reviewDrop);
  };

  const customerReviews = (
    <ReviewWindow>
      <ReviewBoxes>
        <User>
          <p>Anonymous</p>
          <p>
            Reviews: <span>1</span>
          </p>
          <p>
            Athelete type: <span>Casual</span>
          </p>
        </User>
        <UserReview>
          <IconContext.Provider value={{ color: `#dc0019` }}>
            <CustomerRating>
              <p>
                <BsFillStarFill />
              </p>
              <p>
                <BsFillStarFill />
              </p>
              <p>
                <BsFillStarFill />
              </p>
              <p>
                <BsFillStarFill />
              </p>
              <p>
                <BsStarHalf />
              </p>
              <p>/</p>
              <p>a months ago</p>
            </CustomerRating>
          </IconContext.Provider>
          <p>
            Bought these for my wife's birthday. She's been in love with them
            since and runs regularly now. Couldn't be more pleased with them
          </p>
          <Reccomends>
            <p>
              Recommends this product{" "}
              <TiTick size={20} style={{ color: "green" }} />
            </p>
          </Reccomends>
        </UserReview>
      </ReviewBoxes>
      <ReviewButton>Write a Review</ReviewButton>
    </ReviewWindow>
  );

  const arrowStyles = {
    cursor: "pointer",
    transform: `rotate(${reviewDrop ? 180 : 0}deg)`,
    transitionDuration: "0.2s",
    color: `${reviewDrop ? "black" : "#dc0019"}`,
  };

  return (
    <CustomerReviews >
      <h1>Reviews</h1>
      <RiArrowDownSLine size={42} onClick={dropHandler} style={arrowStyles} />
      {reviewDrop && customerReviews}
    </CustomerReviews>
  );
};

export default Review;
