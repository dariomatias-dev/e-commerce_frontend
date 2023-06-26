const formatStateRegistration = (value: string) => {
    if (value.length > 15)
        return value.slice(0, 15);

    return value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d{3})(\d{3})(\d{3})/, '$1.$2.$3.$4');
};

export default formatStateRegistration;
