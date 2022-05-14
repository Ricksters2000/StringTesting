import { checkTypeOfLink, fixString, validateString } from "./stringChecks";

const getResFromEvent = (ev: Event, output: HTMLElement, pred: Function) => {
    let el: HTMLInputElement = ev.target as HTMLInputElement;
    let val: string = el.value;

    let res = pred(val);

    output.textContent = res;
}

window.onload = () => {
    //get elements
    const linkCheckInput: HTMLElement = document.getElementById('link-check-input');
    const linkCheckResult: HTMLElement = document.getElementById('link-check-result') as HTMLElement;
    
    const fixStringInput: HTMLElement = document.getElementById('fix-string-input');
    const fixStringResult: HTMLElement= document.getElementById('fix-string-result');

    const validateStringInput: HTMLElement = document.getElementById('validate-string-input');
    const validateStringResult: HTMLElement = document.getElementById('validate-string-result');

    //setup events
    linkCheckInput.addEventListener('change', (ev: Event) => getResFromEvent(ev, linkCheckResult, checkTypeOfLink))
    fixStringInput.addEventListener('change', (ev: Event) => getResFromEvent(ev, fixStringResult, fixString));
    validateStringInput.addEventListener('change', (ev: Event) => getResFromEvent(ev, validateStringResult, validateString));

}