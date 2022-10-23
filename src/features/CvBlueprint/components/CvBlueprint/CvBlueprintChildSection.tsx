import { FC } from "react";
import { SectionChild } from "../../cv.blueprint.types";

export const CvBlueprintChildSection: FC<{ child: SectionChild }> = ({
  child,
}) => {
  const getChildSectionMarkup = () => {
    if (child.type === "image") {
      return <div style={{ padding: 8 }}>IMAGE</div>;
    } else if (child.type === "job") {
      return <div style={{ padding: 8 }}>{child.title}</div>;
    }
  };

  return <>{getChildSectionMarkup()}</>;
};
