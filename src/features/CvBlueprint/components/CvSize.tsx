import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { CV_SIZES } from "../cv.blueprint.types";
import { getPaper, setPaperType } from "../redux/cv.blueprint.slice";

const sizeOptions = Object.keys(CV_SIZES);

export const CvSize = () => {
  const dispatch = useAppDispatch();
  const cvSize = useAppSelector(getPaper);

  return (
    <select
      value={cvSize}
      onChange={(e) =>
        dispatch(setPaperType(e.target.value as keyof typeof CV_SIZES))
      }
    >
      {sizeOptions.map((key) => {
        return (
          <option key={key} value={key}>
            {key}
          </option>
        );
      })}
    </select>
  );
};
