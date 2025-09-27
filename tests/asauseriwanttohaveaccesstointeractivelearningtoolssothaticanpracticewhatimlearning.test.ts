```typescript
import { getInteractiveLearningTools } from './interactiveLearningTools';

describe('getInteractiveLearningTools', () => {
    const mockTools = [
        {
            name: 'Tool 1',
            description: 'This is a description of Tool 1.',
            url: 'http://example.com/tool1'
        },
        {
            name: 'Tool 2',
            description: 'This is a description of Tool 2.',
            url: 'http://example.com/tool2'
        }
    ];

    it('should return a list of interactive learning tools for a given subject', async () => {
        const subject = 'math';
        const result = await getInteractiveLearningTools(subject);

        expect(result.success).toBe(true);
        expect(result.data).toEqual(mockTools);
        expect(result.message).toBe(`Successfully fetched interactive learning tools for subject: ${subject}`);
    });

    it('should throw an error when an error occurs during the operation', async () => {
        const subject = 'math';
        const errorMessage = 'Failed to fetch interactive learning tools for subject: ${subject}. Error: Network Error';

        jest.spyOn(global, 'fetch').mockImplementationOnce(() =>
            Promise.reject(new Error(errorMessage))
        );

        try {
            await getInteractiveLearningTools(subject);
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error).toHaveProperty('message', errorMessage);
        }
    });
});
```
Please note that the actual implementation of the `getInteractiveLearningTools` function is not provided, so the test is based on the provided function signature and the mock data. The `fetch` function is mocked to simulate an error scenario.