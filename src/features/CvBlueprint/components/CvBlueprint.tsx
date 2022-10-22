import { useAppSelector } from "../../../app/hooks";
import { getPaperSize } from "../redux/cv.blueprint.slice";
import classes from "../cv.blueprint.module.scss";
import { useRef } from "react";
import { CvContextMenu } from "./CvContextMenu";

export const CvBlueprint = () => {
  const size = useAppSelector(getPaperSize);

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
      <CvContextMenu cvBlueprintRef={cvBlueprintRef} />
    </div>
  );
};
