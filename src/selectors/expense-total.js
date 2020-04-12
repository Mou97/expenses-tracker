export default (expenses) => {

    let sum = expenses.reduce((acc, current) => acc + current.amount, 0)

    return sum
}