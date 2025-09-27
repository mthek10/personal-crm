```typescript
import { getInteractiveLearningTools, InteractiveTool } from './InteractiveLearningTools';

describe('InteractiveLearningTools', () => {
    describe('getInteractiveLearningTools', () => {
        it('should return a list of interactive learning tools on success', async () => {
            const tools: InteractiveTool[] = [
                new InteractiveTool(1, 'Tool 1', 'This is an interactive learning tool 1.'),
                new InteractiveTool(2, 'Tool 2', 'This is an interactive learning tool 2.'),
                new InteractiveTool(3, 'Tool 3', 'This is an interactive learning tool 3.')
            ];

            const result = await getInteractiveLearningTools();

            expect(result.status).toEqual('success');
            expect(result.data).toEqual(tools);
        });

        it('should return an error status and an empty list on failure', async () => {
            const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

            // Simulate an error by throwing an exception in the function
            jest.spyOn(global, 'getInteractiveLearningTools').mockImplementationOnce(() => {
                throw new Error('Test error');
            });

            const result = await getInteractiveLearningTools();

            expect(result.status).toEqual('error');
            expect(result.data).toEqual([]);
            expect(consoleSpy).toHaveBeenCalledWith('Error fetching interactive learning tools:', new Error('Test error'));

            consoleSpy.mockRestore();
        });
    });
});
```