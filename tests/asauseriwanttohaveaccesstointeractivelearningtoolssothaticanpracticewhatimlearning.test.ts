```typescript
import { getLearningTools, InteractiveLearningTool, LearningToolsResponse } from './path_to_your_file';

describe('getLearningTools function', () => {
    let tools: InteractiveLearningTool[];
    let response: LearningToolsResponse;

    beforeEach(() => {
        tools = [
            {
                id: '1',
                name: 'Tool 1',
                description: 'This is an interactive learning tool.',
                url: 'http://example.com/tool1',
            },
            // More tools...
        ];

        response = {
            success: true,
            message: 'Interactive learning tools fetched successfully.',
            data: tools,
        };
    });

    it('should return a successful response when fetching learning tools', async () => {
        const result = await getLearningTools();
        expect(result).toEqual(response);
    });

    it('should return the correct number of learning tools', async () => {
        const result = await getLearningTools();
        expect(result.data?.length).toEqual(tools.length);
    });

    it('should return an error response when fetching fails', async () => {
        const errorMessage = 'Error fetching interactive learning tools: Network Error';
        const errorResponse = {
            success: false,
            message: errorMessage,
        };

        // Mock the function to throw an error
        jest.spyOn(global, 'getLearningTools').mockImplementationOnce(() => {
            throw new Error('Network Error');
        });

        try {
            await getLearningTools();
        } catch (error) {
            expect(error).toEqual(errorResponse);
        }
    });
});
```