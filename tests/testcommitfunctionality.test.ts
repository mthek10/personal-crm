```typescript
import { testCommitFunctionality } from './path_to_your_function';

describe('testCommitFunctionality', () => {
    it('should return a success message when a commit message is provided', async () => {
        const commitMessage = 'Initial commit';

        const result = await testCommitFunctionality(commitMessage);

        expect(result).toEqual({ success: true, message: 'Commit successful' });
    });

    it('should throw an error when no commit message is provided', async () => {
        const commitMessage = '';

        await expect(testCommitFunctionality(commitMessage)).rejects.toThrow('Commit message is required');
    });

    it('should return an error message when the commit process fails', async () => {
        const commitMessage = 'This will cause an error';

        // Mock the commit process to simulate a failure
        jest.spyOn(global, 'setTimeout').mockImplementationOnce((callback: Function) => {
            callback(new Error('An error occurred during the commit process'));
            return 0 as any;
        });

        const result = await testCommitFunctionality(commitMessage);

        expect(result).toEqual({ success: false, message: 'An error occurred during the commit process' });
    });

    // Clean up after each test
    afterEach(() => {
        jest.restoreAllMocks();
    });
});
```