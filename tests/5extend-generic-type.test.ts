describe('Extend Generic Type', () => {
	type Animal<AdditionalData extends object> = {
		name: string;
		age: number;
		additionalData: AdditionalData;
	};

	type Car<AdditionalData extends object = { haveTurbo: boolean }> = {
		name: string;
		additionalData: AdditionalData;
	};

	it('should be able to implement generic type with extends', () => {
		const cat: Animal<{ type: string }> = {
			name: 'Burger',
			age: 2,
			additionalData: {
				type: 'Angora',
			},
		};

		expect(cat.name).toBe('Burger');
		expect(cat.age).toBe(2);
		expect(cat.additionalData).toHaveProperty('type');
	});

	it('should be able to implement generic type with extends and default extend', () => {
		const lamborgini: Car = {
			name: 'Lamborgini',
			additionalData: {
				haveTurbo: true,
			},
		};

		expect(lamborgini.name).toBe('Lamborgini');
		expect(lamborgini.additionalData).toHaveProperty('haveTurbo');
	});
});
