import { FC, useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "../../../app/hooks/useOnClickOutside";

export const CvContextMenu: FC<{
  cvBlueprintRef: React.MutableRefObject<HTMLDivElement | null>;
}> = ({ cvBlueprintRef }) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const contextMenuRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(contextMenuRef, () => setMenuOpened(false));

  useEffect(() => {
    if (cvBlueprintRef.current) {
      cvBlueprintRef.current.addEventListener("contextmenu", (e) => {
        e.preventDefault();

        setMenuOpened(true);
      });
    }
  }, [cvBlueprintRef]);

  if (!menuOpened) return null;

  return (
    <div ref={contextMenuRef}>
      <button>texto</button>
      <button>lista</button>
      <button>link</button>
    </div>
  );
};
