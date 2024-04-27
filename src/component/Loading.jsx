import Lottie from "lottie-react";
import groovyWalkAnimation from "./groovyWalk.json";

const Loading = () => {
    return (<Lottie animationData={groovyWalkAnimation} loop={true} />
    );
};

export default Loading;