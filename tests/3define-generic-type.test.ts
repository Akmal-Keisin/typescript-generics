describe('Manually Define Generic Type', () => {
	type ApiResponse<Data> = {
		data: Data;
		isError: boolean;
	};

	it('should be able to manually define generic type in a variable', () => {
		const response: ApiResponse<{ message: string; data: object[] }> = {
			data: {
				message: 'Api returned successfully',
				data: [
					{
						id: 1,
						name: 'Hello Name',
					},
				],
			},
			isError: false,
		};

		expect(response.data).toHaveProperty('message');
		expect(response.data).toHaveProperty('data');
		expect(response.isError).toBe(false);
	});

	it('should be able to define new type with generic type', () => {
		type UserResponse = ApiResponse<{ id: number; name: string }[]>;

		const userResponse: UserResponse = {
			data: [
				{
					id: 1,
					name: 'Akmal',
				},
				{
					id: 2,
					name: 'Keisin',
				},
			],
			isError: false,
		};
	});
});
