export const words = {
	MAIN_TITLE: '🚇 지하철 길찾기',
	START_POINT: '출발역',
	END_POINT: '도착역',
	FINDPATH_BUTTON: '길 찾기',
	SHORTEST_PATH: '최단거리',
	SHORTEST_TIME: '최소시간',
	RESULT: '📝 결과',
	TOTAL_TIME: '총 거리',
	TOTAL_DISTANCE: '총 소요 시간',
};

export const ids = {
	STARTPOINT_INPUT_ID: 'departure-station-name-input',
	ENDPOINT_INPUT_ID: 'arrival-station-name-input',
	RADIO_BUTTON_NAME: 'search-type',
	FINDPAHT_BUTTON_ID: 'search-button',
};

export const errorMessage = {
	LESS_THAN_TWO_LETTER: '❌ 역이름은 2글자 이상이어야 합니다.',
	NOT_EXISTED_STATION:
		'❌ 존재하지 않는 역을 출발/도착역으로 입력할 수 없습니다.',
	SAME_START_END_POINT: '❌ 출발역과 도착역은 같을 수 없습니다.',
	CANNOT_FIND: '❌ 갈 수 있는 경로가 없습니다.',
};
