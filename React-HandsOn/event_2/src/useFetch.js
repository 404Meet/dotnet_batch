import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [events, setEvents] = useState (null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error("Could not fetch the data for that response");
                }
                return res.json();
            })
            .then(data => {
                setEvents(data);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
            });
    }, [url]);

    return {events};
}

export default useFetch;