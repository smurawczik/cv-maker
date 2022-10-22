export const CV_SIZES = {
  A4: {
    width: 21,
    height: 29.7,
  },
  A5: {
    width: 14.85,
    height: 21,
  },
};

export type CvElement =
  | {
      type: "text";
      content: string;
    }
  | {
      type: "list";
      content: string[];
    }
  | {
      type: "link";
      linkText: string;
      link: string;
    };

export interface CvBlueprintState {
  size: {
    width: number;
    height: number;
  };
  paper: keyof typeof CV_SIZES;
  elements: CvElement[];
}
