import { useAppSelector } from "../../../app/hooks";
import { getPaperSize } from "../redux/cv.blueprint.slice";
import classes from "../cv.blueprint.module.scss";

export const CvBlueprint = () => {
  const size = useAppSelector(getPaperSize);
  return (
    <div
      className={classes.cvBlueprint}
      style={{
        width: size.w + "cm",
        height: size.h + "cm",
      }}
    >
      hello
    </div>
  );
};
