import { checkTypeOfLink, fixString, validateString } from "./stringChecks";

test('Determine if link is absolute or relative', () => {
    expect(checkTypeOfLink('https://www.upwork.com/nx/job-post/regular/')).toBe('absolute');
    expect(checkTypeOfLink('/nx/job-post/regular/')).toBe('relative');
    expect(checkTypeOfLink('upwork.com/')).toBe('absolute');
})

test('fix string function', () => {
    expect(fixString(' bla bla  bla')).toBe('bla bla bla');
    expect(fixString('This is a test  with         a bit of spaces               .')).toBe('This is a test with a bit of spaces .');
    expect(fixString('    This has many  spaces on both sides       ')).toBe('This has many spaces on both sides');
    expect(fixString('Test  with    random    amount  of spaces     everywhere   .')).toBe('Test with random amount of spaces everywhere .');
})

test('validate string', () => {
    expect(validateString('Error: missing name')).toBe(false);
    expect(validateString('User authenticated')).toBe(true);
})