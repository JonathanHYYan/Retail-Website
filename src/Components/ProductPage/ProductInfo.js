import {
  ProductInfo,
  Colors,
  DetailsWindow,
  DetailsTab,
  Details,
  TabsWindow,
} from "./ProductInfoStyling";
import React, { useState } from "react";

const InfoSection = ({ retailColors }) => {
  const [detailsTab, setDetailsTab] = useState("details");
  const renderColors = () =>
    retailColors.map((color, index) => {
      if (index < retailColors.length - 1) {
        return (
          <React.Fragment key={color}>
            <p>{color}</p>
            <p> / </p>
          </React.Fragment>
        );
      } else {
        return <p key={color}>{color}</p>;
      }
    });

  if (!retailColors.length) return null;

  return (
    <ProductInfo>
      <TabsWindow>
        <DetailsTab
          autoFocus
          isSelected={detailsTab === "details"}
          onClick={() => setDetailsTab("details")}
        >
          Details
        </DetailsTab>
        <DetailsTab
          isSelected={detailsTab === "spec"}
          onClick={() => setDetailsTab("spec")}
        >
          Specification
        </DetailsTab>
        <DetailsTab
          isSelected={detailsTab === "fit"}
          onClick={() => setDetailsTab("fit")}
        >
          Fit and Care
        </DetailsTab>
      </TabsWindow>
      <Colors>{renderColors()}</Colors>
      <DetailsWindow>
        {detailsTab === "details" ? (
          <Details>
            <div>
              <p>
                From the D/MS/X collection comes a story of surreal comfort.
                Layered textures, intricate lines and vivid colours combine in a
                design influenced by the exaggerated world of our dreams. The
                React foam and an ultra-plush tongue provide dreamlike comfort.
                Step into your dream—the Nike React Vision.
              </p>
            </div>
          </Details>
        ) : null}
        {detailsTab === "spec" ? (
          <Details>
            <ul>
              <li>The padded, low-cut collar looks sleek and feels great</li>
              <li>Pull tabs at heel and tongue for easy on and off</li>
              <li>Colour Shown: Wolf Grey/Cool Grey/Pink Prime/Black</li>
              <li>Style: CI7523-009</li>
            </ul>
          </Details>
        ) : null}
        {detailsTab === "fit" ? (
          <Details>
            <ul>
              <li>
                Micro-detailing, exaggerated proportions and multi-textured
                aesthetic give this shoe a unique appearance. The airy upper
                features all-over mesh.
              </li>
              <li>
                The Nike React foam midsole with soft rubber detailing delivers
                unrivalled, all-day comfort. The ultra-plush tongue provides
                additional cushioning.
              </li>
              <li>
                The TPU heel clip creates a sporty look, refreshes your heritage
                styling and adds stability.
              </li>
            </ul>
          </Details>
        ) : null}
      </DetailsWindow>
    </ProductInfo>
  );
};

export default InfoSection;
