import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CustomSkeleton() {
    return(
        <Skeleton count={3} highlightColor="#ffe600" style={{margin: "0.5rem", height: "10vh"}}/>
    )
}

export default CustomSkeleton