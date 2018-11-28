import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = ({
  sushiToDisplay,
  handleMoreSushi,
  handleEatSushi
}) => {
  return (
    <Fragment>
      <div className="belt">
        {sushiToDisplay.map(sushiObj => (
          <Sushi
            key={sushiObj.id}
            sushiObj={sushiObj}
            handleEatSushi={handleEatSushi}
          />
        ))}
        <MoreButton handleMoreSushi={handleMoreSushi} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
