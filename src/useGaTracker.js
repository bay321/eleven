import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";


const useGaTracker = () => {
    const location = useLocation();
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        if (!window.location.href.includes("localhost")) {
        ReactGA.initialize('G-61TBSKKBM7');
        }
        setInitialized(true);
    }, []);

    useEffect(() => {
        if (initialized) {
        ReactGA.send({ hitType: "pageview", page: window.location.pathname });
        }
    }, [initialized, location]);
};

export default useGaTracker;