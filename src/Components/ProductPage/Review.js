import {
  CustomerReviews,
  Reccomends,
  ReviewBoxes,
  User,
  UserReview,
} from "./ProductPageStyling";
import { RiArrowDownSLine } from "react-icons/ri";
import { useState } from "react";
import { CustomerRating } from "./ProductPageStyling";
import { BsFillStarFill, BsStarHalf } from "react-icons/bs";
import {TiTick} from "react-icons/ti";

const Review = () => {
  const [reviewDrop, setReviewDrop] = useState(false);

  const dropHandler = (event) => {
    setReviewDrop(!reviewDrop);
  };

  const customerReviews = (
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
        <p>Bought these for my wife's birthday. She's been in love with them since and runs regularly now. Couldn't be more pleased with them</p>
        <Reccomends>
        <p>Recommends this product <TiTick size={28}/></p>
        </Reccomends>
      </UserReview>
    </ReviewBoxes>
  );

  return (
    <CustomerReviews onClick={dropHandler}>
      <h1>Reviews</h1>
      <RiArrowDownSLine size={42} />
      {reviewDrop && customerReviews}
    </CustomerReviews>
  );
};

export default Review;
