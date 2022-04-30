import { useState } from "react";

function usePageProvider() {
    const [checked, setChecked] = useState(false)

    return {
        checked,
        setChecked
    }
}

export default usePageProvider