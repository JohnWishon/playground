import React, { Component } from "react";
import { ReactiveBase, TagCloud, SingleDataList, MultiDataList, ToggleButton, ReactiveList, SelectedFilters } from "@appbaseio/reactivesearch";

import { meetupList as MeetupList } from "./resultViews";

export default class TagCloudDefault extends Component {
	render() {
		return (
			<ReactiveBase
				app="meetup_app"
				url="https://1e47b838a035:767b5a1a-03cb-4c5f-a536-4f399c24134b@arc-cluster-appbase-tryout-k8dsnj.searchbase.io"
				enableAppbase
				{...this.props}
			>
				<div className={`row ${this.props.themePreset}`}>
					<div className="col">
						<ToggleButton
							componentId="CitySensor"
							title="ToggleButton"
							dataField="group.group_topics.topic_name_raw.keyword"
							data={[
								{ label: 'Social', value: 'Social' },
								{ label: 'Adventure', value: 'Adventure' },
								{ label: 'Music', value: 'Music' },
							]}
						/>
						<br />
						<SingleDataList
							componentId="CitySensor3"
							title="SingleDataList"
							dataField="group.group_topics.topic_name_raw.keyword"
							data={[
								{ label: 'Open Source', value: 'Open Source' },
								{ label: 'Social', value: 'Social' },
								{ label: 'Adventure', value: 'Adventure' },
								{ label: 'Music', value: 'Music' },
							]}
						/>
						<br />
						<MultiDataList
							componentId="CitySensor4"
							title="MultiDataList"
							dataField="group.group_topics.topic_name_raw.keyword"
							data={[
								{ label: 'Open Source', value: 'Open Source' },
								{ label: 'Social', value: 'Social' },
								{ label: 'Adventure', value: 'Adventure' },
								{ label: 'Music', value: 'Music' },
							]}
						/>
						<br />
						<TagCloud
							componentId="CitySensor2"
							title="TagCloud"
							dataField="group.group_city.keyword"
							size={50}
						/>
					</div>
					<div className="col">
						<SelectedFilters componentId="CitySensor" />
						<ReactiveList
							componentId="SearchResult"
							dataField="group.group_topics.topic_name_raw.keyword"
							title="Results"
							sortBy="asc"
							className="result-list-container"
							from={0}
							size={5}
							innerClass={{
								image: 'meetup-list-image'
							}}
							pagination
							react={{
								and: ["CitySensor", "CitySensor2", "CitySensor3", "CitySensor4"]
							}}
							{...this.props}
						>
							{({ data }) => (
								<ReactiveList.ResultListWrapper>
									{
										data.map(item => <MeetupList {...item} />)
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
