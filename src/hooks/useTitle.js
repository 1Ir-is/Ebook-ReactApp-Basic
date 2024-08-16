import { useEffect } from "react";


export const useTitle = (title) => {

    useEffect(() => {
        document.title = `${title} - eBookSphere`;
    }, [title]);

  return null;
}
