import { BASE_URL } from "../constants/UrlContants";

export const getAllQuestions = async () => {
    try {

        const response = await fetch(BASE_URL + '/mockData.json', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json();
        if (!response.ok) {
            console.log("Error in response")
        }
        if (!data.length) {
            console.log("Empty response")
            return []
        }
        return data
    }
    catch (err) {
        console.log(err)
        // also we can report to sentry or other logger here
    }
}