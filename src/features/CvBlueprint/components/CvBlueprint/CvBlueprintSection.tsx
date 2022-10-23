import { FC } from "react";
import { Section } from "../../cv.blueprint.types";
import { CvBlueprintChildSection } from "./CvBlueprintChildSection";

export const CvBlueprintSection: FC<{ section: Section }> = ({ section }) => {
  const getSectionMarkup = () => {
    if (section.type === "split-section") {
      return (
        <div style={{ padding: 8, display: "flex" }}>
          <div style={{ width: section.left + "%" }}>
            <CvBlueprintChildSection child={section.leftChild} />
          </div>
          <div style={{ width: section.right + "%" }}>
            <CvBlueprintChildSection child={section.rightChild} />
          </div>
        </div>
      );
    }
  };

  return <>{getSectionMarkup()}</>;
};
