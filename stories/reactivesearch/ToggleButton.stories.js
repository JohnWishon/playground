import React, { Component } from "react";
import {
	ReactiveBase,
	ToggleButton,
	ResultList,
	SelectedFilters
} from "@appbaseio/reactivesearch";
import ResponsiveStory from './ResponsiveStory';

export default class ToggleButtonDefault extends Component {
	constructor(props) {
		super(props);

		this.toggleData = [{
			label: "Social",
			value: "Social"
		}, {
			label: "Travel",
			value: "Travel"
		}, {
			label: "Outdoors",
			value: "Outdoors"
		}];

		this.onData = this.onData.bind(this);
	}

	onData(res) {
		return {
			image: res.member.photo,
			title: res.member.member_name,
			desc: (
				<div>
					<p>is going to {res.event.event_name} at {res.venue_name_ngrams}</p>
					<p>{res.group_city_ngram}</p>
				</div>
			),
			url: res.event.event_url
		};
	}

	componentDidMount() {
		ResponsiveStory();
	}

	render() {
		return (
			<ReactiveBase
				app="meetup_demo"
				credentials="LPpISlEBe:2a8935f5-0f63-4084-bc3e-2b2b4d1a8e02"
			>
				<div className="row">
					<div className="col s6 col-xs-6">
						<SelectedFilters componentId="MeetupTops" />
						<ToggleButton
							dataField="group.group_topics.topic_name_raw.raw"
							componentId="MeetupTops"
							title="ToggleButton"
							data={this.toggleData}
							{...this.props}
						/>
					</div>

					<div className="col s6 col-xs-6">
						<ResultList
							componentId="SearchResult"
							dataField="name"
							from={0}
							size={40}
							onData={this.onData}
							showPagination={true}
							react={{
								and: ["MeetupTops"]
							}}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
