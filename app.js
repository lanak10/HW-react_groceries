class App extends React.Component {
    state = {
        products: groceryList,
        item: '',
        brand: '',
        units: '',
        quantity: 0,
        isPurchased: false
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const newItem = {
            item: this.state.item,
            brand: this.state.brand,
            units: this.state.units,
            quantity: this.state.quantity
        }

        this.setState({
            products: [newItem, ...this.state.products]
        })
    }

    toggleIsPurchased = () => {
        this.setState({
            isPurchased: !this.state.isPurchased
        })
    }

    render() {
        return (
            <div>
            <h1>Grocery List</h1>

            {this.state.isPurchased ? 'Yes all items are purchased' : 'No items are not purchased'}

            <form class="form" onSubmit={this.handleSubmit}>
            <label>Item:</label>
            <input type="text" value={this.state.item} onChange={this.handleChange} id="item"></input>
            <label>Brand:</label>
            <input type="text" value={this.state.brand} onChange={this.handleChange} id="brand"></input>
            <label>Units:</label>
            <input type="text" value={this.state.units} onChange={this.handleChange} id="units"></input>
            <label>Quantity:</label>
            <input type="number" value={this.state.quantity} onChange={this.handleChange} id="quantity"></input>
            <input type="submit"></input>

            
            <ol>
                {!this.state.isPurchased ? this.state.products.map(product => <li>{product.item} &emsp; {product.brand} &emsp; {product.units} &emsp; Quantity: {product.quantity}</li>) : " "}  
            </ol>

            <button class="button" onClick={this.toggleIsPurchased}>Remove</button>
            
            </form>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
)