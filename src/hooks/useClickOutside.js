import React, { useEffect } from "react";

const useClickOutside = (ref, callback, nodeIgnoreList?) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      console.log("contains the list", nodeIgnoreList);
      let toReturn = false;

      //  List of dom nodes to ignore
      if (nodeIgnoreList) {
        nodeIgnoreList?.forEach((item) => {
          console.log(item.current === event.target);
          if (
            item.current === event.target ||
            item.current.contains(event.target)
          ) {
            toReturn = true;
          }
        });
      }

      if (toReturn) return;

      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, nodeIgnoreList, callback]);
};

export default useClickOutside;
