export const getTickets = async searchId => {
    const response = await fetch(
        `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
    );
    if (!response.ok) {
        throw new Error("Server error!");
    }
    const data = response.json();
    return data;
};
