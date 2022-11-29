const Expense = require('../models/expense');

module.exports.getExpenses = (req, res, next) => {
    Expense.findAll()
        .then(result => {
            res.json(result);
        })
        .catch(err => console.log(err));
}

module.exports.postAddExpense = (req, res, next) => {
    Expense.create({
        amount: req.body.amt,
        description: req.body.dsp,
        category: req.body.ctg
    })
        .then(result => {
            res.json(result);
        })
        .catch(err => { console.log(err) });
};

module.exports.deleteExpenses = (req, res, next) => {
    const expenseId = req.params.expenseId;
    Expense.destroy({ where: { id: expenseId } })
        .then(res.json({ message: 'Deleted Successfully' }))
        .catch(err => console.log(err));
};