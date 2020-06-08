import React from "react";

import Sky from "react-sky";

const animatedBG = (props) => (
    <div>
        <Sky
          images={{
            /* FORMAT AS FOLLOWS */
            0: "https://upload.wikimedia.org/wikipedia/commons/1/19/Triangle_blue.svg",
            1: "https://upload.wikimedia.org/wikipedia/commons/4/48/Light_Blue_Circle.svg",
            2: "https://upload.wikimedia.org/wikipedia/commons/2/26/Blank_Hexagonal_Icon.svg"
            /* ... */
          }}
          how={70} /* Pass the number of images Sky will render chosing randomly */
          time={20} /* time of animation */
          size={'20px'} /* size of the rendered images */
          background={'rgb(56, 195, 246)'} /* color of background */
        />
    </div>
)

export default animatedBG