const _apiBase = "https://aviasales-test-api.kata.academy/";

export const getTickets = async searchId => {
    const response = await fetch(`${_apiBase}tickets?searchId=${searchId}`);
    if (!response.ok) {
        throw new Error("Server error!");
    }
    const data = response.json();
    return data;
};

export const getSearchId = async () => {
    const res = await fetch(`${_apiBase}search`);
    const id = await res.json();
    return id.searchId;
};
