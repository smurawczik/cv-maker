import { FC, useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "../../../../app/hooks/useOnClickOutside";

import classes from "./cv.contextmenu.module.scss";

export const CvContextMenu: FC<{
  cvBlueprintRef: React.MutableRefObject<HTMLDivElement | null>;
}> = ({ cvBlueprintRef }) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [menuPosition, setMenuPosition] = useState<{
    left: number;
    top: number;
  }>({
    left: 0,
    top: 0,
  });
  const contextMenuRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(contextMenuRef, () => setMenuOpened(false));

  useEffect(() => {
    if (cvBlueprintRef.current) {
      cvBlueprintRef.current.addEventListener("contextmenu", (e) => {
        e.preventDefault();

        setMenuPosition({
          left: e.clientX,
          top: e.clientY,
        });
        setMenuOpened(true);
      });
    }
  }, [cvBlueprintRef]);

  if (!menuOpened) return null;

  return (
    <div
      ref={contextMenuRef}
      className={classes.contextMenu}
      style={{ ...menuPosition }}
    >
      <button className={classes.contextMenuItem}>texto</button>
      <button className={classes.contextMenuItem}>lista</button>
      <button className={classes.contextMenuItem}>link</button>
    </div>
  );
};
