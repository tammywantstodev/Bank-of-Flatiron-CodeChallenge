import { useState } from 'react'
import './App.css'
import data from './data/db.json'
import AddTransaction from "./AddTransaction"
import Filter from "./Filter"
function App() {
    const [allTransactions, setAllTransactions] = useState(data.transactions)
function handleAddTransaction(newTransaction) {
        setAllTransactions([...allTransactions, newTransaction])
}
    const removeTransaction=(id)=> {
        setAllTransactions(allTransactions.filter((transaction) => transaction.id !== id))
    }
    const [inputCategory, setInputCategory] = useState('');
    const [filteredItems, setFilteredItems] = useState(data.transactions);

    const handleFilter = () => {
        if (inputCategory.trim() === '') {

            setAllTransactions(data.transactions);
        } else {

            const filtered = data.transactions.filter((item) =>
                item.category.toLowerCase().includes(inputCategory.toLowerCase())
            );
            setAllTransactions(filtered);
        }
    };
    return (
        <div>
            <h1>Bank of Flatiron</h1>
            <AddTransaction onAddTransaction={handleAddTransaction}/>
            <Filter  handleFilter={handleFilter}
                     inputCategory={inputCategory}
                     setInputCategory={setInputCategory}/>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Remove Transaction</th>
                </tr>
                </thead>
                <tbody>
                {allTransactions.map((row) => (
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.date}</td>
                        <td>{row.description}</td>
                        <td>{row.category}</td>
                        <td>{row.amount}</td>
                        <button onClick={() => removeTransaction(row.id)}>Remove</button>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}


export default App
