export const toIDR = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(Number(amount))
}