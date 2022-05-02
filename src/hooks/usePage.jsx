import { useContext } from "react";
import PageContext from "../context/PageContext";

function usePage() {
    return useContext(PageContext)
}

export default usePage