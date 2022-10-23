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

export type SectionChild =
  | {
      type: "image";
      blobURL: string;
    }
  | {
      type: "job";
      title: string;
      description?: string;
      tasks?: string[];
      from: Date;
      to?: Date;
      actualJob?: boolean;
    }
  | {
      type: "skill";
      skillName: string;
      level: number;
    };

export type FullWidthSection = {
  type: "full-width-section";
  fullWidth: true;
  children: SectionChild[];
};

export type SplitSection = {
  type: "split-section";
  left: number;
  right: number;
  leftChild: SectionChild;
  rightChild: SectionChild;
};

export type Section = FullWidthSection | SplitSection;

export interface CvBlueprintState {
  size: {
    width: number;
    height: number;
  };
  paper: keyof typeof CV_SIZES;
  blueprint: Section[];
}
