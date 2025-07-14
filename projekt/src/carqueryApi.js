function fetchJSONP(url) {
    return new Promise((resolve, reject) => {
        const callbackName = `jsonp_callback_${Math.round(100000 * Math.random())}`;

        window[callbackName] = (data) => {
            delete window[callbackName];
            document.body.removeChild(script);
            resolve(data);
        };

        const script = document.createElement("script");
        script.src = `${url}&callback=${callbackName}`;
        script.onerror = () => {
            delete window[callbackName];
            document.body.removeChild(script);
            reject(new Error("Błąd ładowania JSONP"));
        };
        document.body.appendChild(script);
    });
}

export async function fetchModelsForMake(make) {
    const url = `https://www.carqueryapi.com/api/0.3/?cmd=getModels&make=${make}`;
    const data = await fetchJSONP(url);
    return data.Models || [];
}

export async function fetchCarDetails(make, model) {
    const url = `https://www.carqueryapi.com/api/0.3/?cmd=getTrims&make=${make}&model=${model}`;
    const data = await fetchJSONP(url);
    console.log("Received trims:", data.Trims);
    return data.Trims || [];
}

