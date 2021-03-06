import React, { Component } from "react";
import {
	ReactiveBase,
	RangeInput,
	SelectedFilters,
	ReactiveList
} from "@appbaseio/reactivesearch";

import { booksList as BooksList } from "./resultViews";

export default class RangeInputDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="good-books-ds"
				url="https://1e47b838a035:767b5a1a-03cb-4c5f-a536-4f399c24134b@arc-cluster-appbase-tryout-k8dsnj.searchbase.io"
				enableAppbase
			>
				<div className="row">
					<div className="col">
						<RangeInput
							dataField="ratings_count"
							componentId="BookSensor"
							range={{
								start: 3000,
								end: 50000
							}}
							rangeLabels={{
								start: '3K',
								end: '50K'
							}}
							{...this.props}
						/>
					</div>

					<div className="col">
						<SelectedFilters />
						<ReactiveList
							componentId="SearchResult"
							dataField="original_title"
							from={0}
							size={3}
							className="result-list-container"
							pagination
							react={{
								and: "BookSensor"
							}}
							{...this.props}
						>
							{({ data }) => (
								<ReactiveList.ResultListWrapper>
									{
										data.map(item => <BooksList {...item} />)
									}
								</ReactiveList.ResultListWrapper>
							)}
						</ReactiveList>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
