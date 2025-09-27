```typescript
import { fetchLearningTools } from './learningTools';

describe('fetchLearningTools', () => {
  it('returns the correct data when the operation is successful', async () => {
    const expectedResult = {
      success: true,
      message: 'Learning tools fetched successfully.',
      data: [
        {
          name: 'Quiz',
          description: 'A set of questions to test your understanding.',
          isAvailable: true,
        },
        {
          name: 'Flashcards',
          description: 'Cards with questions or terms on one side and the answers on the other.',
          isAvailable: true,
        },
        {
          name: 'Interactive Videos',
          description: 'Videos with embedded interactive elements.',
          isAvailable: false,
        },
      ],
    };

    const result = await fetchLearningTools();
    expect(result).toEqual(expectedResult);
  });

  it('returns the correct error message when an error occurs', async () => {
    const expectedResult = {
      success: false,
      message: 'An error occurred while fetching the learning tools.',
      data: [],
    };

    // Mock the function to throw an error
    jest.spyOn(global, 'fetchLearningTools').mockImplementation(() => {
      throw new Error();
    });

    const result = await fetchLearningTools();
    expect(result).toEqual(expectedResult);
  });

  // Restore the original function after the test
  afterEach(() => {
    jest.restoreAllMocks();
  });
});
```
This Jest test suite includes two test cases. The first one tests the successful operation of the `fetchLearningTools` function, and the second one tests the error handling of the function. The `afterEach` block ensures that the original function is restored after each test case.