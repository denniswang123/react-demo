import react, { useState, createElement } from "react";

const App = () => {

	const [changeWithoutKey, setChangeWithoutKey] = useState(false);
	const [changeWithKey, setChangeWithKey] = useState(false);

	const changeOrderWithoutKey = () => {
		setChangeWithoutKey(!changeWithoutKey);
	}

	const changeOrderWithKey = () => {
		setChangeWithKey(!changeWithKey);
	}

	const firstOrderId = [
		{
			id: 1
		},
		{
			id: 2
		}
	]
	const secondOrderId = [
		{
			id: 2
		},
		{
			id: 1
		}
	]
	

	return (
		<>
			<div>
				<button onClick={changeOrderWithoutKey}>Change Order Without Key</button>
				{changeWithoutKey ?
					<div>
						<input />
						<p>Hello World</p>
					</div>
					:
					<div>
						<p>Hello World</p>
						<input />
					</div>}
			</div>
			<div>
				<button onClick={changeOrderWithKey}>Change Order With Key</button>
				{changeWithKey ?
					firstOrderId.map(item => {
						return <input key={item.id} />
					}) :
					secondOrderId.map(item => {
						return <input key={item.id} />
					})
				}
			</div>

		</>
	)
}

export default App;