import { useState } from "react";

const useInput = (defaultValue) => {
    const [value, setValue] = useState(defaultValue);

    // Returning two values value and onChange func.
    return {
        value,
        onChange: (e) => {
            setValue(e.target.value);
        },
    };
};

export default useInput;
