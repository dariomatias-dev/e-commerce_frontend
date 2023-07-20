const formatPhone = (value: string) => {
    if (value.length > 17) return value.slice(0, 17);

    return value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d{1,2})/, "+$1 $2")
        .replace(/(\d{2})(\d{1,5})/, "$1 $2")
        .replace(/(\d{5})(\d{1,4})$/, "$1-$2");
};

export default formatPhone;
