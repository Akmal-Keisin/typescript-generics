describe('Default Generic Type', () => {
	type ApiResponse<Data = { status: boolean; data: object[] }> = {
		data: Data;
		isError: boolean;
	};

	it('should be able to implement generic type with default type', () => {
		const apiResponse: ApiResponse = {
			data: {
				status: true,
				data: [
					{ id: 1, name: 'Akmal' },
					{ id: 2, name: 'Keisin' },
				],
			},
			isError: false,
		};

		expect(apiResponse.data).toHaveProperty('status');
		expect(apiResponse.data).toHaveProperty('data');
	});
});
