describe('Generic Type In Function', () => {
	// The ElementType generic type in <> could be anything.
	// The generic type inside <> could be more than one and can be used in another parameter
	function identityFirstArray<ElementType>(arg: ElementType[]): ElementType {
		return arg[0];
	}

	it('should be able to implement generic type in function', () => {
		const numbers = [1, 2, 3];
		const firstNumber = identityFirstArray(numbers);

		const strings = ['hello', 'world'];
		const firstString = identityFirstArray<string>(strings);

		expect(firstNumber).toBe(1);
		expect(firstString).toBe('hello');
	});

	it('should bee able to implement generic type in Map', () => {
		// The generic type of this map is <any, any> by default.
		// But we can define if the generic type in this map to be <string, number> explecitly
		// The map from const mapSample: Map<any, any> will turned to :
		// const mapSample: Map<string, number>
		const mapSample = new Map<string, number>();
		mapSample.set('age', 200);
	});
});
