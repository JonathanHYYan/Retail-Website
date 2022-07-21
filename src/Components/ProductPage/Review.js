import {
  CustomerReviews,
  Rating,
  Recommends,
  Reviews,
  ReviewBoxes,
  ReviewButton,
  ReviewWindow,
  User,
  UserReview,
} from "./ReviewStyles";
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
          <div>Anonymous</div>
          <div>
            Reviews: <span>1</span>
          </div>
          <div>
            Athelete type: <span>Casual</span>
          </div>
        </User>
        <UserReview>
          <IconContext.Provider value={{ color: `#dc0019` }}>
            <CustomerRating>
              <div>
                <BsFillStarFill />
              </div>
              <div>
                <BsFillStarFill />
              </div>
              <div>
                <BsFillStarFill />
              </div>
              <div>
                <BsFillStarFill />
              </div>
              <div>
                <BsStarHalf />
              </div>
              <div>/</div>
              <div>a months ago</div>
            </CustomerRating>
          </IconContext.Provider>
          <p>
            Bought these for my wife's birthday. She's been in love with them
            since and runs regularly now. Couldn't be more pleased with them
          </p>
          <Recommends>
            <p>
              Recommends this product
              <TiTick size={20} style={{ color: "green" }} />
            </p>
          </Recommends>
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
    <Reviews>
      <Rating>
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
        <p>62 Reviews</p>
      </Rating>
      <CustomerReviews>
        <h1>Reviews</h1>
        <RiArrowDownSLine size={42} onClick={dropHandler} style={arrowStyles} />
        {reviewDrop && customerReviews}
      </CustomerReviews>
    </Reviews>
  );
};

export default Review;
