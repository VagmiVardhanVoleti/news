import { useState } from "react";
import Loading from "../common/Loading";

const withLoader = (Comp) => {
  const LoadingComp = (props) => {
    const [showLoading, setShowLoading] = useState(false);

    const startLoading = () => {
      setShowLoading(true);
    };

    const stopLoading = () => {
      setShowLoading(false);
    };

    return (
      <>
        {showLoading && <Loading />}
        <Comp
          {...props}
          startLoading={startLoading}
          stopLoading={stopLoading}
        />
      </>
    );
  };
  return LoadingComp;
};

export default withLoader;
