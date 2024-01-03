// @ts-ignore
import {createAnalyticsClient} from "@cue-ai/analytics-client-web";

const analyticsClient = createAnalyticsClient({
    apiKey: "your-api-key", //put your api key here
    organizationId: "test_add", //put your organization here ,
});

export const App = () => {
    const handleButtonClick = async () => {
        try {
            await analyticsClient.event("button-click", {
                description: "User clicked the button",
                clickTime: new Date().toISOString(),
            });
            alert("Successfully Logged Data")
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <h1 className={"text-2xl"}>Test your logs</h1>
            <button
                type="button"
                className="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={handleButtonClick}
            >
                Log an Event
            </button>
        </div>
    );
};

export default App;
