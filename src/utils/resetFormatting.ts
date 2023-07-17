const resetFormatting = (content: string) => {
    return content
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/ /g, "_")
        .toLocaleLowerCase();
};

export default resetFormatting;
