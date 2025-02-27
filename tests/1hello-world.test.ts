describe('Hello World', () => {
	// Trying to return any arg
	// We don't know the received arg type and we will returned any instead of the type of the arg
	function identifyParameter(arg: any): any {
		return arg;
	}

	// Here's generic comes
	// After adding <Type> we will know the type of the captured arg and the returned arg
	function identifyParameterWithGeneric<Type>(arg: Type): Type {
		return arg;
	}

	it('should be able to implement basic usage of generic', () => {
		const word: string = 'Hello World';
		const numeric: number = 1000;
		expect(identifyParameter(word)).toBe('Hello World');
		expect(identifyParameter(numeric)).toBe(1000);
		expect(identifyParameterWithGeneric<string>(word)).toBe('Hello World');
		expect(identifyParameterWithGeneric(numeric)).toBe(1000);
	});
});
