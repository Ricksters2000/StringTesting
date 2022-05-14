export const checkTypeOfLink = (link): string => {
    if(link.includes('.') || link.includes('http') || link.includes('www')) return 'absolute';
    return 'relative';
}

export const fixString = (str: string): string => str.trim().split(/\s{1,}/g).join(' ');

export const validateString = (str: string): boolean => {
    return !str.toLowerCase().includes('error:');
}