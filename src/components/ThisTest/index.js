import React, {useState} from "react";

const ThisTest = () => {

    const [state,setState] = useState("")

    return (
        <>
            <button
                type="button"
                value="something"
                onClick={(e) => {updateState(this.value)}}
            ></button>
        </>
    );
};

export default ThisTest;
