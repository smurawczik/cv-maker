import { useAppSelector } from "../../../../app/hooks";
import {
  getBlueprintElements,
  getPaperSize,
} from "../../redux/cv.blueprint.slice";
import classes from "../../cv.blueprint.module.scss";
import { useRef } from "react";
import { CvBlueprintSection } from "./CvBlueprintSection";
// import { CvContextMenu } from "./CvContextMenu/CvContextMenu";

export const CvBlueprint = () => {
  const size = useAppSelector(getPaperSize);
  const blueprintElements = useAppSelector(getBlueprintElements);

  const cvBlueprintRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={cvBlueprintRef}
      className={classes.cvBlueprint}
      style={{
        width: size.width + "cm",
        height: size.height + "cm",
      }}
    >
      {blueprintElements.map((section) => (
        <CvBlueprintSection section={section} />
      ))}
      {/* <CvContextMenu cvBlueprintRef={cvBlueprintRef} /> */}
    </div>
  );
};
