const getButtonIndex = (maxIndex, middleButton, limit) => {
	const noOfButtonsDisplayed = Math.min(maxIndex,limit);
	if (middleButton === maxIndex-1 || middleButton === maxIndex)
		return [maxIndex - noOfButtonsDisplayed + 1, maxIndex];
	else if (middleButton === 1 || middleButton === 2)
		return [1, noOfButtonsDisplayed];
	else
		return [middleButton - 2, middleButton + 2];
}

const Pagination = ({ totalPosts, limit, page, setPage }) => {
	const maxIndex = Math.ceil(totalPosts/limit);
	const btns = [];
	const [startIndex, endIndex] = getButtonIndex(maxIndex, page, limit);
	for (let i = startIndex; i <= endIndex; i++) {
		btns.push(i);
	}

	return (<div className="pagination-buttons">
			{ btns.map(btn => (
				<button className="pagination-btn"
				key={btn}
				onClick={e => setPage(parseInt(e.target.value))}
				value={btn}>{btn}</button>
			))};
		</div>
		)
}

export default Pagination;