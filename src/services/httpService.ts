export const httpService = async (
    path: string,
    method = "GET",
    body: any = null
) => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/${path}`,
            {
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: body ? JSON.stringify(body) : null,
            }
        );

        const data = await response.json();

        return data;
    } catch (err) {
        console.log(err);
    }
};
