


export async function fetchData(archive) {
    try {
        const response = await archive;
        return response;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

